# SPC Website Structure Document

This document describes the full structure of the Solarpunk Corps (SPC) website.

It covers, in order:

1. Project identity and scope
2. Technology stack
3. Source layout
4. Routing architecture
5. Full route reference
6. Redirects, aliases, and anchor mappings
7. Content of each page
8. Navigation structure
9. Footer structure
10. SEO and metadata
11. Prerendering and deployment
12. API endpoints
13. External integrations
14. Sitemap

All findings below come from source inspection of `client/src`, `server`, `script`, and the root config files.

## 1. Project Identity

- Club: Solarpunk Corps (SPC), a student-led robotics and sustainability club.
- Home institution: Bundelkhand Institute of Engineering and Technology (BIET), Jhansi, Uttar Pradesh, India.
- Department: Mechanical Engineering Department.
- Canonical site: https://solarpunkcorps.vercel.app
- Tagline: Where Technology, Nature, and People Meet.
- Contact email: solarpunkcorps@gmail.com
- Email used in structured data: solarpunkcorps@gmail.com
- Address: Mechanical Engineering Department, Bundelkhand Institute of Engineering and Technology, Jhansi, Uttar Pradesh, India
- Maps link: https://maps.app.goo.gl/L6nDMgSCPwpDdvv97
- Social channels:
  - LinkedIn: https://www.linkedin.com/company/solarpunk-corps/
  - X: https://x.com/SolarpunkCorps
  - GitHub: https://github.com/SolarpunkCorps
  - Instagram: https://www.instagram.com/we.the.spc/

The club builds practical technology at the intersection of robotics, artificial intelligence, sustainable development, real-world impact, and social work.

## 2. Technology Stack

Client:

- React 18.3.1
- react-dom 18.3.1
- TypeScript 5.6.3
- Vite 5.4.20
- @vitejs/plugin-react 4.7.0
- Tailwind CSS 3.4.17
- tailwindcss-animate, PostCSS, Autoprefixer
- Framer Motion 11.13.1
- Wouter 3.3.5 for client-side routing
- react-helmet-async 2.0.5 for document head management
- @tanstack/react-query 5.60.5
- Radix UI component set (shadcn-style components under `client/src/components/ui`)
- lucide-react 0.453.0
- react-icons 5.4.0

Server and data:

- Express 4.21.2
- Drizzle ORM 0.39.3, Drizzle Zod, Zod 3.24.2, zod-validation-error
- PostgreSQL driver: pg 8.16.3
- Session and auth scaffolding: express-session, memorystore, connect-pg-simple, passport, passport-local

Delivery:

- Vercel deployment
- @vercel/analytics 2.0.1
- canvas-confetti 1.9.4
- Google Fonts loaded through link tags in page components
- Google Forms for membership applications
- Tally for the contact form embed
- Google Apps Script web apps for alumni and partner form submissions
- HitWebCounter for the page counter

## 3. Source Layout

- `client/src/App.tsx` - router definition, app gate, redirect component
- `client/src/main.tsx` - client entry
- `client/src/pages/` - route page components
- `client/src/components/` - shared chrome and page sections (navigation, footer, SEO, hero, about, vision, membership, divisions, what-we-do, projects, contact, faq, support, sponsor, scroll-to-top, theme-toggle, ui)
- `client/src/lib/` - navigation helpers, query client, utilities
- `client/src/config/` - site mode flags
- `client/public/` - static assets such as images and fonts
- `server/` - Express server, API routes, static serving
- `script/` - build script and prerender script
- `shared/` - shared schema and types
- `dist/` - build output

## 4. Routing Architecture

### 4.1 Router

`client/src/App.tsx` exports a default `App` component that renders a Wouter-based router through a `Router` wrapper.

- The wrapper accepts an optional router hook so SSR can pass a location.
- Inside, a Wouter `Switch` maps path strings to page components.
- A `ScrollToTop` component listens for a custom `scrollToTop` window event and scrolls smoothly to the top.
- The router effect runs on location change, consumes a pending scroll anchor from session storage, and scrolls there. If no pending anchor exists, it scrolls to the top smoothly.

### 4.2 Site Mode Gate

`client/src/config/site.ts` exports:

- `SITE_LIVE = true`
- `INAUGURATION_MODE = true`

Behavior:

- `SITE_LIVE = true`: full app is rendered. All routes are reachable.
- `SITE_LIVE = false` and `INAUGURATION_MODE = true`: the `ComingSoon` page renders first and offers an unlocked entry through the `onEnter` callback. After entry the app renders.
- `SITE_LIVE = false` and `INAUGURATION_MODE = false`: the `ComingSoon` page renders strictly locked, with no manual entry.

The current deployment uses the first branch.

### 4.3 Membership Redirect

The `/membership` route renders the internal `MembershipRedirect` component. On mount it:

1. Calls `setPendingScrollAnchor("apply-now")`.
2. Navigates to `/structure`.

The pending anchor is stored under the session storage key `spc-pending-scroll-anchor` and consumed by the router effect. The result is that visiting `/membership` lands the user on `/structure` scrolled to the apply section.

### 4.4 Navigation Helpers

`client/src/lib/navigation.ts` exports:

- `APPLY_NOW_ANCHOR = "apply-now"`
- `DEFAULT_PAGE_ANCHORS` map from route path to default section id
- `resolveHref` which rewrites `/membership` to `/structure#apply-now`
- `setPendingScrollAnchor` and `consumePendingScrollAnchor`
- `scrollToAnchor`
- `navigateWithScroll`

### 4.5 Scroll Behavior

- On route change, the router consumes a pending anchor and scrolls to it, or scrolls to the top smoothly.
- Navigation components use `navigateWithScroll` so that in-page anchor jumps behave correctly after navigation.

## 5. Full Route Reference

### 5.1 Route Table

| Path | Page component | Source file | Sections rendered | SEO handling | Prerendered |
| --- | --- | --- | --- | --- | --- |
| `/` | Home | `client/src/pages/home.tsx` | Hero, ethos, glimpses, horizon preview, launch, playground, support | Yes | Yes |
| `/about` | About | `client/src/pages/about.tsx` | About section, vision section, footer | Yes | Yes |
| `/structure` | Structure | `client/src/pages/structure.tsx` | Membership, divisions | Yes | Yes |
| `/membership` | MembershipRedirect | `client/src/App.tsx` | Renders nothing | No | No |
| `/what-we-do` | What We Do | `client/src/pages/what-we-do.tsx` | What we do section | Yes | Yes |
| `/projects` | Projects | `client/src/pages/projects.tsx` | Projects section | Yes | Yes |
| `/sponsors` | Sponsors | `client/src/pages/sponsors.tsx` | Support section | Yes | Yes |
| `/our-team` | Our Team | `client/src/pages/our-team.tsx` | Team sections | Yes | Yes |
| `/contact` | Contact | `client/src/pages/contact.tsx` | Contact section, FAQ section | Yes | Yes |
| `/sponsors/alumni` | Alumni | `client/src/pages/alumni.tsx` | Alumni page | Yes | No |
| `/alumni` | Alumni | `client/src/pages/alumni.tsx` | Alumni page | Yes | Yes |
| `/sponsors/partner` | Partner | `client/src/pages/partner.tsx` | Partner page | Yes | Yes |
| `/projects/rover` | Solar Rover | `client/src/pages/project-rover.tsx` | Rover page | Yes | Yes |
| `/projects/magazine` | CodeGreen Magazine | `client/src/pages/project-magazine.tsx` | Magazine page | Yes | Yes |
| `/projects/survey` | Campus Survey | `client/src/pages/project-survey.tsx` | Survey page | Yes | Yes |
| `/projects/robotic-arm` | Robotic Arm | `client/src/pages/project-robotic-arm.tsx` | Robotic arm page | Yes | Yes |
| `/projects/LiDAR-mapping` | LiDAR Mapping | `client/src/pages/project-lidar.tsx` | LiDAR page | Yes | Yes |
| `/hidden-egg` | Hidden Egg | `client/src/pages/hidden-egg.tsx` | Arcade scene | Yes | Yes |
| `/experience-spc` | Experience SPC | `client/src/pages/experience-spc.tsx` | Scroll narrative | Yes | Yes |
| `/under-construction` | Under Construction | `client/src/pages/under-construction.tsx` | Construction page | Noindex | Yes |
| `/csr` | CSR | `client/src/pages/csr.tsx` | CSR page | Yes | Yes |
| `/events` | Events | `client/src/pages/events.tsx` | Events page | Yes | Yes |
| `/events/horizon` | Horizon Vision | `client/src/pages/horizon.tsx` | Horizon vision | Yes | Yes |
| `/events/horizon1-2026` | Horizon 1.0 Recap | `client/src/pages/horizon1-2026.tsx` | Horizon recap | Yes | Yes |
| `/events/horizon2-2026` | Horizon 2.0 Recap | `client/src/pages/horizon2-2026.tsx` | Horizon 2.0 recap | Yes | Yes |
| `/manifesto` | Manifesto | `client/src/pages/manifesto.tsx` | Manifesto | Yes | Yes |
| Any unmatched path | Not Found | `client/src/pages/not-found.tsx` | Not found page | Noindex | No |

### 5.2 Notes on Route Mapping

- The alumni page component is shared by `/alumni` and `/sponsors/alumni`. Only `/alumni` is prerendered.
- The partner page lives at `/sponsors/partner`.
- The sponsor page lives at `/sponsors`.
- Project detail pages use nested paths under `/projects`.
- Event pages use nested paths under `/events`.
- The hidden egg, experience page, construction page, and CSR page are standalone routes.

### 5.3 Not Found

The fallback route renders `client/src/pages/not-found.tsx`. It shows a 404 card with the message "Did you forget to add the page to the router?" and sets `robots` to `noindex, follow`.

### 5.4 Coming Soon

The `ComingSoon` page is not a routed page. It is used by the site mode gate in `client/src/App.tsx` when the site is not fully live.

## 6. Redirects and Anchor Mappings

### 6.1 Membership Redirect

- Source route: `/membership`
- Target route: `/structure` with anchor `apply-now`
- Mechanism: `MembershipRedirect` in `client/src/App.tsx` sets the pending scroll anchor and navigates.
- Anchor constant: `APPLY_NOW_ANCHOR = "apply-now"` in `client/src/lib/navigation.ts`.
- Pending anchor storage key: `spc-pending-scroll-anchor`.

### 6.2 Default Page Anchors

`DEFAULT_PAGE_ANCHORS` maps default landing anchors:

| Route | Anchor |
| --- | --- |
| `/about` | `about-top` |
| `/what-we-do` | `activities-top` |
| `/projects` | `projects-top` |
| `/our-team` | `team-top` |
| `/structure` | `structure-top` |
| `/sponsors` | `sponsor-top` |
| `/contact` | `contact-main` |
| `/alumni` | `alumni-top` |

### 6.3 Anchor Targets Used by Components

- Home hero: `id="hero"`
- About: `id="about-top"`, `id="about"`
- Vision: `id="vision"`
- What we do: `id="activities-top"`, `id="what-we-do"`
- Projects: `id="projects-top"`, `id="projects"`
- Support: `id="support-top"`
- Team: `id="team-top"`, `id="our-team"`
- Contact: `id="contact-main"`, `id="contact"`
- FAQ: `id="faq-top"`, `id="faq"`
- Alumni: `id="alumni-top"`, `id="reconnect-section"`
- Partner: `id="partner-top"`, `id="contact-section"`
- Membership: `id="membership-top"`, `id="membership"`, `id="apply-now"`

## 7. Content of Each Page

### 7.1 Home

Renders: `HeroSection`, ethos section, glimpses carousel, upcoming horizon section, launch section, playground section, support section.

Content summary:

- Hero: badge naming the club, the Robotics and Sustainability Club tag, the name "Solarpunk Corps", subtitle "Where Technology, Nature, and People Meet", three pillars "Technology with Purpose", "Nature in Mind", "People at Heart", club description, buttons to About Us, Our Team, and the apply anchor.
- Ethos section: headline around the solarpunk ethos, three personas (Ecologist, Technologist, Humanist), impact call to action.
- Glimpses of Horizon 1.0: carousel of Horizon 1.0 photos.
- Upcoming Horizon 2.0: headline block for the next horizon.
- Launching with Impact: pilot phase badge, three flagship projects (Solar Rover, CodeGreen magazine, Campus Survey), links to projects and events.
- Our Playground: activity tiles.
- Fuel the Movement: alumni and partner cards, commitment list, final CTA.

### 7.2 About

Renders: `AboutSection`, `VisionSection`, `Footer`, `SEO`.

Content summary:

- Banner with background image `/csr.webp` and title "Solarpunk Corps", subtitle "Where Technology, Nature, and People Meet".
- Badge "About Us", heading "Who We Are".
- Club description paragraph.
- Identity card: Robotics, Sustainability, Social Responsibility, Creativity, Skill Building.
- "What Do We Actually Do?" block: flexible project scope, no rigid roadmap, members define problems.
- Values grid: Hopeful Innovation, Sustainability, Interdisciplinary Collaboration, Social Responsibility, Student Empowerment.
- Vision section: badge "Our Purpose", heading "Vision and Roadmap", "Why We Are Launching", vision points, three-step vision (Seeding: Foundation, Growing: Growth, Blooming: Impact).

### 7.3 Structure and Membership

Renders: `MembershipSection`, `DivisionsSection`, `Footer`, `SEO`.

Content summary:

- Membership header: badge "Join Us", heading "Membership Structure", three tiers:
  - Explorer Members (Explorers), for beginners exploring robotics, sustainability, creative tech.
  - Executive Members (Executives), the action team.
  - Lead Members (Leaders), guide the club.
- Note: membership open to all branches, no experience required.
- Apply section at `id="apply-now"`: badge "InitializeSequence", heading "Spaces are limited.", then "Apply now.", application copy for second-year students, button linking to https://forms.gle/uxobecnUyb8EfnzA8, note that the application takes about 5 to 10 minutes.
- Divisions section: General Secretary (Vision and Strategy), Joint Secretary (Operations and Execution), and nine divisions (Robotics and Core Engineering, Sustainable Systems, Frontier Tech and Design, Research and Documentation, Outreach and Collaborations, Events and Development, Community and CSR, Design and Media, Finance Division).

### 7.4 What We Do

Renders: `WhatWeDoSection`, `Footer`, `SEO`.

Content summary:

- Badge "Core Activities", heading "What We Do".
- Five activity cards: Tech and Innovation, Sustainability and Environment, Club Social Responsibility, Culture and Creativity, Skill Development.
- Note that no projects have started yet, and this is what the club is preparing to do after launch.
- Bridge block: from building robots to healing ecosystems, from serving society to crafting stories.

### 7.5 Projects

Renders: `ProjectsSection`, `Footer`, `SEO`.

Content summary:

- Badge "2026 Roadmap", heading "Inaugural Projects".
- Five project cards: Solar-Powered Environmental Rover (Flagship Project), Project Robotic Arm (Prototype), LiDAR Mapping (Simulation), Solarpunk Magazine Vol. 1 / CodeGreen (Creative), Campus Tech-Life Sustainability Survey (Research).
- Future scope lists per project.
- Closing block: "Want to Bring These Projects to Life?" with support call to action.

### 7.6 Project Detail Pages

- Solar Rover: internal status bar (EcoBotics / HELIOS), PV cells 100 percent, wheels 6x6, status prototyping, "Solar-Powered Env. Rover" heading, mouse parallax SVG, specs grid, support project link.
- Robotic Arm: status design phase, "Field-Ready Robotic Arm", mechanical design, kinematics and control, vision-guided pick, support project.
- LiDAR Mapping: EcoBotics / PERCEPTION, sensor LiDAR, coverage 360 percent, status prototyping, point cloud sensing, SLAM mapping, obstacle avoidance, support project.
- CodeGreen Magazine: masthead "CodeGreen", "Vol. 1", "Defining Our Voice.", editorial fonts, support project.
- Campus Survey: "Phase 1: Participant Recruitment", "Understanding the Digital, Emotional, and Ecological Balance.", topic blocks (Student Tech Habits, Burnout Analysis, Eco-Routine Mapping), research roadmap, support this initiative.

### 7.7 Sponsors, Alumni, Partner

- Sponsors: support section with alumni card and partner card, impact cards, funding areas, commitments.
- Alumni: alumni pathways, advisory network form.
- Partner: partner pathways and collaboration form.

### 7.8 Our Team

Renders: team header plus team sections.

Content summary:

- Header: "Our Heart, Mind and Soul", "Meet the Humans Behind SPC".
- Faculty Guidance, Student Leadership, Core Team / Divisional Heads, Advisory Board Members, Coordinators, Board Members, Explorer Members.
- Closing call to action: applications open soon.

### 7.9 Contact and FAQ

Renders: ContactSection, FaqSection, Footer, SEO.

Content summary:

- Contact heading "Contact Us".
- Tally embed: https://tally.so/embed/VLGYNj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1, fixed height 678.
- Contact info: email solarpunkcorps@gmail.com, Email Us action opens Gmail compose, location, Open Maps action.
- Socials: LinkedIn, Instagram, X, GitHub.
- FAQ: eight questions about the club.

### 7.10 Events and Horizons

- Events: hero, Horizon flagship card, knowledge and awareness card, technical workshops card, closing CTA.
- Horizon: Horizon 1.0 Vision, dark theme, countdown, coming soon badge.
- Horizon 1.0: recap with arsenal, roadmap, vanguard teams, highlights, gallery, family, closing.
- Horizon 2.0: self-contained recap page with its own navigation, days, gallery, reels, footer.

### 7.11 Manifesto

Content summary: refusal opening, disposable futures, building with what we have, optimism, invitation.

### 7.12 Hidden Egg

Arcade scene with canvas, parallax, title mode, games list.

### 7.13 Experience SPC

Scroll driven narrative with five phases.

### 7.14 Under Construction

Construction page with progress indicator, status "Germinating...", return home, visit anyway.

### 7.15 CSR

CSR page with pillars, focus areas, why this matters, FAQ, contact CTA.

### 7.16 Not Found and Coming Soon

Covered above.

## 8. Navigation

`client/src/components/navigation.tsx` renders a fixed top navigation with:

- Logo linking to `/`.
- Desktop menu driven by a NavigationMenu with three groups: About, Work, Sponsor Us, plus a Contact item.
- About group: About Us, Our Team, Structure.
- Work group: What We Do, Events, Projects, CSR.
- Sponsor Us group: Sponsors, Alumni Network, Corporate Partners.
- Contact item: `/contact`.
- Right side: "What's New?" notification popup, Join Us button, theme toggle, mobile menu.

The notification popup promotes applications for academic year 2026 to 2027 and links to `/structure#apply-now`.

## 9. Footer

`client/src/components/footer.tsx` renders three link groups plus socials, email, hit counter, and hidden egg star.

- Organization: About Us, Our Team, Structure, Membership, Manifesto, Experience SPC (badge Experimental, links to `/under-construction`).
- Initiatives: Scope, Events, Rover, Robotic Arm, LiDAR Mapping, Magazine, Campus Survey, Club Social Responsibility (CSR).
- Connect: Sponsor Us, Support as Alumni, FAQ, Contact.

Footer socials: LinkedIn, X, GitHub, Instagram.

Footer email: solarpunkcorps@gmail.com.

Hit counter: hitwebcounter.com page 21482333.

Hidden egg star: `/hidden-egg`.

## 10. SEO and Metadata

- Pages use `client/src/components/seo.tsx` with title, description, keywords, robots, JSON-LD.
- Home renders Organization JSON-LD with alternate names and BIET affiliation, and JSON-LD with contact email.
- Events pages render ItemList and Event JSON-LD.
- Project pages render Product JSON-LD.
- Under construction and not found set `robots` to `noindex, follow`.

## 11. Prerendering and Deployment

`script/prerender.ts` prerenders a list of routes to static HTML:

- `/`
- `/about`
- `/structure`
- `/what-we-do`
- `/projects`
- `/sponsors`
- `/our-team`
- `/contact`
- `/alumni`
- `/sponsors/partner`
- `/projects/rover`
- `/projects/magazine`
- `/projects/survey`
- `/projects/robotic-arm`
- `/projects/LiDAR-mapping`
- `/hidden-egg`
- `/experience-spc`
- `/under-construction`
- `/csr`
- `/events`
- `/events/horizon`
- `/events/horizon1-2026`
- `/events/horizon2-2026`
- `/manifesto`

Output mapping: `/` writes to `dist/public/index.html`; every other route writes to `dist/public<route>/index.html`.

`vercel.json` rewrites all paths to `/index.html` for SPA fallback.

Build flow: `npm run build` runs `tsx script/build.ts`. Start: `cross-env NODE_ENV=production node dist/index.cjs`.

## 12. API Endpoints

`server/routes.ts` registers:

- `POST /api/contact`: validates with `insertContactSchema`, stores via `storage.createContactSubmission`, returns 201 with success message and id.
- `GET /api/contact`: returns contact submissions.

## 13. External Integrations

- Tally: contact form embed at https://tally.so/embed/VLGYNj.
- Google Apps Script: alumni submissions via `VITE_GOOGLE_SCRIPT_ALUMNI_URL`; partner submissions via `VITE_GOOGLE_SCRIPT_PARTNER_URL`.
- Vercel Analytics.
- FlipHTML5 LightBox: sponsor proposal at https://online.fliphtml5.com/hbowt/SPC-Proposal/.
- HitWebCounter.
- Google Forms: membership application at https://forms.gle/uxobecnUyb8EfnzA8.
- Google Maps: https://maps.app.goo.gl/L6nDMgSCPwpDdvv97.

## 14. Sitemap

`client/public/sitemap.xml` lists canonical URLs under https://solarpunkcorps.vercel.app. The file contains 22 URLs and does not include `/hidden-egg` or `/under-construction`, both of which are prerendered.
