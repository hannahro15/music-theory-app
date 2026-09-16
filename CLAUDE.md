# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start Vite dev server at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint over the project
npm run deploy    # build and publish dist/ to the gh-pages branch (GitHub Pages)
```

There is no test suite configured in this project.

## Deployment

Deployment is manual only — there is no GitHub Actions workflow. `npm run deploy` runs `predeploy` (build) then publishes `dist/` to the `gh-pages` branch via the `gh-pages` npm package. GitHub Pages must be configured to serve from the `gh-pages` branch, root folder.

## Architecture

This is a client-side-only React SPA (Vite + `react-router-dom`) for learning music theory, with no backend. Because it's served from GitHub Pages under a subpath (`base: '/music-theory-app/'` in `vite.config.js`), routing uses `HashRouter` (see `src/main.jsx`) rather than `BrowserRouter`.

Route structure lives in `src/App.jsx`, which maps top-level URL paths to page components. Routes are grouped conceptually into three areas, mirrored in the `Navbar` (`src/components/layout/Navbar.jsx`) and in the directory layout:

- **`theory/`** — informational pages (Scales, Arpeggios/7th chords, Intervals, Musical Glossary). Each topic page (e.g. `src/theory/scales/Scales.jsx`) is a static content page that composes many small, per-concept notation components from `src/components/<topic>/` (e.g. `src/components/scales/MajorScale.jsx`, `src/components/intervals/Maj3rd.jsx`, `src/components/arpeggios/Dom7th.jsx`).
- **`activities/`** — interactive exercises/quizzes (e.g. `src/activities/quiz/Quiz.jsx` for the classical music quiz).
- **`instrument/`** — instrument-specific content (currently violin fingerings/technique/excerpts).

Many routes in `App.jsx` are still placeholder `<h1>` elements (e.g. Circle of Fifths, Key Signatures, Ear Training, Rhythm Game) — check there before assuming a feature exists.

### Notation rendering pattern

Every per-concept notation component (scales, intervals, arpeggios) renders a `<Notation notes="..." time="..." />` (`src/components/notation/Notation.jsx`), which wraps the `useVexFlowStave` hook (`src/hooks/useVexFlowStave.js`). The hook generates a unique container id per instance via `useId()`, builds the VexFlow `Factory`/`EasyScore`/`System`, and draws — so components never need to manage ids or VexFlow setup themselves.

`useVexFlowStave` also accepts `clef`, `stem`, `width` (a number, or a `(container) => number` function for responsive sizing — see `responsiveIntervalWidth`, used by every interval component), `height`, and `systemWidthOffset` (used by `MelodicMinorScale` for its wider/taller stave). When adding a new scale/interval/arpeggio, copy an existing sibling component (e.g. `MajorScale.jsx`) and just change the `notes`/`time`.

### Styling

Uses Bootstrap + `react-bootstrap` for layout/nav chrome (imported globally in `Navbar.jsx`), plus a `.css` file per feature area (e.g. `Scales.css`, `Intervals.css`, `Quiz.css`) colocated with its component.
