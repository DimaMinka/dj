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
  * Base language: **English (`en`)**.
  * Ready for multilingual extensions (`ru`, `he`) in `src/i18n/ui.ts`.
  * RTL-first layout principles: CSS Logical properties (`margin-inline`, `padding-inline`, `start`/`end`, `dir="rtl"` awareness with Heebo font pairing).
* **Telemetry & Coordinates:** `33°05'N 35°30'E` (Northern District / Upper Galilee).

---

## 📂 Project Structure

```text
dj/
├── src/
│   ├── components/
│   │   └── intro/
│   │       ├── AtmosphereBackground.astro   # Crossfading Day/Night canvas & ambient dust
│   │       ├── IntroHeader.astro            # Vector DM logo, telemetry, theme toggle
│   │       ├── SonicPortal.astro            # 432 Hz pulsating portal & ambient wave
│   │       └── GatewayTrigger.astro         # 800ms tactile hold-to-enter ritual + audio unlock
│   ├── i18n/
│   │   └── ui.ts                            # UI dictionaries (en, ru, he) & helper
│   ├── layouts/
│   │   └── Layout.astro                     # Base HTML, fonts (Syne/Manrope/Mono/Heebo), Zero-FOUC
│   ├── styles/
│   │   └── tokens.css                       # Design tokens, themes & animations
│   └── pages/
│       └── index.astro                      # Intro Gateway page entrypoint
├── astro.config.mjs                         # Cloudflare adapter & site config
├── wrangler.jsonc                           # Cloudflare Workers configuration
└── AGENTS.md                                # Local agent development workflow rules
```

---

## 🧞 Development & Rules

Follow guidelines from [AGENTS.md](./AGENTS.md):

* **Start dev server (background mode):**
  ```sh
  astro dev --background
  ```
* **Manage server:**
  * Status: `astro dev status`
  * Logs: `astro dev logs`
  * Stop: `astro dev stop`
* **Build validation:**
  ```sh
  npm run build
  ```

---

## 🗺️ Next Steps Roadmap
1. [x] **Phase 1: Intro Gateway Screen** (`feature/intro-screen`) — Complete with Day/Night resonance, 432 Hz ritual and mobile adaptations.
2. [ ] **Phase 2: Showcase & Tape Player Screen** — Expanded hero with live mix audio player, waveform scrubbing, tracklist metadata.
3. [ ] **Phase 3: Curatorial Spaces & Locations** — Villa Sunset, Botanical Garden, Desert Dunes, Nordic Peaks.
4. [ ] **Phase 4: Setups & Technical Rider** — Grand Immersive, Standard Botanical, Chamber Sound setups & custom 12+ wireless light rig.
5. [ ] **Phase 5: Booking & Contact Ritual** — Direct booking inquiry for private retreats and boutique events.
