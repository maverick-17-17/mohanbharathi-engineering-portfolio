# Mohanbharathi P — Engineering Portfolio

A responsive, technically detailed personal engineering workspace for **Mohanbharathi P**, Electronics and Communication Engineering undergraduate specializing in Data Science at **SRM Institute of Science and Technology**.

Built with **React**, **Vite**, **TypeScript**, and an **Apple macOS / iOS × Industrial Electronics Laboratory** design system.

---

## Features

- **Apple macOS / iOS Aesthetic**: Floating dock navigation pill, macOS window controls (traffic light red/yellow/green dots), deep charcoal/black background with subtle technical schematic grid, monospaced metadata, and clean sans-serif typography.
- **Interactive Project Explorer**:
  - Live text search across project names, categories, components, and technologies.
  - Category filters (Electronics, Embedded Systems, Digital Electronics, AI / Computing, Restoration, Mechanical Design).
  - **Hover / Tap Expanding Cards**: Project cards smoothly expand on hover/tap to reveal full architectural flow diagrams, overview, working principles, implementation notes, component status summaries, and challenges.
  - **Full Case-Study Window Modal**: Deep technical documentation with tabs, bill of materials (BOM), CSV export, and editable component statuses persisted in `localStorage`.
- **Interactive Skills Matrix**:
  - Categorized into Engineering, Programming & Computing, and Design & Media.
  - Interactive proficiency level picker and custom skill adder.
  - Live skill search and reset to defaults.
- **Theatrical Photography Art Gallery**:
  - Velvet theater curtains framing the gallery stage with overhead spotlight illumination.
  - Museum brass placards on framed artwork.
  - Upload functionality allowing the owner to add custom photos directly from the browser with persistent local storage.
  - Fullscreen lightbox viewer.
- **Direct Engineering Contact**:
  - Clickable `mailto` email and `tel` telephone links.
  - One-click copy-to-clipboard buttons with live feedback.
  - Functional contact dispatch form.

---

## 8 Documented Engineering Builds

1. **PRJ-01: Mini Solid-State Tesla Coil** — Slayer-excited high-voltage RF resonator with base feedback loop.
2. **PRJ-02: Battery Level Indicator with LED Bar** — Analog threshold comparator ladder monitoring terminal voltage.
3. **PRJ-03: ESP32 Mini Deskbot** — Dual-core FreeRTOS companion with I2C SSD1306 OLED, audio chimes, and micro servos.
4. **PRJ-04: J.A.R.V.I.S Desktop Assistant** — Local intent recognition and speech engine explored on repurposed BlackBerry Z10 hardware.
5. **PRJ-05: Samsung MP3 Conversion** — Upcycling an obsolete Samsung GT-S5222 Duos into a dedicated retro lossless player.
6. **PRJ-06: Four-Bit Password System** — Pure hardware combinational lock using discrete 7408 AND, 7404 NOT, and BC547 switches.
7. **PRJ-07: Vintage Watch Restoration & Redesign** — Horological teardown, ultrasonic cleaning, and casing for Citizen Eagle 7 and Seiko 66A.
8. **PRJ-08: Fastest Finger First** — SRMIST 21ECC211L course project: NE555 monostable timers with 1N4148 diode lockout feedback.

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server
npm run dev

# 3. Create production build
npm run build
```

---

## Step-by-Step GitHub & Vercel Deployment Instructions

### Step 1: Initialize Git and Push to GitHub

1. Open your terminal in this project directory:
   ```bash
   cd "C:\Users\Mohanbharathi P\.gemini\antigravity\scratch\mohanbharathi-engineering-portfolio"
   ```

2. Initialize a git repository (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "feat: complete Mohanbharathi engineering portfolio"
   ```

3. Create a new repository on [GitHub](https://github.com/new):
   - Repository Name: `mohanbharathi-engineering-portfolio`
   - Set to **Public**
   - Do **not** check "Initialize with a README" (you already have one)

4. Link and push your code:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/mohanbharathi-engineering-portfolio.git
   git push -u origin main
   ```

---

### Step 2: Deploy to Vercel (100% Free)

1. Go to [Vercel](https://vercel.com/) and Sign Up / Log In using your **GitHub account**.
2. Click **"Add New..."** → **"Project"**.
3. Under **"Import Git Repository"**, find `mohanbharathi-engineering-portfolio` and click **"Import"**.
4. Configure the Project:
   - **Framework Preset**: `Vite` (Vercel automatically detects this)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**.
6. In ~45 seconds, your website will be live with a free custom SSL domain (e.g., `https://mohanbharathi-engineering-portfolio.vercel.app`)!

Every time you push new changes to GitHub (`git push`), Vercel will automatically re-build and deploy your portfolio instantly.
