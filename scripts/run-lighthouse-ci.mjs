import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const url = process.env.AUDIT_URL || "http://127.0.0.1:3000";
const outputPath = "lighthouse-ci.json";
const runCommand = process.platform === "win32" ? "npx.cmd" : "npx";

const run = spawnSync(
  runCommand,
  [
    "lighthouse",
    url,
    "--chrome-flags=--headless",
    "--output=json",
    `--output-path=${outputPath}`,
    "--quiet",
  ],
  { stdio: "inherit" },
);

if (run.status !== 0) {
  process.exit(run.status ?? 1);
}

const report = JSON.parse(readFileSync(outputPath, "utf8"));
const thresholds = {
  performance: 0.9,
  accessibility: 0.95,
  seo: 0.95,
};

const scores = {
  performance: report?.categories?.performance?.score ?? 0,
  accessibility: report?.categories?.accessibility?.score ?? 0,
  seo: report?.categories?.seo?.score ?? 0,
};

console.log("Lighthouse category scores:");
for (const [key, value] of Object.entries(scores)) {
  console.log(`- ${key}: ${Math.round(value * 100)}`);
}

const failing = Object.entries(thresholds).filter(([key, value]) => scores[key] < value);
if (failing.length > 0) {
  console.error("Lighthouse thresholds failed:");
  for (const [key, value] of failing) {
    console.error(`- ${key}: required ${Math.round(value * 100)}, got ${Math.round(scores[key] * 100)}`);
  }
  process.exit(1);
}
