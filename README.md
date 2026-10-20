# YouTube Intro

A small [Remotion](https://www.remotion.dev/) project for creating a 5-second animated YouTube intro. The composition uses Bangers lettering and a halftone pop-art chevron; edit `src/YouTubeIntro.tsx` to customize the title, colors, and animation.

## Requirements

- Node.js 18 or newer
- pnpm 10.15.1 (or enable Corepack with `corepack enable`)

## Get started

```bash
pnpm install
pnpm dev
```

The Remotion Studio opens with the `YouTubeIntro` composition. The Bangers font is loaded from Google Fonts by `@remotion/google-fonts`.

## Render

```bash
pnpm build
```

This renders a 1920×1080, 30 fps MP4 to `out/intro.mp4`. The composition is 150 frames (5 seconds); its size, frame rate, and duration are registered in `src/Root.tsx`.

Run the TypeScript check with:

```bash
pnpm typecheck
```
