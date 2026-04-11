import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

// NOTE: ロゴから抽出した実物の桜花びらマーク (public/images/brand/mark.png) を使用。
// 文字とのベースライン差を埋めるため微小な translate-y を baked in
export function SakuraMark({ className }: Props) {
  return (
    <Image
      src="/images/brand/mark.png"
      alt=""
      width={64}
      height={64}
      aria-hidden
      className={cn("translate-y-[1px]", className)}
      unoptimized
    />
  );
}
