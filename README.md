# Alvin Paderes — QA Automation & SDET Portfolio

A responsive React + Vite personal portfolio designed for GitHub Pages.

## Requirements
- Node.js 20+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository named `YOUR-USERNAME.github.io`.
2. Upload this project to the repository and push the default branch as `main`.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. The included workflow builds and deploys the site whenever you push to `main`.
6. Your site will be available at `https://YOUR-USERNAME.github.io/`.

This Vite configuration uses `base: '/'`, appropriate for a `YOUR-USERNAME.github.io` user site.
If you instead deploy to a project repository such as `portfolio`, change `base` in `vite.config.js` to `'/portfolio/'`.

## Resume

Place your latest PDF at:

`public/Alvin-Paderes-CV.pdf`

The download links in the website expect that exact filename.

## Personalize before publishing

- Confirm the GitHub username and add your GitHub profile URL.
- Add verified repository links to the project cards when public examples are ready.
- Review the wording and confirm all details are current.
- The phone number is intentionally not displayed.
- The project cards are experience-based topics, not claims that public repositories already exist.

## Tech stack

- React
- Vite
- Framer Motion
- Lucide React
- Custom responsive CSS
- GitHub Actions / GitHub Pages
