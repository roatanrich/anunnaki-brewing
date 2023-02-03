# Annunaki Brewing

[![Build and test status](https://github.com/roatanrich/annunaki-brewing.git/workflows/Lint%20and%20test/badge.svg)](https://github.com/roatanrich/annunaki-brewing.git/actions?query=workflow%3A%22Build+and+test%22)

A future endeavor to startup a brewery using this app for inventory, recipe creation, maintaining brew batches. This project was written using Node.js and Typescript.

## Technologies Used

- [TypeScript 4](https://www.typescriptlang.org/), [esbuild](https://esbuild.github.io/), [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint), [Jest](https://jestjs.io/docs/getting-started), [GitHub Actions](https://docs.github.com/en/actions), [GitLab CI](https://docs.gitlab.com/ee/ci/), [TypeDoc](https://typedoc.org/guides/doccomments/), [Morgan](https://www.npmjs.com/package/@types/morgan)

This project was cloned from here: **[Starting a TypeScript Project in 2021](https://www.metachris.com/2021/04/starting-a-typescript-project-in-2021/)**.

## Getting Started

```bash
# Clone the repository (you can also click "Use this template")
git clone https://github.com/roatanrich/annunaki-brewing.git your_project_name
cd your_project_name

# Edit `package.json` and `tsconfig.json` to your liking
...

# Install dependencies
yarn install

# Now you can run various yarn commands:
yarn cli
yarn lint
yarn test
yarn build-all
yarn ts-node <filename>
yarn esbuild-browser
...
```

- Take a look at all the scripts in [`package.json`](https://github.com/metachris/typescript-boilerplate/blob/master/package.json)
- For publishing to npm, use `yarn publish` (or `npm publish`)

## esbuild

[esbuild](https://esbuild.github.io/) is an extremely fast bundler that supports a [large part of the TypeScript syntax](https://esbuild.github.io/content-types/#typescript). This project uses it to bundle for browsers (and Node.js if you want).

```bash
# Build for browsers
yarn esbuild-browser:dev
yarn esbuild-browser:watch

# Build the cli for node
yarn esbuild-node:dev
yarn esbuild-node:watch
```

You can generate a full clean build with `yarn build-all` (which uses both `tsc` and `esbuild`).

- `package.json` includes `scripts` for various esbuild commands: [see here](https://github.com/metachris/typescript-boilerplate/blob/master/package.json#L23)
- `esbuild` has a `--global-name=xyz` flag, to store the exports from the entry point in a global variable. See also the [esbuild "Global name" docs](https://esbuild.github.io/api/#global-name).
- Read more about the esbuild setup [here](https://www.metachris.com/2021/04/starting-a-typescript-project-in-2021/#esbuild).
- esbuild for the browser uses the IIFE (immediately-invoked function expression) format, which executes the bundled code on load (see also https://github.com/evanw/esbuild/issues/29)
