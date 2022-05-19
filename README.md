# React Project Starter

Forked from [TheSwordBreaker/vite-reactts-eslint-prettier](https://github.com/TheSwordBreaker/vite-reactts-eslint-prettier) with added support for:

- [Styled Components](https://styled-components.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [React Query Library](https://react-query.tanstack.com/) (with tests using [MSW](https://mswjs.io/) for custom hooks)

## Installation

Follow steps for [creating a new repository from this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template).

![use template button](https://docs.github.com/assets/cb-36544/images/help/repository/use-this-template-button.png)

Clone the new repository:

```bash
git clone git@github.com:yourName/whatcha-gonna-call-it.git
```

Install dependencies:

```bash
cd whatcha-gonna-call-it
yarn install
```

## Start

After installation:

```bash
yarn start
```

## Test

Runs tests with Jest, RTL, and MSW support

```bash
yarn test
```

## Build

Build for production

```bash
yarn build
yarn serve # preview the build on port 4173
```
