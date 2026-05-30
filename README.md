# Video Vault

A password-protected video library built with Next.js 14 (App Router), Tailwind CSS, and `iron-session`.

## Features

- Password gate with server-side checking
- Encrypted HTTP-only cookie session (8-hour expiry)
- `controlsList="nodownload"` to hide the browser's download button
- Right-click disabled on the video element
- Diagonal "Confidential – Do not share" watermark overlay
- Clean, minimal, mobile-friendly UI
- Easy to extend: add more videos in one file

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# The password visitors must enter
VIDEO_PASSWORD=your-secret-password

# A random string of at least 32 characters — used to sign/encrypt the session cookie
SESSION_SECRET=some-long-random-string-at-least-32-chars
```

> **Tip:** Generate a secure `SESSION_SECRET` with:
> ```bash
> node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
> ```

### 3. Add your video files

Drop `.mp4` files into `public/videos/`. For example:

```
public/
  videos/
    intro.mp4
    demo.mp4
```

### 4. Register videos in the library

Open `lib/videos.ts` and add entries to the `videos` array:

```ts
export const videos: Video[] = [
  {
    id: "intro",           // used in the URL: /videos/intro
    title: "Introduction",
    description: "A brief introduction to our product.",
    src: "/videos/intro.mp4",
    thumbnail: null,       // or "/thumbnails/intro.jpg"
  },
  // Add more videos here
];
```

### 5. Run locally

```bash
npm run dev
```

Visit http://localhost:3000 — you will be redirected to the login page.

---

## Production Deployment

### Vercel (recommended)

1. Push to GitHub.
2. Import the repo in vercel.com.
3. Add environment variables (`VIDEO_PASSWORD`, `SESSION_SECRET`) in the Vercel dashboard.
4. Deploy.

> **Note:** For large video files, host them on a CDN or object storage (e.g. Cloudflare R2, S3) and point `src` to the CDN URL instead of `/videos/...`.

---

## Project Structure

```
app/
  login/          # Password page (public)
  videos/
    page.tsx      # Video library (protected)
    [id]/
      page.tsx    # Individual video player (protected)
  api/
    login/        # POST — validates password, sets session cookie
    logout/       # POST — destroys session cookie
components/
  VideoPlayer.tsx # <video> element with watermark overlay
  VideoCard.tsx   # Card shown in the library grid
  LogoutButton.tsx
lib/
  videos.ts       # Add/edit videos here
  session.ts      # iron-session config
middleware.ts     # Redirects unauthenticated requests to /login
public/
  videos/         # Place .mp4 files here
```

---

## Security Notes

- Passwords are **never** sent to the client or stored in frontend code.
- The session cookie is `HttpOnly` (not accessible via JavaScript) and `Secure` in production.
- `controlsList="nodownload"` and disabled right-click are **UI-level friction**, not true DRM. A determined user can still access the file via browser dev tools. For stronger protection, use signed/expiring URLs from a CDN.
