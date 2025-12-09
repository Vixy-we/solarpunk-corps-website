# Solarpunk Corps Website Design Guidelines

## Design Approach: Eco-Tech Optimism

**Aesthetic Direction**: Bright, hopeful solarpunk — blend of nature and technology, optimistic futurism with environmental consciousness. Think lush greens meeting clean tech interfaces, organic shapes with geometric precision.

**Reference Inspiration**: Combine Stripe's clean sophistication + Notion's approachable warmth + custom eco-tech elements that feel alive and growing.

**Core Principle**: Every section must feel complete, purposeful, and inspiring. This is a launch announcement that needs to excite students AND impress sponsors simultaneously.

---

## Typography System

**Font Families** (via Google Fonts):
- **Headlines**: Inter (700-800 weight) — clean, modern, confident
- **Body**: Inter (400-500) — excellent readability
- **Accents**: Space Grotesk (600) for special callouts and division titles

**Hierarchy**:
- Hero Headlines: text-5xl to text-7xl (bold, commanding presence)
- Section Headers: text-3xl to text-4xl (clear wayfinding)
- Subsections: text-xl to text-2xl (medium weight)
- Body Text: text-base to text-lg (comfortable reading)
- Captions: text-sm (subtle supporting info)

---

## Layout System

**Spacing Units**: Consistently use Tailwind units of **4, 6, 8, 12, 16, 20** (as in p-4, gap-8, mt-12, py-20)

**Section Padding**: 
- Desktop: py-20 to py-32
- Mobile: py-12 to py-16

**Container Strategy**:
- Full-width sections with inner `max-w-7xl mx-auto px-6`
- Text-heavy content: `max-w-4xl` for readability
- Multi-column grids: 2-3 columns on desktop, always stack on mobile

**Multi-Column Usage**:
- 5 Core Activities: 3-column grid (md:grid-cols-2 lg:grid-cols-3)
- 8 Divisions: 4-column grid that flows to 2-column on tablet
- 3 Inaugural Projects: 3-column cards (large, prominent)
- Leadership: 2-3 column grid depending on count
- FAQ: 2-column on desktop, single on mobile

---

## Component Library

### Navigation
Top navigation bar with logo (SPC text + small leaf/gear icon), centered nav links (About, Divisions, Projects, Sponsor, Contact), CTA button on right ("Become a Member")

### Hero Section (Homepage)
Full-viewport hero with **large background image** showing eco-tech fusion (think: green circuit boards, solar panels with plants, tech meets nature). Overlay with semi-transparent gradient. Large centered headline, sub-tagline, description paragraph, 4 prominent CTA buttons in a 2x2 grid or horizontal row with blurred backgrounds.

### Cards
- **Division Cards**: Icon at top, title, 2-3 line description, subtle border, hover lift effect
- **Project Spotlight Cards**: Large, prominent — image/icon, title, detailed description, "Future Scope" section, visual prominence (these are the stars)
- **Value Cards**: For "About Us" core values — icon, title, brief explanation

### Forms
- **Contact Form**: Name, Email, Message (textarea), Category (dropdown: Student/Sponsor/Collaboration/Feedback), Submit button
- **Feedback Form**: Similar structure, different fields if needed
- Generous spacing (gap-6), clear labels, rounded inputs

### Sponsor Section
Premium treatment: Large section with funding breakdown (visual list or cards), commitment badges (✔ checkmarks with descriptions), ROI explanation, direct engagement options, professional tone throughout

### Leadership Grid
Photo placeholders (circular or rounded square), name, title, placeholder for future contact info

### FAQ
Accordion-style or simple Q&A blocks with clear visual separation, minimum 6-8 questions answered

---

## Iconography

**Icon Library**: Heroicons (via CDN) — consistent, modern, pairs well with clean aesthetic

**Usage**:
- Division icons: Technical (wrench), Sustainability (leaf), Community (heart), etc.
- Core activity icons: Sun (tech), plant (sustainability), heart (CSR), palette (culture), rocket (skills)
- Checkmarks for sponsor commitments
- Social media icons in footer

---

## Images

**Hero Image**: Large, optimistic photo showing technology-nature fusion — solar panels with greenery, students working on eco-projects, bright natural lighting. Central placement, full-width.

**Section Backgrounds**: Subtle eco-tech patterns or illustrations — circuit-like vines, geometric leaves, very light opacity

**Project Cards**: Each of 3 inaugural projects should have representative imagery (rover sketch/3D render, magazine mockup, survey interface concept)

**No Images Needed For**: Divisions (use icons), FAQ, most of About section (text-focused)

---

## Animations & Interactions

**Minimal & Purposeful**:
- Smooth scroll between sections
- Cards: subtle hover lift (translate-y-1) + shadow increase
- Hero elements: gentle fade-in on load
- NO complex scroll-triggered animations
- NO distracting parallax effects
- Focus on instant clarity over flashy effects

---

## Page-Specific Guidelines

**Homepage**: Multi-section storytelling — Hero → Quick Intro → 5 Core Activities Grid → CTA to Divisions → Featured Projects Preview → Sponsor CTA → Footer

**Divisions Page**: 8 cards in organized grid, clear categorization (Technical, Research, Outreach, etc.), each card detailed but scannable

**Membership**: Visual hierarchy of 3 tiers (Explorers → Executives → Leaders), progression pathway shown, "Open to All Branches" prominently displayed

**Inaugural Projects (2026 Roadmap)**: Hero section explaining "What your sponsorship will build", 3 large spotlight project cards with extensive detail, visual timeline or roadmap graphic

**Sponsor Us**: Premium section, funding breakdown, transparent commitments (100% Impact Allocation emphasized), quarterly updates promise, open books statement, engagement options, logo placement opportunity mentioned

**Contact**: Working form, social links (LinkedIn, Instagram), email address, physical address (BIET Jhansi), clean layout

**Leadership**: Grid of placeholder cards, editable structure, professional presentation

**FAQ**: Minimum 8 questions covering launch status, eligibility, branch openness, fees, sponsor reporting

---

## Critical Implementation Notes

- Every section must be **comprehensive** — no sparse, minimal layouts
- Storytelling flow: Frame as exciting launch, not established club
- Messaging clarity: "We are launching", "Founding stage", "Help us build"
- Bright, hopeful tone throughout — optimistic about future while honest about starting point
- Sponsor section must feel professional and trustworthy — this funds everything
- Footer rich with newsletter signup, social links, quick nav, copyright

This design creates an inspiring, complete digital home for Solarpunk Corps that attracts students and sponsors alike through clear storytelling and eco-tech optimism.