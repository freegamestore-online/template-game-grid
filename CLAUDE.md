# Grid Game Template

A free game on FreeGameStore.

- Subdomain: `APPNAME.freegamestore.online`
- Dev: `pnpm install && pnpm dev`
- Build: `pnpm build`
- Deploy: `git push origin main` (auto-deploys to R2 via GitHub Actions)

Free, MIT-licensed, no tracking. For platform conventions, read
https://freegamestore.online/skills.md
before writing or changing anything.

---

## Template Purpose
This template is for building grid-based games such as:
- 2048
- Minesweeper
- Sudoku
- Wordle
- Connect Four
- Tic-Tac-Toe
- Match-3 puzzles

## Architecture
- `web/src/hooks/useGrid.ts` — Reusable grid state hook (rows, cols, cell operations)
- `web/src/hooks/useHighScore.ts` — localStorage-backed high score persistence
- `web/src/components/GameGrid.tsx` — Reusable CSS Grid renderer with touch + click support
- `web/src/App.tsx` — Demo match-3 game showing all features in action

## Grid Rendering
- Uses CSS Grid (not canvas) for accessibility and styling flexibility
- Responsive sizing via CSS clamp()
- Touch + click support on all cells
- Smooth CSS transitions (200ms ease for moves, 300ms scale for clears)
- CSS variables for theming (dark mode compatible)

## Visual Defaults
- Cells: rounded corners (0.5rem), subtle shadows, gradient fills
- Colors: vibrant but tasteful palette for cell values
- Score display with Fraunces font
- Glass-effect score panel
- Dark mode via prefers-color-scheme (no toggle)

## Styling
- Tailwind 4 on tokens (ADR-001): `bg-panel`, `bg-paper`, `text-ink`, `text-muted`, `border-line`, `text-accent`, `text-danger`.
- `index.css` holds tokens, `@source`, `@theme inline` and base rules only. No feature classes.
- No inline `style={{}}` unless the value is computed at runtime; comment it `dynamic`.
- Floating UI (menus, dialogs, results) uses an opaque surface: `bg-panel`.
- Never inject CSS from JS. Canvas/WebGL drawing is exempt.
- `--bg` stays only for the brand-tokens check. Don't use `--surface`, `--border`, `--glass`, `--dock`, `--error`.
- `pnpm build` runs `scripts/check-styling.mjs` and fails on a regression.
