# React Router – Trin-for-trin demo

## Kom i gang
```bash
npm install
npm run dev
```

## Teknologi
- React 18
- React Router v6
- Vite

## Scripts
- `npm run dev` – start udviklingsserver
- `npm run build` – build til `dist/`
- `npm run preview` – lokal forhåndsvisning
- `npm run deploy` – (GitHub Pages) bygger og publicerer `dist/` med `gh-pages`

> Hvis du bruger Vercel, ligger der en `vercel.json` som sikrer SPA-fallback.
> Hvis du bruger Netlify, ligger der en `public/_redirects` der gør det samme.

## Struktur
- `src/main.jsx` – wrapper med `<BrowserRouter>`
- `src/App.jsx` – `<Routes>` + `<Route>`
- `src/pages/*` – Home, About, Contact, NotFound
- `src/index.css` – minimal styling

## Ekstra
- Skift `homepage` i `package.json` før GitHub Pages deploy.
- For aktive links bruges `<NavLink>`.
- Programmatisk navigation: `useNavigate()` (bruges i `Contact.jsx`).

Held og lykke med opgaven!
