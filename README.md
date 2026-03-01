Overall vibe

* Minimal, dark-first UI
* Bold typography, lots of whitespace
* Motion > decoration (subtle scroll animations, counters, progress bars)
* Feels like a **tech résumé + personal brand dashboard**
* Think: Spotify Wrapped × GitHub × Portfolio

---

## 1️⃣ HOME — Hero (Your “Wrapped” Cover)

### Content (data-style)

* Name (big, bold)
* Primary identity line

  > Networking student. Developer in progress. Tech-obsessed by choice.
* Current focus

  * Web development (Next.js)
  * Backend curiosity (Supabase, APIs)
  * Security & systems mindset (ethical hacker energy)
* Status badge

  * “Learning. Building. Shipping.”

### Visual UI ideas

* Full-screen hero
* Large headline with animated text reveal
* Under it: **stat cards**, Spotify Wrapped–style:

  * 🧠 *Fields explored:* Networking, Web, Security
  * 🛠️ *Tech touched:* X+ tools
  * 🚀 *Projects shipped:* 1 (and counting)
* Scroll indicator like “↓ View your data”

This page says: *I’m early, but I’m serious.*

---

## 2️⃣ BIO — Personal Details (The Human Data)

**Purpose:**
Context. You’re not just code — you’re a system with inputs.

### Content structure

Instead of paragraphs → **data blocks**

**Profile snapshot**

* Name
* Location
* Education level
* Current path

**Bio description**
Not poetic. Honest. Clean.

> “I’m a networking student who got bored of theory and started building.
> I like understanding how systems talk, break, and recover.
> I’m not chasing trends — I’m learning fundamentals and shipping projects.”

### UI ideas

* Left: avatar or abstract illustration (optional)
* Right: stacked info cards
* Timeline-style micro facts:

  * First interest in tech
  * Shift into development
  * Current obsession

Feels like a **profile analytics page**, not a diary.

---

## 3️⃣ EXPERIENCE — Education & Skills (Your Skill Graph)

**Purpose:**
Show progression, not perfection.

### Section A: Education

Displayed as a **timeline**

* Bachelor’s in Networking
* Key focus areas:

  * Networks
  * Systems
  * Security fundamentals

No essays. Just clean milestones.

---

### Section B: Skills (Wrapped-style stats)

This is where it shines.

**Skill categories as bars or rings**

* Networking 🟢🟢🟢🟢⚪
* Web development 🟢🟢🟢⚪⚪
* Backend basics 🟢🟢⚪⚪⚪
* Security mindset 🟢🟢🟢⚪⚪
* UI & visual sense 🟢🟢🟢⚪⚪

**Tools grid**
Badges, not buzzwords:

* Next.js
* Tailwind CSS
* Git & GitHub
* Supabase
* Linux basics
* APIs

Optional footer stat:

> *“Skills ranked by time spent, not confidence.”*

That line hits.

---

## 4️⃣ PROJECTS — Proof of Work

**Purpose:**
Show you build. Period.

### Project Card: *Piston Tours Website*

This project gets VIP treatment.

**Card layout**

* Project name
* Status badge: ✅ Done
* Short, sharp description:

  > “A modern tourism website focused on clarity, performance, and trust.”

**Project details (expandable)**

* Tech used
* Problem solved
* What you learned
* What you’d improve next

**Future projects**
Instead of empty cards:

* “Coming soon”
* “In progress”
* “Idea stage”

That shows momentum, not emptiness.

UI vibe: **Netflix-style project cards** or **Notion-like blocks**.

---

## 5️⃣ CONTACT — Digital Presence

**Purpose:**
Make it stupidly easy to reach you.

### Content

* Phone
* Location (city/country level only)
* Email
* Social links (GitHub, LinkedIn, X, etc.)

### UI ideas

* Clean icons
* No form spam — just links
* Copy-to-clipboard interactions
* Final line:

  > *“Open to learning, collaborating, and building real things.”*

---

## 🎯 Global Design Language

**Colors**

* Dark background (near black, not pure)
* One accent color (green, purple, or electric blue)
* Neutral grays for text

**Typography**

* Bold sans-serif for headers
* Clean readable font for body (rosemary)
* Big numbers everywhere (stats > sentences)

**Motion**

* Scroll-based reveals
* Counters animate once
* No overkill — smooth, confident

========================================================================================

Below is the **data model design** — **Spotify Wrapped–style**, honest, scalable, and UI-friendly.
No code logic, just **what the data should look like and why** so Gemini doesn’t freestyle nonsense.

#  — Content Architecture

Everything here is **static, human-readable, and future-proof**.

---

## 1️⃣ `profile.ts` — Identity Core

**Purpose:** Who you are in one object.

### Data blocks

* `name`
* `tagline` (short, bold identity line)
* `bio` (2–3 sentences, honest)
* `location`
* `currentFocus` (array)
* `status` (learning / building / shipping)
* `avatar` (optional path)
* `wrappedStats` (high-level numbers)

### Example content (conceptual)

* Name: your real name
* Tagline:

  > “Networking student. Developer in progress.”
* Bio:

  > “I’m a networking student who enjoys breaking systems down and rebuilding them through code. I learn by building, experimenting, and shipping real projects.”
* Wrapped stats:

  * Fields explored
  * Tools touched
  * Projects shipped
  * Years in tech (or “early stage”)

**UI use**

* Home hero
* Bio page header
* SEO metadata

---

## 2️⃣ `skills.ts` — Skill Graph

**Purpose:** Show *range* and *direction*, not fake mastery.

### Structure

Skills grouped by category.

**Each skill**

* `name`
* `level` (1–5)
* `note` (optional context)

### Categories

* Networking
* Web Development
* Backend Basics
* Security Mindset
* Tools & Workflow

### Example logic

* Networking → higher level
* Web dev → growing
* Backend → early but intentional

**UI use**

* Progress bars
* Radial charts
* Ranked lists (“most time spent”)

---

## 3️⃣ `education.ts` — Timeline

**Purpose:** Credibility without overexplaining.

### Each entry

* `title`
* `institution`
* `period`
* `focusAreas` (array)
* `status` (completed / ongoing)

### Example focus areas

* Computer networking
* System fundamentals
* Security concepts

**UI use**

* Vertical timeline
* Milestone cards

---

## 4️⃣ `projects.ts` — Proof of Work

**Purpose:** Show execution.

### Each project

* `slug`
* `name`
* `status` (done / in progress / planned)
* `description` (1–2 lines)
* `techStack` (array)
* `highlights` (what you actually did)
* `lessons` (what you learned)
* `link` (live / GitHub if public)

### First project (important)

**Piston Tours Website**

* Status: Done
* Treated as featured
* Has the most detail

**UI use**

* Cards
* Expandable sections
* Featured project on Home

---

## 5️⃣ `socials.ts` — Digital Presence

**Purpose:** Reachability.

### Each entry

* `platform`
* `username`
* `url`
* `icon`

Platforms:

* GitHub (mandatory)
* LinkedIn
* Twitter/X (optional)
* Email
* Phone


==============================================================================



This is where the site gets its *personality*.

---

# 2️⃣ NAVBAR & FOOTER — UX DESIGN

## Navbar (Minimal, confident, always visible)

### Structure

* **Left:** Your name or short brand
* **Center / Right:** Navigation links

  * Home
  * Bio
  * Experience
  * Projects
  * Contact

### Behavior

* Sticky on scroll
* Slight blur / translucent background
* Active link highlighted
* Collapses into a clean mobile menu (no hamburger circus)

### Visual style

* Dark background
* Thin bottom border or soft shadow
* Accent color only for active link or hover

### Micro-copy / branding

Instead of a logo:

> *YourName*
> *Digital Profile*

This feels personal, not corporate.

---

## Footer (Quiet but intentional)

### Sections

* **Left:** Short line

  > “Built with Next.js. Focused on learning and shipping.”
* **Center:** Social icons
* **Right:** Year + your name

### UX rules

* No clutter
* Icons only, no labels
* Subtle hover glow

Footer should say: *I care, but I’m not trying too hard.*

---

# 3️⃣ HOME — “WRAPPED” HERO EXPERIENCE

This is the most important page.
It should feel like **opening Spotify Wrapped**.

---

## Section A: Hero Intro (Above the Fold)

### Content

* Big headline:

  > *Your Year(s) in Tech*
* Sub-line:

  > Networking student. Developer in progress.
* Status badge:

  * “Learning”
  * “Building”
  * “Shipping”

### UI

* Full viewport height
* Centered text
* Slow text reveal animation
* Scroll hint at bottom: “Scroll to view stats ↓”

---

## Section B: Wrapped Stats Grid

### Purpose

Instant credibility through data.

### Stat cards (examples)

* **Fields Explored**

  * Networking
  * Web Development
  * Security
* **Tools Used**

  * X+ technologies
* **Projects Shipped**

  * 1 (and counting)
* **Primary Focus**

  * Web + Systems

Each card:

* Big number or keyword
* Small explanation
* Icon or subtle graphic

---

## Section C: Skill Snapshot

### Content

Top 3 areas only:

* Networking
* Web Development
* Security Mindset

### UI

* Horizontal bars or circular progress
* Label: “Based on time spent, not confidence”

This line matters. It disarms critics.

---

## Section D: Featured Project

### Highlight

**Piston Tours Website**

### Content

* Project name
* Short description
* Tech stack
* Button: “View Project”

### UI

* Large card
* Slight elevation
* Accent border

This anchors everything you claim above.

---
