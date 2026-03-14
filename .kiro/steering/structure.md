# Project Structure

```
src/
  app/           # Expo Router screens (file-based routing)
  assets/        # Static assets (images, fonts)
  components/    # Shared UI components
  contexts/      # React context providers
  lib/           # Utility modules (env, helpers)
  global.css     # Tailwind + Uniwind + HeroUI style imports
```

## Conventions

**Imports** — use the `@/*` alias for all `src/` imports (e.g. `@/components/container`).

**Screens** — live in `src/app/`. Each file is a route. `_layout.tsx` wraps the stack/tab navigator.

**Components** — named exports, not default exports. Props typed inline or with a local `type Props = ...`.

**Contexts** — one file per context in `src/contexts/`. Export the provider component and a `use*` hook that throws if used outside the provider.

**Environment variables** — define and validate in `src/lib/env.ts` using `@t3-oss/env-core` + `zod`. All client vars must be prefixed `EXPO_PUBLIC_`.

**Styling** — use Tailwind/Uniwind `className` props. Use `cn()` from `heroui-native` for conditional class merging. Wrap third-party components with `withUniwind()` to enable className support.

**Theming** — theme state lives in `AppThemeProvider` (`src/contexts/app-theme-context.tsx`). Use `useAppTheme()` to read or toggle the theme. Do not call `Uniwind.setTheme()` directly outside the context.

**Animations** — use `react-native-reanimated`. Animated components are created with `Animated.createAnimatedComponent()`.

**Root layout** — provider order in `_layout.tsx`: `GestureHandlerRootView` → `KeyboardProvider` → `AppThemeProvider` → `HeroUINativeProvider`.
