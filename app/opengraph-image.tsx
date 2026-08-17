import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} | ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          background:
            "radial-gradient(ellipse at 0% 0%, #ffc4dc 0%, transparent 55%), radial-gradient(ellipse at 100% 100%, #c9d4f0 0%, transparent 55%), linear-gradient(180deg, #f9f1e5 0%, #ebe0ce 100%)",
          color: "#2a2a2e",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "#e5006a",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 2,
              color: "#6e6c72",
              fontStyle: "italic",
            }}
          >
            Sakura Scrub Service
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 28,
              color: "#6e6c72",
              fontWeight: 500,
            }}
          >
            株式会社
          </div>
          <div
            style={{
              fontSize: 128,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -3,
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <span style={{ color: "#e5006a" }}>桜</span>
            <span style={{ fontStyle: "italic", margin: "0 8px" }}>Scrub</span>
            <span>サービス</span>
          </div>
          <div
            style={{
              fontSize: 44,
              fontStyle: "italic",
              color: "#2a2a2e",
              marginTop: 16,
            }}
          >
            清潔で快適な空間のご提供
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#6e6c72",
          }}
        >
          <div>特許技術による防カビ・レジオネラ対策</div>
          <div style={{ fontStyle: "italic" }}>Clean and comfortable space</div>
        </div>
      </div>
    ),
    size,
  );
}
