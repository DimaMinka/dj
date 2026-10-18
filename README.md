# DJ Dima Minka — Experience

> **Site-Specific Sound & Light Architecture**  
> Melodic House, Organic Techno & Ambient Curations for private villas, vineyards, and mountain retreats.

---

## 🏛️ Project Architecture & Context

### 1. Key Principles & Tech Stack
* **Framework:** [Astro 5](https://astro.build) with static output deployed to **Cloudflare Workers** (`@astrojs/cloudflare`).
* **Design Engine (Stitch):** Linked to Stitch project **`DJ Dima Minka Experience`** (ID: `10735324975362920056`).
* **Design System:** *Nocturne Solstice* (`src/styles/tokens.css`):
  * **🌙 Night Resonance (Default / Dark):** Obsidian base (`#0B0B0D`), purple & amber glow, twilight atmosphere.
  * **☀️ Day Resonance (Light):** Warm ivory (`#FCF8FB`), Mediterranean sun, caramel amber and soft white frosted glass.
* **System Theme Detection (Zero-FOUC):** Inline `<script is:inline>` in `Layout.astro` dynamically resolves `matchMedia('(prefers-color-scheme: dark)')` with localStorage fallback and reactive OS-level changes.
* **AI Agents & LLM Discoverability:** Integrated `@puralex/astro-markdown-for-agents` to automatically generate `llms.txt`, parallel `.md` versions for all pages, and handle runtime `Accept: text/markdown` negotiations for AI crawlers/search engines.
* **Internationalization & RTL:**
  * Multi-language routing on About: English (`/about`), Russian (`/ru/about`), Hebrew (`/he/about`).
  * RTL-first layout principles: CSS Logical properties (`margin-inline`, `padding-inline`, `start`/`end`, `dir="rtl"` awareness with Heebo font pairing).
* **Backend Actions & Email:** Astro Actions (`astro:actions`) with Zod schema validation, honeypot anti-spam defense, submission velocity guard (< 1.2s), and Resend API transactional email integration.
* **Telemetry & Coordinates:** `33°05'N 35°30'E` (Northern District / Upper Galilee).

---

## 📂 Project Structure

```text
dj/
├── src/
│   ├── actions/
│   │   └── index.ts                         # Astro Action 'inquire' with Resend API & bot traps
│   ├── components/
│   │   ├── about/
│   │   │   ├── AboutPageView.astro          # Master DRY About view (EN, RU, HE)
│   │   │   ├── AudioPreview.astro           # 432 Hz frequency player card & Web Audio synth
│   │   │   ├── VideoReel.astro              # Setup gallery with Ken-Burns photo cycles
│   │   │   ├── BookingBriefForm.astro       # Event brief form with honeypot & action integration
│   │   │   ├── AboutFooter.astro            # Dedicated About footer with anchor nav, streaming & mobile grid
│   │   │   └── StickyActionBar.astro        # Responsive bottom dock (432 Hz + WhatsApp)
│   │   ├── intro/
│   │   │   ├── AtmosphereBackground.astro   # Crossfading Day/Night canvas & ambient dust
│   │   │   ├── IntroHeader.astro            # Vector DM logo, inline language switcher, theme toggle
│   │   │   ├── SonicPortal.astro            # 432 Hz pulsating portal & ambient wave
│   │   │   └── GatewayTrigger.astro         # 800ms tactile hold-to-enter ritual + transition to /vibe
│   │   └── vibe/
│   │       ├── VibeAtmosphere.astro         # Dynamic chromatic glow & watercolor crossfade
│   │       ├── VibeHeader.astro             # Return navigation, monogram & 01/05 counter
│   │       ├── SpacesCarousel.astro         # 60fps swipe-able carousel (pointer & touch gestures)
│   │       ├── SpaceCard.astro              # Art-book card layout with poetry and specs
│   │       ├── VibeSoundDock.astro          # Floating micro-player with 432 Hz Solfeggio synth
│   │       └── VibeSetupDrawer.astro        # Bottom-sheet modal rider for light & acoustics
│   ├── data/
│   │   └── spaces.ts                        # Data model & riders for 8 Sound Worlds
│   ├── i18n/
│   │   └── ui.ts                            # UI dictionaries (en, ru, he), contacts & WhatsApp links
│   ├── layouts/
│   │   └── Layout.astro                     # Base HTML, fonts (Syne/Manrope/Mono/Heebo), Zero-FOUC
│   ├── styles/
│   │   └── tokens.css                       # Design tokens, themes & page transitions
│   └── pages/
│       ├── index.astro                      # Intro Gateway page entrypoint
│       ├── about.astro                      # About page (English)
│       ├── ru/about.astro                   # About page (Russian)
│       ├── he/about.astro                   # About page (Hebrew, RTL)
│       ├── vibe.astro                       # Legacy alias (redirects to /vibes/sunset)
│       └── vibes/
│           ├── index.astro                  # Redirect to /vibes/sunset
│           └── [slug].astro                 # Deep-linked Vibe Space (/vibes/sunset, etc.)
├── astro.config.mjs                         # Cloudflare adapter, i18n config & site config
├── wrangler.jsonc                           # Cloudflare Workers configuration
└── AGENTS.md                                # Local agent development workflow rules
```

---

## 🧞 Development & Rules

Follow guidelines from [AGENTS.md](./AGENTS.md):

* **Start dev server (background mode):**
  ```sh
  npx astro dev --background
  ```
* **Manage server:**
  * Status: `npx astro dev status`
  * Logs: `npx astro dev logs`
  * Stop: `npx astro dev stop`
* **Build validation:**
  ```sh
  npm run build
  ```

---

## 🗺️ Roadmap & Implementation Status

1. [x] **Phase 1: Intro Gateway Screen** (`feature/intro-screen` -> `main`) — Complete with Day/Night resonance, 432 Hz ritual, and mobile adaptations.
2. [x] **Phase 2: Sound Worlds / Vibe Space** (`feature/vibe-space`) — Complete 8-space interactive exhibition (Aegean, Twilight, Sunset, Beach, Garden, Estate, Desert, Nordic) with deep links and Solfeggio synth dock.
3. [x] **Phase 3: About Page & Booking Engine** (`feature/about-page`) — Complete artist manifesto and conversion experience:
   * **Semantic Manifesto & Sound Philosophy:** Melodic & Organic House curation adapted for Upper Galilee & Golan Heights stone courtyards, terraces, and vineyards.
   * **Clean Spatial Aesthetics & Hidden Rigging:** 12+ architectural warm fixtures, concealed perimeter cable management outside guest paths, 220V power & silent inverter generator sync + collapsible hardware rider.
   * **Acoustic & Media Proof:** Live sunset preview card with equalizer + Ken-Burns signature rig photo reel with touch swipe and top-right pagination.
   * **Curated Event Scopes & Packages:** Sunset & Wine (up to 50), Private Villa & Retreat (up to 100, Guest Favorite), Wild Nature Open-Air (mountain slopes & off-grid).
   * **Visible FAQ Block + Schema.org `@graph`:** Microdata for `EntertainmentBusiness`, `Service`, and `FAQPage`.
   * **Direct Channels & Express Brief Engine:** WhatsApp deep-link with localized pre-fills, Telegram (`@dimaminka`), Instagram (`@dimaminka`) + Astro Action `inquire` brief form sending leads to `dj@dimaminka.com` via Resend API with multi-layer bot traps (honeypot + submission timing).
   * **Responsive Floating Action Bar:** Sticky bottom dock with live audio preview toggle and one-click WhatsApp inquiry.

4. [x] **Phase 4: About Dedicated Footer Menu** (`feat/about-footer-menu`) — Complete brand exploration & footer experience:
   * **Brand & Acoustic Identity:** Artist monogram, Galilee & Golan Heights geodata, and dual badges (*ОРГАНИЧНЫЙ САУНД • ТЁПЛЫЙ СВЕТ* / *ORGANIC SOUND • WARM LIGHT*).
   * **Deep Anchor Navigation:** Fast touch chips to `#overview`, `#philosophy`, `#media-proof`, `#specifications`, `#packages`, `#faq`, and highlighted `#booking-brief`.
   * **Connect & Listen Suite:** Direct WhatsApp, Telegram (`@dimaminka`), YouTube (`@dimaminka`), SoundCloud (`dimaminka`), Instagram (`@dimaminka`), and direct booking email in a balanced 3×2 mobile touch grid.
   * **Day & Night Resonance Adaptive Theming:** Fully synced with light/dark modes using CSS tokens and ambient glow.
   * **Smooth Back-to-Top:** Interactive floating scroll-up trigger with safe clearance above the fixed `StickyActionBar`.

5. [x] **Phase 5: Interactive Specs Tabs & Conversational Booking Engine** (`main`) — Complete interactive specs & social proof upgrade for Vibe Spaces:
   * **Interactive Specs Tabs & Crossfade Visualizer:** Converted specs blocks in `SpaceCard.astro` and `VibeSetupDrawer.astro` into interactive tabs (`lights`, `sound`, `location`) with shimmer loader animation and instant setup photo crossfade.
   * **Curated Northern Social Proof Ticker:** Seamless infinite marquee (`LocalSocialProof.astro`) showcasing premier terroirs and venues (Dalton Winery, Harei Galilee, Rosh Pina Private Villas, Golan Heights Terroir, Kinneret Lakeside Terraces, Pelter Winery Estate). Fully pinned to the bottom on desktop and cleanly scoped to the bottom sheet on mobile.
   * **Contextual WhatsApp Direct Booking CTA:** Deep-linked direct inquiry button with pre-filled space interest message (`getWhatsAppContextualLink()`) and pastel glassmorphic styling aligned with the aesthetic design tokens.

---

## 📊 Resource & Quota Consumption (Today's Development Cycle)

Antigravity and CLI quota consumption telemetry measured across the development sprints (including Sound Worlds interactive tabs, WhatsApp contextual booking, social proof ticker, and aesthetic glassmorphism refinements):

### Antigravity Environment (Active Session `/usage`)
| Model Category | Metric | Consumed | Remaining | Reset Window |
| :--- | :--- | :--- | :--- | :--- |
| **Gemini Models** *(Flash, Pro)* | 5-Hour Limit | **24.59%** | **75.41%** | Refreshes in 2h 57m |
| **Gemini Models** *(Flash, Pro)* | Weekly Limit | **13.60%** | **86.40%** | Refreshes in 145h 22m (~6d) |
| **Gemini 4 Argon** | Weekly Limit | **8.84%** | **91.16%** | Refreshes in 145h 52m (~6d) |
| **Claude & GPT Models** *(Opus, Sonnet, OSS)* | 5-Hour Limit | **0.00%** | **100.00%** | Quota available |
| **Claude & GPT Models** *(Opus, Sonnet, OSS)* | Weekly Limit | **0.00%** | **100.00%** | Quota available |

*Efficiency Summary: The multi-phase sprint—spanning complete interactive tabs with shimmer crossfading, localized social proof ticker marquee, scoped CSS isolation for responsive viewports, and pastel aesthetic tuning—consumed minimal quota, retaining **75.4%** on the 5-hour window, **86.4%** on the weekly Gemini limit, and **100%** pristine Claude/GPT quota.*
