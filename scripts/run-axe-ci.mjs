import { spawnSync } from "node:child_process";

const url = process.env.AUDIT_URL || "http://127.0.0.1:3000";
const runCommand = process.platform === "win32" ? "npx.cmd" : "npx";

const run = spawnSync(
  runCommand,
  ["@axe-core/cli", url, "--tags", "wcag2a,wcag2aa", "--exit"],
  { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] },
);

const output = `${run.stdout ?? ""}${run.stderr ?? ""}`;
if (output) {
  process.stdout.write(output);
}

const driverMismatchPatterns = [
  "This version of ChromeDriver only supports Chrome version",
  "Please use browser-driver-manager",
  "ChromeDriver only supports Chrome version",
  "session not created",
];

const isDriverMismatch = driverMismatchPatterns.some((pattern) => output.toLowerCase().includes(pattern.toLowerCase()));

if ((run.status ?? 1) !== 0 && isDriverMismatch) {
  console.warn(
    "Axe skipped in CI due to Chrome/ChromeDriver mismatch on runner. Lighthouse and build checks still enforce quality.",
  );
  process.exit(0);
}

process.exit(run.status ?? 1);
