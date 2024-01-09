# react-app-with-vite
Just try to create react app with vite

## Reference:
[Getting Started | Vite](https://vitejs.dev/guide/)

## Create app

```shell
npm create vite@latest
```

Follow instruction
```shell
cd react-project-with-vite
npm install
npm run dev
```

Good to go

## Other Config

### path alias:
Add code
```json
"baseUrl": "./",
"paths": {
    "@/*": ["src/*"]
}
```
to `tsconfig.json`.

use `vite-tsconfig-paths` to make the alias effected in `vite.config.ts` - [resource](https://github.com/vitejs/vite/issues/6828)

```shell
npm install -D vite-tsconfig-paths
```

edited `vite.config.ts`:
```ts
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
```

