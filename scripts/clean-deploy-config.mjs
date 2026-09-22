import { rmSync } from "node:fs";

// Remove the old SSR adapter redirect so deployments use the static hosting config.
rmSync(new URL("../.wrangler/deploy/config.json", import.meta.url), { force: true });
