#!/usr/bin/env node
// Regenerates references/component-catalog.md and upstream-skills/*.md from a ThreeUI clone.
// Usage: node scripts/build-catalog.mjs /path/to/threeui-clone
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const clone = path.resolve(process.argv[2] || "");
if (!process.argv[2] || !fs.existsSync(path.join(clone, "src/data/shaders.tsx"))) {
  console.error("Usage: node scripts/build-catalog.mjs <path-to-threeui-clone>");
  process.exit(1);
}
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// 1. component metadata: JSON object literals inside `{ ...{ ... } }` entries of READY_SHADERS
const src = fs.readFileSync(path.join(clone, "src/data/shaders.tsx"), "utf8");
const meta = [];
const re = /\{ \.\.\.\{\n/g;
re.lastIndex = src.indexOf("export const READY_SHADERS");
let m;
while ((m = re.exec(src))) {
  const j = m.index + m[0].length - 2;
  let depth = 0, inStr = false, esc = false, k = j;
  for (; k < src.length; k++) {
    const c = src[k];
    if (inStr) { if (esc) esc = false; else if (c === "\\") esc = true; else if (c === '"') inStr = false; continue; }
    if (c === '"') inStr = true; else if (c === "{") depth++; else if (c === "}" && --depth === 0) break;
  }
  meta.push(JSON.parse(src.slice(j, k + 1)));
  re.lastIndex = k;
}
const parents = meta.filter((x) => !x.variantOf);

// 2. upstream per-component build skills
const skSrc = fs.readFileSync(path.join(clone, "src/components/buildSkillMarkdown.js"), "utf8");
const sk = new Function("return (" + skSrc.match(/const SKILLS = (\{[\s\S]*?\n\});/)[1] + ")")();
fs.mkdirSync(path.join(root, "upstream-skills"), { recursive: true });
for (const [id, md] of Object.entries(sk)) fs.writeFileSync(path.join(root, "upstream-skills", `${id}.md`), md);

// 3. catalog markdown
const byCat = {};
parents.forEach((p) => (byCat[p.category] ??= []).push(p));
let c = `# ThreeUI Community component catalog\n\nGenerated from MengTo/threeui (MIT) by \`scripts/build-catalog.mjs\`. ${parents.length} parent components, ${meta.length} entries including variants.\n\nColumns: **id** (route / upstream-skill name) · **import** (named export of \`@designcodeio/threeui\`) · **runtime** · **assets** (what ships with it) · **variants** · **controls** (tunable props).\n\n`;
for (const [cat, list] of Object.entries(byCat)) {
  c += `## ${cat}\n\n| id | import | runtime | assets | variants | controls |\n|---|---|---|---|---|---|\n`;
  for (const p of list) {
    const vs = meta.filter((x) => x.variantOf === p.id).length;
    c += `| \`${p.id}\` | \`${p.importName}\` | ${p.runtime} | ${p.asset.replace(/\|/g, "/")} | ${vs || "–"} | ${(p.controls || []).map((x) => x.key).join(", ") || "–"} |\n`;
  }
  c += "\n";
}
c += `## Descriptions (match a component to a UI need)\n\n`;
for (const p of parents) c += `- **${p.label}** (\`${p.id}\`, ${p.category}) — ${p.description} Tags: ${p.tags.slice(0, 10).join(", ")}.\n`;
c += `\n## Components with a verbatim upstream build skill\n\nFull authored-source recipes live in \`upstream-skills/<id>.md\`: ${Object.keys(sk).map((k) => "`" + k + "`").join(", ")}.\n`;
fs.writeFileSync(path.join(root, "references/component-catalog.md"), c);
console.log(`catalog: ${parents.length} parents, ${meta.length} total; upstream skills: ${Object.keys(sk).length}`);
