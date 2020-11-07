# CLOUD PANDA - React Boilerplate

This is to ensure that devs consistently follows react file structuring

## A. Setup Pre-requisites

### I. Install the following tools/packages

> Note: Latest version unless otherwise stated

- [Node.js (LTS)](https://nodejs.org/en/download/package-manager/)
- [npm](https://www.npmjs.com/get-npm)
- [eslint](https://eslint.org/docs/user-guide/getting-started)

### II. Local development environment

<!-- - Setup [backend](https://bitbucket.org/cloud-panda/gaccess-backend.git) -->

- Visual Studio Code with installed following recommended extensions:
  1. Eslint - For linting improper codes
  2. Prettier - For consistent code format
  3. Gitlens - Recommended but not mandatory

Make sure to have these settings in your VSCode:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
    "source.fixAll.stylelint": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.disableLanguages": ["php"]
}
```

## B. Setup Procedure

1. Clone and setup the repository

```bash
git clone https://github.com/Mayonado/node-boilerplate.git
cd react-boilerplate
npm i
```

2. Make a copy of environment variables, and adjust accordingly to match local setup.

```bash
cp .env.example .env    #linux/mac
copy .env.example .env  # windows
```

Take note that CRA needs all environment variables to have a `REACT_APP` prefix.

```bash
# Must point to whatever the backend's GraphQL API's port is (npm run dev)
REACT_APP_API_URL="http://localhost:3000"

# must match whatever's backend is using
REACT_APP_GOOGLE_CLIENT_ID="1234567890-qwertyuiopasdfghjklzxcvbnm.apps.googleusercontent.com"
```

3. Run the development server. A new tab in your browser with `http://localhost:4000` as the URL should open.

```bash
npm start
```

## C. Project File Structure

```bash
├── public
├── src
│   ├── App
│   ├── assets # global assets only, if coupled shared asset, put in nearest parent directory
│   ├── components # shareable components used by other components, or pages
│   ├── context # global contexts
│   │   ├── LoaderContext # global loading state context
│   │   ├── ParserContext # for reusable excel parser context
│   │   ├── AuthContext # authentication context
│   ├── hooks # all hooks
│   │   ├── useForm # react-form-hooks for form validation
│   ├── hoc # high order components
│   │   ├── LayoutPage # Master page(Login Page not included)
│   ├── models # model representation of each data on database
│   ├── pages # all pages
│   ├── utils # check these out often, as we might be duplicating our code!
│   ├── index.js # setup majority of our global context providers
│   ├── index.css # global styling that don't belong to any specific component
│   ├── serviceWorker.js
├── package.json
├── package-lock.json
└── README.md # Update me often!
```

## B. Component Structure

For example, if we were to make a component called `DummyButton`. We would structure it like the following

```bash
└── components # or pages
    └── DummyButton
        ├── DummyButton.js # Component
        ├── DummyButton.less # only if necessary!
```

## C. Pages Structure

For example, if we were to make a page called `Dashboard`. We would structure it like the following

```bash
└── pages # or pages
    └── Dashboard
        ├── Dashboard.js # Page - This will wrap using HOC
        ├── Dashboard.less # Dashboard - only if necessary
        ├── Financial Monitoring # create child folder(only if necessary)
```
