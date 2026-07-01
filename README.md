# Devanshu's Portfolio 🚀

Welcome to the repository for my personal portfolio website! This is a clean, modern, and responsive single-page application (SPA) designed with a professional, blog-style aesthetic to showcase my skills, projects, education, and blog posts.

---

## 🌐 Live Preview

Click the preview banner below to visit the live website at [devbytes.in](https://devbytes.in)!

<br />

<div align="center">
  <a href="https://devbytes.in" target="_blank">
    <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80" alt="Devanshu Portfolio Preview" width="100%" style="border-radius: 8px; border: 1px solid #e2e8f0;" />
  </a>
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

Here is a quick look at how the project code is organized:

```text
├── public/
├── src/
│   ├── api/            # API integration modules
│   ├── components/     # Reusable UI layout blocks
│   │   ├── About.jsx
│   │   ├── BlogSection.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MusicPlayer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Socials.jsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # External library configurations
│   ├── pages/          # Main application page structures
│   ├── utils/          # Helper functions and utilities
│   ├── App.jsx         # Core layout and routing setup
│   ├── main.jsx        # App entry point
│   ├── PageNotFound.jsx
│   └── index.css       # Global styles & Tailwind directives
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vercel.json         # Vercel deployment configurations
└── package.json
