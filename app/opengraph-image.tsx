import { ImageResponse } from "next/og";

export const alt   = "Staal Tutoring – Finance & Business Courses";
export const size  = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, 'Helvetica Neue', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top-left blue accent bar (like the tick marks in the SVG logo) */}
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 80,
            width: 7,
            height: 130,
            background: "#4b58ff",
            borderRadius: 4,
            display: "flex",
            transform: "skewX(-8deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 98,
            width: 7,
            height: 130,
            background: "#4b58ff",
            opacity: 0.3,
            borderRadius: 4,
            display: "flex",
            transform: "skewX(-8deg)",
          }}
        />

        {/* Bottom-right blue accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 64,
            right: 80,
            width: 7,
            height: 130,
            background: "#4b58ff",
            borderRadius: 4,
            display: "flex",
            transform: "skewX(-8deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 64,
            right: 98,
            width: 7,
            height: 130,
            background: "#4b58ff",
            opacity: 0.3,
            borderRadius: 4,
            display: "flex",
            transform: "skewX(-8deg)",
          }}
        />

        {/* Main wordmark */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          {/* "Staal" */}
          <div
            style={{
              display: "flex",
              fontSize: 160,
              fontWeight: 900,
              color: "#1e1c1c",
              letterSpacing: "-5px",
              lineHeight: 1,
            }}
          >
            Staal
          </div>

          {/* "TUTORING" */}
          <div
            style={{
              display: "flex",
              fontSize: 54,
              fontWeight: 700,
              color: "#4b58ff",
              letterSpacing: "16px",
              marginTop: 4,
              textTransform: "uppercase",
            }}
          >
            TUTORING
          </div>
        </div>

        {/* Thin accent line */}
        <div
          style={{
            width: 120,
            height: 4,
            background: "#4b58ff",
            borderRadius: 2,
            marginTop: 44,
            display: "flex",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            color: "#a3a3a3",
            letterSpacing: "1px",
          }}
        >
          Finance &amp; Business Courses
        </div>
      </div>
    ),
    size
  );
}
