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

## Add Testing

Use vitest: - [reference](https://vitest.dev/config/)
```shell
npm install -D \
  vitest \
  happy-dom \
  @vitest/coverage-v8 \
  @testing-library/react \
  @testing-library/user-event \
  @testing-library/jest-dom
```
`vitest`: testing framework, usage is similar with Jest

`happy-dom`: browser without graphical interface

`@vitest/coverage-v8`: coverage

`@testing-library/react`: for unit test on react

`@testing-library/user-event`: simulate user event

`@testing-library/jest-dom`: check DOM status, compatible with vitest

Add to `package.json`:
```json
{
  "scripts": {
    "test": "vitest run --coverage"
  }
}
```

Config `vite.config.ts`:
```ts
export default defineConfig({
    plugins: [react(),tsconfigPaths()],
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: './tests/setup.ts',
    },
})
```

and create `./tests/setup.ts`.

edit `tsconfig.json`:
```json
{
  "include": [
    "src",
    "tests/setup.ts"
  ]
}
```

add test file for sample app `App.tsx`:
```tsx
// src/App.test.tsx
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {expect, test} from "vitest";

import App from "@/App.tsx";

test("test", async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByText("count is 0")).toBeInTheDocument();
    await user.click(screen.getByTestId('addCount'));
    expect(screen.getByText("count is 1")).toBeInTheDocument();
});
```

Run testing:
```shell
npm run test
```