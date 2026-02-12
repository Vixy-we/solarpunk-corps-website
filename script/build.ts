import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile } from "fs/promises";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  // Step 1: Build client bundle (SPA assets)
  console.log("Step 1/4: Building client...");
  await viteBuild();

  // Step 2: Build SSR entry (bundle ALL deps so CJS/ESM compat is handled by Vite)
  console.log("Step 2/4: Building SSR entry for prerendering...");
  await viteBuild({
    build: {
      ssr: "src/entry-server.tsx",
      outDir: "../dist/server",
      emptyOutDir: true,
    },
    ssr: {
      // Bundle everything into the output so Node doesn't need to resolve
      // CJS modules like react-helmet-async at runtime via ESM imports
      noExternal: true,
    },
  });

  // Step 3: Prerender all routes to static HTML
  console.log("Step 3/4: Prerendering static pages...");
  const { execSync } = await import("child_process");
  execSync("npx tsx script/prerender.ts", { stdio: "inherit" });

  // Step 4: Build Express server
  console.log("Step 4/4: Building Express server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
