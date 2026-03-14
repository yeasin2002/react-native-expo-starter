# Tech Stack

## Core

- **React Native 0.83** + **React 19** + **Expo 55**
- **TypeScript 5** (strict mode, `noUncheckedIndexedAccess`, `noUnusedLocals/Parameters`)
- **Expo Router 55** — file-based routing with typed routes enabled
- **React Compiler** — enabled via Expo experiments

## Styling

- **Uniwind** — Tailwind-for-React-Native utility. Wrap third-party components with `withUniwind()` to apply className props.
- **TailwindCSS 4** — configured via `src/global.css`
- **HeroUI Native** — component library; wrapped in `<HeroUINativeProvider>`
- `tailwind-merge` and `tailwind-variants` available for class composition

## Key Libraries

- `react-native-reanimated` 4 — animations
- `react-native-gesture-handler` — gestures (requires `<GestureHandlerRootView>` at root)
- `react-native-keyboard-controller` — keyboard handling (requires `<KeyboardProvider>` at root)
- `react-native-safe-area-context` — safe area insets
- `@gorhom/bottom-sheet` — bottom sheets
- `expo-haptics`, `expo-secure-store`, `expo-font`, `expo-constants`, etc.
- `@t3-oss/env-core` + `zod` — type-safe environment variables via `src/lib/env.ts`

## Linting & Formatting

- **Oxlint** + **Oxfmt** (via `ultracite`) — primary linter and formatter
- **ESLint** — configured via `eslint.config.mjs` using `ultracite/eslint/core` and `ultracite/eslint/react`, scoped to `src/**`
- **Prettier** — config delegates to `ultracite/prettier`
- **Lefthook** — pre-commit hooks run `oxlint --fix` and `oxfmt --write` on staged files

## Package Manager

- **pnpm** (workspace-aware via `pnpm-workspace.yaml`)

## Common Commands

```bash
pnpm dev              # Start Expo dev server (clears cache)
pnpm start            # Start Expo dev server
pnpm ios              # Run on iOS simulator
pnpm android          # Run on Android emulator
pnpm web              # Run in browser
pnpm check            # Lint + format check (ultracite)
pnpm fix              # Lint + format fix (ultracite)
pnpm check-types      # TypeScript type check (tsc --noEmit)
pnpm knip             # Dead code / unused exports check
```
