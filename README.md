# Follow.Art - Interactive 3D Landing Page

A high-end, editorial-style landing page built with React, React Three Fiber, Tailwind CSS, and GSAP. This project features immersive 3D elements, smooth scrolling, and custom post-processing visual effects for a seamless and premium user experience.

## ✨ Features

- **Immersive 3D Experience**: Powered by `three` and `@react-three/fiber`, featuring custom 3D scenes integrated into the hero section.
- **Cinematic Post-Processing**: Uses `@react-three/postprocessing` for advanced visual effects like Bloom, Brightness, and Contrast.
- **High-Performance Animations**: Complex UI animations built with `gsap`.
- **Smooth Scrolling**: Implements `lenis` for an elegant and fluid scroll experience across the entire page.
- **Modern Styling**: Styled efficiently using `tailwindcss`.
- **Fast Development**: Bundled with `vite` for instant server start and lightning-fast HMR.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **3D Elements**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) & [Drei](https://github.com/pmndrs/drei)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation Tooling**: [GSAP](https://gsap.com/)
- **Scrolling**: [Lenis](https://lenis.studiofreight.com/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kolikrish/Follow.Art
   ```

2. Navigate to the project directory:
   ```bash
   cd React-three-fiber/react-tailwind-template
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running Development Server

Start the Vite development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173/` (or the port specified in your terminal) to view the application.

## 📂 Project Structure

```text
src/
├── components/
│   ├── Footer.jsx
│   ├── Fourth.jsx
│   ├── Navbar.jsx
│   ├── Scence.jsx
│   ├── Second.jsx
│   ├── TextReveal.jsx
│   └── Third.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start development server |
| `npm run build` | Build the application for production |
| `npm run preview` | Locally preview the production build |
| `npm run lint` | Run ESLint |
