# Vite + React + Typescript + Eslint + Prettier

A starter for React with Typescript with the fast Vite and all static code testing with Eslint and formatting with Prettier.

I found out about Vite and I wanted to have a boilerplate for the technologies that I use. You can find more about these in the following links: [Vite](https://github.com/vitejs/vite), [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [Eslint](https://eslint.org/), [Prettier](https://prettier.io/).

## Installation

Clone the repo and run

```bash
npm install
```

or run command

```bash
npx degit amelinium23/vite-reactts-eslint-prettier project-name
```

## Start

After the successful installation of the packages:

```sh
npm run dev
```

## Steps in Vscode

1. Install Eslint and prettier extension for vs code.
2. Make Sure Both are enabled
3. Make sure all packages are Installed. (Mostly Eslint and prettier in node_modules)
4. Enable formatOnSave of vs code
5. Open a .tsx file and check if the bottom right corners of vs code have Eslint and Prettier with a double tick
   If Everything is Good Then It Should Work, but let me new if something else happens

Here are basic settings for VS Code to properly work:
Just in `.vscode` directory create `settings.json` and paste below there:

```json
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "files.insertFinalNewline": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "files.eol": "\n"
}
```

(Optional) You can create `launch.json` in `.vscode` directory to launch project for use run and debug tab in vscode:

```json
{
  "configurations": [
    {
      "command": "npm run dev",
      "name": "Run dev server",
      "request": "launch",
      "type": "node-terminal"
    }
  ]
}
```

Base on [template by theSwordBreaker](https://github.com/TheSwordBreaker/vite-reactts-eslint-prettier) ❤️
