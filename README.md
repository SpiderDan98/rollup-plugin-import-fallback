# rollup-plugin-module-fallback

A rollup plugin that creates virtual files for your custom Tailwind configuration.

## Install

```bash
yarn add -D rollup-plugin-module-fallback
```

## Usage with vite

In `vite.config.ts`

```ts
import { defineConfig } from "vite";
import moduleFallback from "rollup-plugin-module-fallback";

export default defineConfig({
  plugins: [
    moduleFallback({
      parameterName: "fallback", // Default f
    }),
  ],
});
```

In your code:

```ts
import module, {
  namedModuleExport,
} from "./a-module-or-file-that-is-not-always-defined?f=./a-fallback-module-or-file";
```

## Typescript

You must define the correct import types in your declaration file.

```ts
declare module "./a-module-or-file-that-is-not-always-defined?f=./a-fallback-module";
```

## Bundle size

The final bundle contains only the module actually used to minimise bundle size.
