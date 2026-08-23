export const APPLY_NOW_ANCHOR = "apply-now";

const PENDING_SCROLL_KEY = "spc-pending-scroll-anchor";

export const DEFAULT_PAGE_ANCHORS: Record<string, string> = {
  "/about": "about-top",
  "/what-we-do": "activities-top",
  "/our-team": "team-top",
  "/structure": "structure-top",
  "/sponsors": "sponsor-top",
  "/projects": "projects-top",
  "/contact": "contact-main",
  "/alumni": "alumni-top",
};

/** Maps /membership routes to /structure#apply-now */
export function resolveHref(href: string): string {
  const [path] = href.split("#");
  if (path === "/membership") {
    return `/structure#${APPLY_NOW_ANCHOR}`;
  }
  return href;
}

export function setPendingScrollAnchor(anchorId: string): void {
  sessionStorage.setItem(PENDING_SCROLL_KEY, anchorId);
}

export function consumePendingScrollAnchor(): string | null {
  const pending = sessionStorage.getItem(PENDING_SCROLL_KEY);
  if (pending) {
    sessionStorage.removeItem(PENDING_SCROLL_KEY);
  }
  return pending;
}

export function scrollToAnchor(anchorId: string, maxAttempts = 20): void {
  let attempts = 0;
  const tryScroll = () => {
    attempts += 1;
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (attempts < maxAttempts) {
      setTimeout(tryScroll, 100);
    }
  };
  setTimeout(tryScroll, 120);
}

export function navigateWithScroll(
  navigate: (path: string) => void,
  currentLocation: string,
  href: string,
  options?: { onBeforeNavigate?: () => void }
): void {
  options?.onBeforeNavigate?.();

  const resolved = resolveHref(href);
  const [path, hash] = resolved.split("#");

  if (path === "/" || path === "") {
    navigate("/");
    window.dispatchEvent(new Event("scrollToTop"));
    return;
  }

  const targetHash = hash || DEFAULT_PAGE_ANCHORS[path];

  if (path !== currentLocation) {
    if (targetHash) {
      setPendingScrollAnchor(targetHash);
    }
    navigate(path);
  } else if (targetHash) {
    scrollToAnchor(targetHash);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
