# JMIT Landing Page

A simple, single-page static site focused on mission and vision. No build step required.

## Files

- `index.html` — page markup
- `styles.css` — styling
- Avatar is a small gradient placeholder (initials). Swap with a real image if desired.

## Local preview

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

### Option A — GitHub Pages (free)

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch (or whichever branch holds `index.html`) and `/root` folder.
5. Save. Your site will be live at `https://<user>.github.io/<repo>/`.

### Option B — Vercel (free)

1. Go to [vercel.com](https://vercel.com) and "Add New → Project".
2. Import this repository.
3. Framework preset: **Other** (no build command needed).
4. Deploy. Vercel serves `index.html` automatically.

### Option C — Netlify (free)

1. Drag-and-drop this folder onto [app.netlify.com](https://app.netlify.com).
2. Done.

## Customizing

Edit the copy in `index.html`:

- `<h1>JMIT</h1>` — your name / brand
- `.tagline` — short one-liner
- `#mission .lead` — your mission statement
- `#vision .lead` — your vision statement
- `.avatar-placeholder` — replace the `JM` initials, or swap the whole div for an `<img>` tag with a small headshot.
