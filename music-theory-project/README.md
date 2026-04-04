
# music-theory-app

This is an interactive web application designed to help users learn and explore music theory concepts visually and intuitively. Whether you're a beginner or an advanced musician, this app provides clear explanations, interactive diagrams, and accurate music notation to make learning music theory engaging and accessible. Built with modern web technologies, it offers a seamless and responsive experience across devices.

## Live Demo

🔗 [https://hannahro15.github.io/music-theory-app/](https://hannahro15.github.io/music-theory-app/)

## Deployment


## Deployment

This project is deployed to GitHub Pages using the `gh-pages` npm script. GitHub Actions workflow files have been removed; deployment is now manual only.

### Deploy command

From the `music-theory-project` directory, run:

```bash
npm run deploy
```

This will build the project and publish the `dist/` folder to the `gh-pages` branch.

### One-time GitHub setup

1. Open your repository on GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to **Deploy from a branch**.
4. Select branch **gh-pages** and folder **/(root)**.

### Deployment troubleshooting

- Confirm the `gh-pages` branch exists and was updated after deploy.
- If the site looks stale, do a hard refresh (`Cmd+Shift+R`) or open in an incognito window.
- If deploy fails locally, run `npm ci` then `npm run build` and fix reported errors.

### Note

There is no longer any automatic deployment via GitHub Actions. All deployments must be triggered manually using `npm run deploy` from your local machine.

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
