# Vincent Daher Professional E-Portfolio

This is a React + Vite e-portfolio for Vincent Daher, a mathematics teacher, trainer, M1 student, and founder of Alphaducation. It is designed as both an M1 stage portfolio and a long-term professional portfolio.

## Install

```bash
npm install
```

On Windows PowerShell, if `npm` is blocked by the local execution policy, use:

```bash
npm.cmd install
```

## Run Locally

```bash
npm run dev
```

PowerShell alternative:

```bash
npm.cmd run dev
```

Vite will print a local URL, usually `http://localhost:5173/`.

## Build

```bash
npm run build
```

PowerShell alternative:

```bash
npm.cmd run build
```

The production files are generated in `dist/`.

## Edit Content

Most placeholder content is stored in:

```text
src/data/portfolioData.js
```

Update this file to replace placeholders for:

- academic background;
- teaching and training experience;
- stage observations;
- didactic analysis;
- artefacts;
- teaching resources;
- research notes;
- contact links.

The main page structure is in:

```text
src/App.jsx
```

Reusable components are in:

```text
src/components/
```

Global styling is in:

```text
src/styles/global.css
```

## GitHub Pages Deployment

The project is prepared for GitHub Pages with:

- the build script in `package.json`, using the repository base path `/Vincent-Daher-E-portfolio/`;
- `.github/workflows/deploy.yml`, which builds and deploys the site automatically.

To deploy:

1. Push the project to the `main` branch on GitHub.
2. In the GitHub repository, go to **Settings > Pages**.
3. Set the source to **GitHub Actions**.
4. Push changes to `main`; the workflow will build and publish the site.

If the repository name changes, update the `--base` value in the `build` script in `package.json`.

## Portfolio Structure

The website includes:

- Home;
- About Me;
- Teaching Philosophy;
- M1 Stage Portfolio;
- Observation Journal;
- Didactic Analysis;
- Evidence and Artefacts;
- Teaching Resources;
- Research Notes;
- Training and Workshops;
- Professional Development Plan;
- Contact.

Each section is designed to connect four elements: evidence, reflection, competency, and professional growth.
