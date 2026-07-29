import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { SakuraMark } from "@/components/brand/sakura-mark";
import { client, type ServiceItem } from "@/lib/microcms";

async function fetchServices(): Promise<ServiceItem[]> {
  const data = await client.getList<ServiceItem>({
    endpoint: "services",
    queries: { limit: 12, orders: "publishedAt" },
    customRequestInit: { next: { revalidate: 3600 } },
  });
  return data.contents;
}

export async function Services() {
  let services: ServiceItem[] = [];
  try {
    services = await fetchServices();
  } catch {
    services = [];
  }

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-2 font-accent text-base text-muted">
              <SakuraMark className="h-3 w-3 text-sakura-500" />
              services
            </p>
            <h2 className="mt-6 text-[40px] font-medium leading-[1.05] tracking-display text-foreground md:text-[56px] lg:text-[72px]">
              施工
              <span className="font-accent font-normal text-sakura-500">
                MENU
              </span>
            </h2>
          </div>
          <p className="w-full text-sm leading-[1.95] text-muted md:ml-auto md:w-auto md:whitespace-nowrap md:pb-4 md:text-right md:text-[15px]">
            企業様・管理会社様への店舗、事務所、社員寮、社用車等のスポット・定期清掃、
            賃貸物件の退去後の清掃も承っております。
          </p>
        </Reveal>

        <RevealGroup
          stagger={0.08}
          className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-24 md:grid-cols-3 md:gap-x-10 md:gap-y-16"
        >
          {services.map((s, i) => {
            const index = String(i + 1).padStart(2, "0");
            return (
              <RevealItem as="article" key={s.id} className="group relative">
                <a href={`/services/${s.id}`} className="block">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-6 left-0 z-20 font-accent text-5xl leading-none text-foreground/20 transition group-hover:text-[color:var(--color-accent-primary)] md:-top-8 md:text-6xl lg:-top-10 lg:text-7xl"
                  >
                    {index}
                  </span>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-background ring-1 ring-border">
                    <Image
                      src={s.image.url}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-3 px-1">
                    <h3 className="text-base font-medium leading-tight text-foreground transition group-hover:text-[color:var(--color-accent-primary)] md:text-lg lg:text-xl">
                      {s.title}
                    </h3>
                    <span
                      aria-hidden
                      className="mt-1 h-px flex-1 translate-y-2 bg-border"
                    />
                  </div>
                </a>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
