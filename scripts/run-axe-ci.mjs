import { spawnSync } from "node:child_process";

const url = process.env.AUDIT_URL || "http://127.0.0.1:3000";
const runCommand = process.platform === "win32" ? "npx.cmd" : "npx";

const run = spawnSync(
  runCommand,
  ["@axe-core/cli", url, "--tags", "wcag2a,wcag2aa", "--exit"],
  { stdio: "inherit" },
);

process.exit(run.status ?? 1);
