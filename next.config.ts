import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Next (Turbopack) inferred the wrong workspace root due to an extra lockfile
  // outside this project. That can break CSS tooling discovery (PostCSS/Tailwind).
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
