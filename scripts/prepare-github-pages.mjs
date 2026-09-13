import { copyFile, cp, mkdir, rename, rm, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDir = join(process.cwd(), "dist", "client");
const entryHtml = join(outputDir, "github-pages.html");
const indexHtml = join(outputDir, "index.html");
const notFoundHtml = join(outputDir, "404.html");
const nojekyll = join(outputDir, ".nojekyll");
const docsDir = join(process.cwd(), "docs");

try {
  await stat(entryHtml);
} catch {
  console.error("GitHub Pages build failed: dist/client/github-pages.html was not generated.");
  process.exit(1);
}

await rename(entryHtml, indexHtml);
await copyFile(indexHtml, notFoundHtml);
await writeFile(nojekyll, "");

// Also sync clean files to docs/ folder so GitHub Pages served from /docs works seamlessly
try {
  await rm(docsDir, { recursive: true, force: true });
  await mkdir(docsDir, { recursive: true });
  await cp(outputDir, docsDir, { recursive: true });
  console.log("GitHub Pages files also synced to docs/ directory.");
} catch (err) {
  console.warn("Could not copy to docs/:", err.message);
}

console.log("GitHub Pages files ready: dist/client/index.html, 404.html, .nojekyll");