import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const service: string | undefined = body?.service;
  const id: string | undefined = body?.id;

  revalidatePath("/");

  if (service === "services") {
    revalidatePath("/services/[id]", "page");
    if (id) revalidatePath(`/services/${id}`);
  }

  if (service === "news") {
    revalidatePath("/news/[id]", "page");
    if (id) revalidatePath(`/news/${id}`);
  }

  return NextResponse.json({ revalidated: true, service, id });
}
