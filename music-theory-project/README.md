
# music-theory-app

This is an interactive web application designed to help users learn and explore music theory concepts visually and intuitively. Whether you're a beginner or an advanced musician, this app provides clear explanations, interactive diagrams, and accurate music notation to make learning music theory engaging and accessible. Built with modern web technologies, it offers a seamless and responsive experience across devices.

## Live Demo

🔗 [https://hannahro15.github.io/music-theory-app/](https://hannahro15.github.io/music-theory-app/)

## Automatic Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

- Every push to the `main` branch triggers a production build and deploy.
- You can also run the workflow manually from the **Actions** tab.
- Legacy manual deployment via `gh-pages` npm scripts has been removed.

### One-time GitHub setup

1. Open your repository on GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.

Workflow file: `../.github/workflows/deploy.yml`

### Deployment troubleshooting

- Confirm the push was to the `main` branch.
- Check **Actions** for the latest workflow run and open the failed step logs.
- Verify **Settings → Pages** is set to **GitHub Actions** (not branch deploy).
- Ensure Actions are enabled for the repository in **Settings → Actions**.
- If build fails locally, run `npm ci` then `npm run build` and fix reported errors.

## Features

- Interactive visualizations of scales, intervals, and arpeggios
- Modern, responsive UI with React and Bootstrap
- Navigation for scales, intervals, arpeggios, and a musical glossary
- Educational explanations for each music theory concept
- Built with VexFlow for accurate music notation rendering

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm

### Installation
1. Clone the repository:
	```bash
	git clone https://github.com/hannahro15/music-theory-app.git
	cd music-theory-app/music-theory-project
	```
2. Install dependencies:
	```bash
	npm install
	```
3. Start the development server:
	```bash
	npm run dev
	```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.


## Technologies Used

- **React** — UI library for building interactive user interfaces
- **VexFlow** — Music notation rendering engine
- **Bootstrap & React-Bootstrap** — For responsive and modern UI components
- **Vite** — Fast development and build tool

## Project Structure

- `src/pages/` — Main pages for scales, intervals, arpeggios, glossary, and home
- `src/components/` — Reusable components for music notation and layout
- `public/` — Static assets
- `index.html` — Main HTML entry point
