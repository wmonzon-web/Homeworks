/** Recreate the supplied Homeworks lockup as scalable, outlined SVG artwork. */
import satori from "satori";
import { readFileSync, writeFileSync } from "node:fs";

// The type in the supplied reference is closest to Arial Black and Arial Bold.
// Fonts are used only while generating; all exported lettering is outlined.
const displayFont = readFileSync("C:/Windows/Fonts/ariblk.ttf");
const supportingFont = readFileSync("C:/Windows/Fonts/arialbd.ttf");
const BG = "#060409";
const WHITE = "#DAD8DD";
const RED = "#852720";
const RULE = "#A5A2A7";
const h = (type, props, ...children) => ({
  type,
  props: { ...props, children: children.length === 1 ? children[0] : children },
});
const fonts = [
  { name: "Arial Black", data: displayFont, weight: 900, style: "normal" },
  { name: "Arial Bold", data: supportingFont, weight: 700, style: "normal" },
];

function name(homeColor, fontSize, letterSpacing) {
  return h("div", { style: { display: "flex", alignItems: "center", fontFamily: "Arial Black", fontSize, fontWeight: 900, letterSpacing, lineHeight: 1 } },
    h("span", { style: { color: homeColor } }, "HOME"),
    h("span", { style: { color: RED } }, "WORKS"),
  );
}

async function renderCompact(homeColor) {
  return satori(
    h("div", { style: { display: "flex", width: 272, height: 40, alignItems: "center" } }, name(homeColor, 37, -1.5)),
    { width: 272, height: 40, fonts },
  );
}

async function renderFull(background) {
  const main = await satori(h("div", { style: { display: "flex", alignItems: "center", width: 1100, height: 150 } }, name(WHITE, 143, -5.5)), { width: 1100, height: 150, fonts });
  const tagline = await satori(h("div", { style: { display: "flex", alignItems: "center", width: 932, height: 48, color: WHITE, fontFamily: "Arial Bold", fontWeight: 700, fontSize: 37, letterSpacing: 1.9 } }, "A PROFESSIONAL HOME REPAIR COMPANY"), { width: 932, height: 48, fonts });
  const division = await satori(h("div", { style: { display: "flex", alignItems: "center", width: 850, height: 42, color: WHITE, fontFamily: "Arial Bold", fontWeight: 700, fontSize: 31, letterSpacing: 1.6 } }, "A DIVISION OF XTREME BUILD GROUP INC."), { width: 850, height: 42, fonts });
  const image = (svg, x, y, width, height) => `<image x="${x}" y="${y}" width="${width}" height="${height}" preserveAspectRatio="none" href="data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}"/>`;
  const viewBox = background ? "0 0 1170 356" : "96 12 960 320";
  const width = background ? 1170 : 960;
  const height = background ? 356 : 320;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${width}" height="${height}">${background ? `<rect width="1170" height="356" fill="${BG}"/>` : ""}${image(main, 101, 5, 1001, 158)}<rect x="108" y="168" width="932" height="4" fill="${RULE}"/>${image(tagline, 108, 198, 1017, 48)}<rect x="108" y="258" width="932" height="3" fill="${RULE}" opacity=".5"/>${image(division, 198, 290, 935, 42)}</svg>`;
}

async function renderMark(background) {
  return satori(
    h("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, background: background ? BG : "transparent", color: RED, fontFamily: "Arial Black", fontWeight: 900, fontSize: 43 } }, "W"),
    { width: 48, height: 48, fonts },
  );
}

writeFileSync(new URL("../public/brand/wordmark.svg", import.meta.url), await renderCompact(BG));
writeFileSync(new URL("../public/brand/wordmark-light.svg", import.meta.url), await renderCompact(WHITE));
writeFileSync(new URL("../public/brand/lockup.svg", import.meta.url), await renderFull(false));
writeFileSync(new URL("../public/brand/logo.svg", import.meta.url), await renderFull(true));
writeFileSync(new URL("../public/brand/mark.svg", import.meta.url), await renderMark(false));
writeFileSync(new URL("../public/favicon.svg", import.meta.url), await renderMark(true));
console.log("Wrote Homeworks reference-style logo SVGs");
