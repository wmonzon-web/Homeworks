/**
 * Renders public/og/default.png (1200x630) from the brand tokens.
 * Run: node scripts/generate-og.mjs   (re-run when the wordmark or tagline changes)
 */
import satori from "satori";
import sharp from "sharp";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname;
const saira = readFileSync(`${root}node_modules/@fontsource/saira-condensed/files/saira-condensed-latin-700-normal.woff`);

const INK = "#0C1015", RED = "#E82820", CREAM = "#FBF3EA";
const h = (type, props, ...children) => ({ type, props: { ...props, children: children.length === 1 ? children[0] : children } });

const svg = await satori(
  h("div", { style: { width: 1200, height: 630, display: "flex", flexDirection: "column", justifyContent: "space-between", background: INK, color: "#fff", padding: 72, fontFamily: "Saira Condensed" } },
    h("div", { style: { display: "flex", alignItems: "center", gap: 18 } },
      h("div", { style: { width: 56, height: 56, borderRadius: 12, background: RED, display: "flex", alignItems: "center", justifyContent: "center" } },
        h("svg", { width: 40, height: 40, viewBox: "0 0 32 32", fill: "none" },
          h("path", { d: "M6.5 15.5 16 7l9.5 8.5", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
          h("path", { d: "M10.5 15v11M21.5 15v11", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round" }),
          h("path", { d: "M10.5 20.5h11", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round" }),
        ),
      ),
      h("div", { style: { fontSize: 44, letterSpacing: 4, textTransform: "uppercase" } }, "Homeworks"),
    ),
    h("div", { style: { display: "flex", flexDirection: "column", gap: 20 } },
      h("div", { style: { fontSize: 22, letterSpacing: 5, textTransform: "uppercase", color: RED } }, "Las Vegas home services"),
      h("div", { style: { fontSize: 96, lineHeight: 0.95, textTransform: "uppercase", letterSpacing: 1, maxWidth: 1000 } }, "Repairs & renovations for the house you're keeping."),
    ),
    h("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 26, color: CREAM, opacity: 0.8 } },
      h("div", {}, "Drywall · Paint · Flooring · Plumbing · Electrical · Handyman"),
      h("div", {}, "homeworksnv.com"),
    ),
  ),
  { width: 1200, height: 630, fonts: [{ name: "Saira Condensed", data: saira, weight: 700, style: "normal" }] },
);
mkdirSync(`${root}public/og`, { recursive: true });
const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(`${root}public/og/default.png`, png);
console.log(`Wrote public/og/default.png (${png.length} bytes)`);
