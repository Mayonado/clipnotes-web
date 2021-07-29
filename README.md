# React-Typescript Boilerplate

This project is used for templating react-typescript projects.

## Setup Procedure

1. Clone and setup the repository

```bash
git clone https://github.com/Mayonado/react-typescript-boilerplate.git
cd react-typescript
npm i
```

2. Make a copy of environment variables, and adjust accordingly to match local setup.

```bash
cp .env.example .env
```

Take note that CRA needs all environment variables to have a `REACT_APP` prefix.

```bash
# Must point to whatever the backend's GraphQL API's port is (npm run dev)
REACT_APP_API_URL="http://localhost:3000"
```

3. Run the development server. A new tab in your browser with `http://localhost:4000` as the URL should open.

```bash
npm start
```

## A. Project File Structure

```bash
├── public
├── src
│   ├── App
│   ├── components # shareable components used by other components, or pages
│   ├── generated # This is where generated graphQL hooks are located
│   ├── graphql # GraphQL codes directory
│   │   ├── fragments # GraphQL fragments
│   │   ├── mutations # GraphQL mutations
│   │   ├── queries # GraphQL queries
│   ├── hoc # High Order Components (Master page)
│   │   ├── Layout # Master templates of all the pages except the login page
│   ├── pages # all pages
│   ├── utils # check these out often, as we might be duplicating our code!
│   ├── index.less # global styles
│   ├── index.js # setup majority of our global context providers
│   ├── override.less # styling for override ant-design css
├── package.json
├── package-lock.json
└── README.md # Update me often!
```

## B. Component Structure

For example, if we were to make a component called `DummyButton`. We would structure it like the following

```bash
└── components # or pages
    └── DummyButton
        ├── DummyButton.tsx # Component
        └── DummyButton.less # only if necessary!
```

## C. Pages Structure

For example, if we were to make a page called `Dashboard`. We would structure it like the following

```bash
└── pages # or pages
    └── Dashboard
        ├── Dashboard.tsx # Page - This will wrap using HOC
        ├── Dashboard.less # Dashboard - only if necessary
        ├── UserReports # create child folder(only if necessary)
        │   └── UserReports.tsx # Child page
```
