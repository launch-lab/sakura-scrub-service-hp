import { client, type WorkItem } from "@/lib/microcms";
import { WorksCarousel, WorksSectionHeader } from "./works-carousel";

type WorkSize = "portrait" | "tall" | "square";

export type WorkCardData = {
  src: string;
  title: string;
  tag: string;
  index: string;
  sizeClass: { card: string; aspect: string };
};

const sizeClassMap: Record<WorkSize, { card: string; aspect: string }> = {
  // NOTE: Aesop 店舗什器のような不均一ギャラリーを演出するため、
  // カードごとにアスペクト比と幅を変化させる
  tall: {
    card: "w-[240px] sm:w-[280px] md:w-[340px] lg:w-[380px]",
    aspect: "aspect-[3/4]",
  },
  portrait: {
    card: "w-[220px] sm:w-[260px] md:w-[320px] lg:w-[360px]",
    aspect: "aspect-[4/5]",
  },
  square: {
    card: "w-[260px] sm:w-[300px] md:w-[360px] lg:w-[400px]",
    aspect: "aspect-square",
  },
};

const subcategoryLabel: Record<string, string> = {
  aircon: "aircon",
  bathroom: "bathroom",
  pipe: "pipe",
  car: "car",
  ceiling: "ceiling",
};

async function fetchWorks(): Promise<WorkCardData[]> {
  const data = await client.getList<WorkItem>({
    endpoint: "works",
    queries: { limit: 12, orders: "-publishedAt" },
    customRequestInit: { next: { revalidate: 3600 } },
  });
  return data.contents.filter((item) => item.image?.url).map((item, i) => {
    const size = (item.size?.fieldId ?? "portrait") as WorkSize;
    const category = item.category?.fieldId ?? "";
    const sub = item.subcategory?.fieldId ?? "";
    const tag = [category, subcategoryLabel[sub] ?? sub]
      .filter(Boolean)
      .join(" / ");
    return {
      src: item.image.url,
      title: item.title,
      tag,
      index: String(i + 1).padStart(2, "0"),
      sizeClass: sizeClassMap[size] ?? sizeClassMap.portrait,
    };
  });
}

export async function Works() {
  let works: WorkCardData[] = [];
  try {
    works = await fetchWorks();
  } catch {
    return null;
  }

  if (works.length === 0) return null;

  return (
    <section id="works" className="relative py-24 md:py-32">
      <WorksSectionHeader />
      <WorksCarousel works={works} />
    </section>
  );
}
