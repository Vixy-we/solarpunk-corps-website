import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, "..", p);

// Minimal browser globals required by libraries like canvas-confetti,
// framer-motion, etc. that reference DOM APIs at module load time.
const noop = () => { };
const noopObj = () => ({});
(globalThis as any).window = {
    addEventListener: noop,
    removeEventListener: noop,
    dispatchEvent: noop,
    requestAnimationFrame: (cb: () => void) => setTimeout(cb, 0),
    cancelAnimationFrame: noop,
    matchMedia: () => ({ matches: false, addListener: noop, removeListener: noop, addEventListener: noop, removeEventListener: noop }),
    getComputedStyle: () => ({}),
    localStorage: { getItem: () => null, setItem: noop, removeItem: noop },
    location: { href: "", pathname: "/", search: "", hash: "" },
    document: null as any, // set below
    navigator: { userAgent: "node" },
};
(globalThis as any).document = {
    createElement: () => ({
        style: {},
        setAttribute: noop,
        appendChild: noop,
        removeChild: noop,
        addEventListener: noop,
        removeEventListener: noop,
        getContext: () => ({
            canvas: {}, clearRect: noop, beginPath: noop, arc: noop, fill: noop,
            save: noop, restore: noop, translate: noop, rotate: noop, scale: noop,
            bezierCurveTo: noop, closePath: noop, transform: noop, setTransform: noop,
            drawImage: noop,
        }),
    }),
    createElementNS: () => ({ setAttribute: noop, style: {}, appendChild: noop }),
    getElementsByTagName: () => [],
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    head: { appendChild: noop, removeChild: noop, querySelectorAll: () => [], querySelector: () => null, getElementsByTagName: () => [] },
    body: { appendChild: noop, removeChild: noop, classList: { add: noop, remove: noop }, querySelectorAll: () => [], querySelector: () => null },
    documentElement: { style: {}, classList: { add: noop, remove: noop } },
    createTextNode: () => ({}),
    currentScript: null,
    addEventListener: noop,
    removeEventListener: noop,
};
(globalThis as any).window.document = (globalThis as any).document;
(globalThis as any).requestAnimationFrame = (globalThis as any).window.requestAnimationFrame;
(globalThis as any).cancelAnimationFrame = noop;
(globalThis as any).HTMLCanvasElement = class { };
(globalThis as any).HTMLElement = class { };
(globalThis as any).IntersectionObserver = class {
    observe = noop;
    unobserve = noop;
    disconnect = noop;
};
(globalThis as any).ResizeObserver = class {
    observe = noop;
    unobserve = noop;
    disconnect = noop;
};
(globalThis as any).MutationObserver = class {
    observe = noop;
    disconnect = noop;
};
(globalThis as any).localStorage = { getItem: () => null, setItem: noop, removeItem: noop, clear: noop };
(globalThis as any).getComputedStyle = () => ({});
(globalThis as any).scrollTo = noop;
(globalThis as any).scroll = noop;
(globalThis as any).matchMedia = (globalThis as any).window.matchMedia;
(globalThis as any).location = (globalThis as any).window.location;
(globalThis as any).history = { pushState: noop, replaceState: noop, back: noop, forward: noop };
(globalThis as any).CustomEvent = class extends Event { detail: any; constructor(type: string, opts?: any) { super(type); this.detail = opts?.detail; } };
(globalThis as any).DOMParser = class { parseFromString() { return { querySelector: () => null, querySelectorAll: () => [] }; } };
(globalThis as any).fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve({}), text: () => Promise.resolve("") });
(globalThis as any).SVGElement = class { };
(globalThis as any).Element = class { };
(globalThis as any).Node = class { };
(globalThis as any).DocumentFragment = class { };
(globalThis as any).CSSStyleDeclaration = class { };
(globalThis as any).Image = class { onload = noop; onerror = noop; src = ""; };

// Suppress React's useLayoutEffect SSR warning — it's informational-only
// and doesn't affect the rendered output, but causes non-zero exit codes.
const originalError = console.error;
console.error = (...args: any[]) => {
    const msg = typeof args[0] === "string" ? args[0] : "";
    if (msg.includes("useLayoutEffect") || msg.includes("Warning:")) return;
    originalError.apply(console, args);
};

// --- Load built artifacts ---
const template = fs.readFileSync(toAbsolute("dist/public/index.html"), "utf-8");

let render: (url: string, context: any) => { html: string; helmet: any };
try {
    const entryPath = toAbsolute("dist/server/entry-server.js");
    const mod = await import(pathToFileURL(entryPath).href);
    render = mod.render;
    console.log("✓ Server entry loaded successfully");
} catch (e: any) {
    console.error("✗ Failed to load server entry:", e.message);
    console.error(e.stack);
    process.exit(1);
}

// Routes to prerender — keep in sync with sitemap.xml
const routesToPrerender = [
    "/",
    "/about",
    "/structure",
    "/what-we-do",
    "/projects",
    "/sponsors",
    "/our-team",
    "/contact",
    "/alumni",
    "/sponsors/partner",
    "/projects/rover",
    "/projects/magazine",
    "/projects/survey",
    "/hidden-egg",
    "/experience-spc",
    "/under-construction",
    "/csr",
    "/events",
    "/events/greenshift",
    "/manifesto",
];

let success = 0;
let failed = 0;

for (const url of routesToPrerender) {
    try {
        const { html: appMarkup, helmet } = render(url, {});

        // react-helmet-async stores data in helmet.helmet
        const helmetData = (helmet as any).helmet;

        const headTags = helmetData
            ? [
                helmetData.title?.toString() ?? "",
                helmetData.meta?.toString() ?? "",
                helmetData.link?.toString() ?? "",
                helmetData.script?.toString() ?? "",
            ].join("\n")
            : "";

        const html = template
            .replace("<!--app-head-->", headTags)
            .replace("<!--app-html-->", appMarkup);

        // Determine output file path
        const filePath =
            url === "/" ? "dist/public/index.html" : `dist/public${url}/index.html`;
        const absPath = toAbsolute(filePath);
        const dir = path.dirname(absPath);

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(absPath, html);
        console.log(`  ✓ ${url} → ${filePath}`);
        success++;
    } catch (e: any) {
        console.error(`  ✗ ${url}: ${e.message}`);
        failed++;
    }
}

console.log(`\nPrerender complete: ${success} succeeded, ${failed} failed`);
if (failed > 0) process.exit(1);
// Force clean exit to prevent lingering async tasks (useEffect timers, etc.)
// from crashing the process after successful prerendering.
process.exit(0);
