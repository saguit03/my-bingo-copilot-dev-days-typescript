# AGENTS.md

Agent operating notes for this repository. Keep changes minimal, testable, and aligned with existing workshop materials.

## Mission

- Build and maintain a React + TypeScript social bingo app.
- Prefer small, focused edits over broad refactors.
- Link to existing docs instead of duplicating long guidance.

## Quick Start

- Prerequisite: Node.js 22+
- Install: `npm install`
- Dev server: `npm run dev`
- Build (type-check + bundle): `npm run build`
- Lint: `npm run lint`
- Test: `npm run test`

## Code Map

- App entry: `src/main.tsx`
- Top-level UI flow: `src/App.tsx`
- Screens: `src/components/StartScreen.tsx`, `src/components/GameScreen.tsx`
- Board components: `src/components/BingoBoard.tsx`, `src/components/BingoSquare.tsx`, `src/components/BingoModal.tsx`
- State orchestration: `src/hooks/useBingoGame.ts`
- Core game logic (pure functions): `src/utils/bingoLogic.ts`
- Logic tests: `src/utils/bingoLogic.test.ts`
- Shared types: `src/types/index.ts`
- Question source data: `src/data/questions.ts`

## Project Conventions

- Use strict TypeScript patterns already present in the codebase.
- Keep game rules in `src/utils/bingoLogic.ts`; keep UI-only behavior in components.
- Add/update tests when changing win detection, board generation, or toggling logic.
- Keep persisted game-state changes backward-safe in `useBingoGame`.
- Preserve component naming and file naming conventions (PascalCase for components, `use*` for hooks).

## Common Pitfalls

- The board is 5x5 with a fixed free center square; avoid breaking center-square assumptions.
- Persistence format is validated in `useBingoGame`; schema changes must include migration/version handling.
- Build failures can come from strict TS options (`noUnusedLocals`, `noUnusedParameters`) in `tsconfig.app.json`.

## Documentation Links

- Primary project overview: [README.md](README.md)
- Lab guide index: [workshop/GUIDE.md](workshop/GUIDE.md)
- Setup flow: [workshop/01-setup.md](workshop/01-setup.md)
- Design workflow: [workshop/02-design.md](workshop/02-design.md)
- Multi-agent workflow: [workshop/04-multi-agent.md](workshop/04-multi-agent.md)

## Existing Chat Customizations

- Agents: `.github/agents/*.agent.md`
- Prompts: `.github/prompts/*.prompt.md`
- Frontend design instruction: `.github/instructions/frontend-design.instructions.md`
- Tailwind v4 instruction: `.github/instructions/tailwind-4.instructions.md`

When a task matches one of the custom agents or prompts, prefer using it.
