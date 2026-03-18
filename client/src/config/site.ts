export const SITE_LIVE = true;
export const INAUGURATION_MODE = false;

/*
 * SITE CONFIGURATION MODES:
 * 
 * 1. SITE_LIVE = true
 *    - The website is fully accessible (Normal Production Mode).
 *    - All routes in App.tsx are reachable.
 * 
 * 2. SITE_LIVE = false && INAUGURATION_MODE = true
 *    - "Coming Soon" with an Unlocked entry point.
 *    - Shows the ComingSoon page initially, but allows entry (unlocks App).
 * 
 * 3. SITE_LIVE = false && INAUGURATION_MODE = false
 *    - "Strictly Locked" Mode.
 *    - Shows the ComingSoon page only, no manual entry.
 */
