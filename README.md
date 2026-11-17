# Roshan Cleaning Services website

After-hours office cleaning and home cleaning in Burnaby and Greater Vancouver.

Built with Next.js (static export) and Tailwind CSS.

## Edit business details

Name, phone, email, service areas and the quote-form address live in
`src/lib/site.ts`. Change them there and they update across the site.

## Pages

- `/`: home page (`src/app/page.tsx`)
- `/office-cleaning/`: after-hours office cleaning (`src/app/office-cleaning/page.tsx`)
- `/home-cleaning/`: home cleaning (`src/app/home-cleaning/page.tsx`)

The "Clean my office / Clean my home" bar and popup are in
`src/components/site/quick-quote.tsx`.

## Run locally

```bash
npm ci
npm run dev
```

## Publish

```bash
./scripts/deploy-preview.sh
```

This builds the site and pushes it to the `gh-pages` branch, which GitHub
Pages serves at https://ahmadkhalil7.github.io/bright-space-services/.
When the site moves to its own domain, run it with `BASE_PATH=""`.
