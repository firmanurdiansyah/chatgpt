import { statSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = "apps/showcase/dist/assets";
const maxBytes = 750 * 1024;
const files = readdirSync(root).filter((file) => /\.(js|css)$/.test(file));
const total = files.reduce(
  (sum, file) => sum + statSync(join(root, file)).size,
  0,
);

if (total > maxBytes) {
  console.error(`Bundle budget exceeded: ${total} bytes > ${maxBytes} bytes`);
  process.exit(1);
}

console.log(`Bundle budget: ${total} / ${maxBytes} bytes`);
