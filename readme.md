<p>
  <a href="https://pier-ui-docs.vercel.app">
      <img width="28%" src="https://pier-ui-docs.vercel.app/_next/static/media/pier-logo.6038639a.png" alt="Pier UI" />
  </a>
</p>

# Pier UI

A customizable UI library for React and Next Applications.

## Documentation

Visit [https://pier-ui-docs.vercel.app/](https://pier-ui-docs.vercel.app/) to view the full documentation.

## Installation

Inside your React project directory, run the following:

```
yarn add pier-ui
```

Or with npm:

```
npm install pier-ui --save
```

## Basic Setup

```js
// 1. import `Pier UI` component
import { PierUIProvider } from "pier-ui";

function App() {
  // 2. Wrap Pier UI Provider at the root of your app
  return (
    <PierUIProvider>
      <> </>
    </PierUIProvider>
  );
}
```

<br />
## Advanced Setup ( recommanded )

If you want to use pier-ui as a starter UI and build your own components, use the untranspiled source files ( pier-ui/lib ) or simple copy the untranspiled source files in your project and configure styled-jsx:

```
yarn add pier-ui styled-jsx classnames prop-types
```

Or with npm:

```
npm install pier-ui styled-jsx classnames prop-types --save
```

```js
// 1. import `Pier UI` component
import { PierUIProvider } from "pier-ui/lib";

function App() {
  // 2. Wrap Pier UI Provider at the root of your app
  return (
    <PierUIProvider>
      <> </>
    </PierUIProvider>
  );
}
```

<br />
## Configure styled-jsx

To use pier-ui with styled-jsx, you have to add styled-jsx/babel to plugins in your babel configuration:

```json
{
  "plugins": ["styled-jsx/babel"]
}
```

See the styled-jsx Docs here: [styled-jsx docs](https://github.com/vercel/styled-jsx/blob/main/readme.md#getting-started")

<br />
## Usage with Next.js

Next.js automatically configures styled-jsx with babel, you don't have to configure it manually. In your Next.js , run the following:

```
npm install pier-ui next-transpile-modules --save
```

Change the next.config.js file:

```js
const withTM = require("next-transpile-modules")(["pier-ui"]);

module.exports = withTM({});
```

Usage:

```js
import { PierUIProvider } from "pier-ui/lib";

function MyApp({ Component, pageProps }) {
  return (
    <PierUIProvider>
      <Component {...pageProps} />
    </PierUIProvider>
  );
}

export default MyApp;
```

If you use pier-ui as a node module in your Next.js project, you have to install next-transpile-modules to use pier-ui/lib.
Or copy the untranspiled source files to your project for example ./components/lib/ and import:

```js
import { PierUIProvider } from "./components/lib/";
```

### Usage with Create React App

Create React App comes with babel-plugin-macros already installed, so the only thing that needs to be done is to install styled-jsx.

### Usage with Rollup

Coming Soon.

## License

[MIT](https://choosealicense.com/licenses/mit/)
