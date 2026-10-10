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
│   │   ├── intro/
│   │   │   ├── AtmosphereBackground.astro   # Crossfading Day/Night canvas & ambient dust
│   │   │   ├── IntroHeader.astro            # Vector DM logo, telemetry, theme toggle
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
│   │   └── spaces.ts                        # Data model & riders for 5 Sound Worlds
│   ├── i18n/
│   │   └── ui.ts                            # UI dictionaries (en, ru, he) & helper
│   ├── layouts/
│   │   └── Layout.astro                     # Base HTML, fonts (Syne/Manrope/Mono/Heebo), Zero-FOUC
│   ├── styles/
│   │   └── tokens.css                       # Design tokens, themes & page transitions
│   └── pages/
│       ├── index.astro                      # Intro Gateway page entrypoint
│       ├── vibe.astro                       # Legacy alias (redirects to /vibes/sunset)
│       └── vibes/
│           ├── index.astro                  # Redirect to /vibes/sunset
│           └── [slug].astro                 # Deep-linked Vibe Space (/vibes/sunset, /vibes/garden, etc.)
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
1. [x] **Phase 1: Intro Gateway Screen** (`feature/intro-screen` -> `main`) — Complete with Day/Night resonance, 432 Hz ritual, and mobile adaptations.
2. [x] **Phase 2: Sound Worlds / Vibe Space** (`feature/vibe-space`) — Complete 5-space interactive exhibition (Sunset Villa, Garden Sanctuary, Twilight Vineyard, Desert Nomad, Nordic Peaks):
   * **Deep-Linked Routing (`/vibes/[slug]`):** Static routes with dynamic browser URL synchronization via `history.replaceState`.
   * **Cinematic In-Place Transitions:** Staggered sequence (instant interface & pagination dissolve -> fast background fade to deep darkness -> pure landscape reveal -> real-time frosted glass blur -> staged content & gold ornament arrival).
   * **Dynamic Luminous Dust:** Floating ambient particles color-tinted to match each space's unique aura (amber, emerald, amethyst, flame, glacial).
   * **Interactive Sound Dock & Riders:** Live ambient Solfeggio synthesizer dock and slide-up technical lighting/audio setup drawer.
3. [ ] **Phase 3: Curatorial Tape & Mix Showcase** — Full mix streaming audio player, waveform scrubbing, tracklist cues, and tape aesthetics.
4. [ ] **Phase 4: Lighting & Equipment Atelier** — Interactive 3D/photographic gallery of 12+ wireless light fixtures (2200K blinders, moving heads, fire pods).
5. [ ] **Phase 5: Booking & Inquiry Portal** — Direct booking experience for private retreats, boutique festivals, and villa residencies.
