# Devanshu's Portfolio 🚀

Welcome to the repository for my personal portfolio website! This is a clean, modern, and responsive single-page application (SPA) designed with an E-learning/professional aesthetic to showcase my skills, projects, education, and blog posts.

---

## 🌐 Live Preview

You can interact with the live website directly below, or open it in a new tab at [devbytes.in](https://devbytes.in).

<br />

<div align="center">
  <iframe src="https://devbytes.in" width="100%" height="500px" style="border: 2px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
    <p>Your browser does not support iframes. Please visit <a href="https://devbytes.in">devbytes.in</a> manually.</p>
  </iframe>
</div>

<br />

---

## 🛠️ Tech Stack & Features

* **Frontend Framework:** React (built with **Vite** for lightning-fast bundling)
* **Styling:** **Tailwind CSS** + PostCSS for utility-first styling
* **State Management & Data Fetching:** **TanStack Query** (`react-query`)
* **Content Rendering:** `react-markdown` (perfect for displaying dynamic blog text)
* **Deployment:** Configured for seamless hosting on **Vercel**

### Key Features
* 📱 Fully responsive design across mobile, tablet, and desktop viewports.
* ✍️ **Blog Section** powered by Markdown.
* 🎵 Integrated **Music Player** component for a unique personal touch.
* 📚 Sectioned views for Education, Certificates, Projects, and Skills.

---

## 📂 Project Structure

Here is a quick look at how the code is organized:

```text
├── public/
├── src/
│   ├── api/            # API integration modules
│   ├── components/     # Reusable UI components (Navbar, Footer, Hero, etc.)
│   │   ├── About.jsx
│   │   ├── BlogSection.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── MusicPlayer.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Library setups (e.g., shadcn/ui or utility functions)
│   ├── pages/          # Main application page wrappers
│   ├── utils/          # Helper functions and constants
│   ├── App.jsx         # Core layout and routing
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles & Tailwind directives
├── index.html
├── tailwind.config.js
├── vercel.json         # Vercel deployment configurations
└── package.json
