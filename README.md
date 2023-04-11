# rollup-plugin-import-fallback

A rollup/vite plugin that allows to define a import fallback.

## Install

```bash
yarn add -D rollup-plugin-import-fallback
```

## Usage with vite

In `vite.config.ts`

```ts
import { defineConfig } from "vite";
import importFallback from "rollup-plugin-import-fallback";

export default defineConfig({
  plugins: [
    importFallback({
      parameterName: "fallback", // Default f
    }),
  ],
});
```

In your code:

```ts
import import, {
  namedImport,
} from "./a-import-that-is-not-always-defined?f=./a-fallback-import";
```

## Typescript

You must define the correct import types in your declaration file.

```ts
declare module "./a-import-that-is-not-always-defined?f=./a-fallback-import";
```

## Bundle size

The final bundle contains only the import that is actually used, to minimise bundle size.
