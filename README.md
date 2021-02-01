<p align="center">
  <img width="450" height="200" src="https://raw.githubusercontent.com/b3h3m0th/athenic-ui/main/artwork/logo/logo.png"> <br/>
  <h3 align="center">👑 Building beautiful React Applications made simple</h3>
</p>
<hr/>

# athenic-ui

[![NPM](https://nodei.co/npm/athenc-ui.png?compact=true)](https://npmjs.org/package/athenic-ui)

[![NPM](https://img.shields.io/npm/v/athenic-ui.svg)](https://www.npmjs.com/package/athenic-ui) [![NPM](https://img.shields.io/npm/dt/athenic-ui)](https://www.npmjs.com/package/athenic-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Netlify Status](https://api.netlify.com/api/v1/badges/eef6da85-a579-4bb6-8ffd-8e84f4b19abe/deploy-status)](https://app.netlify.com/sites/athenic-ui-demo/deploys)

<a href="https://www.buymeacoffee.com/b3h3m0th" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 20px !important;width: 54.25px !important;" ></a>

##### 📝 View the Documentation (coming soon)

##### 🔥 Explore the [Demo](https://ui.athenic.at/)

## Install

```bash
npm install --save athenic-ui
```

## Usage

```tsx
import React from "react";

import * as Athenic from "athenic-ui";
import "athenic-ui/dist/index.css";

const MyComponent = () => {
  return <Athenic.H1>Hello World</Athenic.H1>;
};

export default MyComponent;
```

```tsx
import React from "react";

import { H1 } from "athenic-ui";
import "athenic-ui/dist/index.css";

const MyComponent = () => {
  return <H1>Hello World</H1>;
};

export default MyComponent;
```

## Examples

```tsx
import React from "react";

import { Button } from "athenic-ui";
import "athenic-ui/dist/index.css";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const MyComponent = () => {
  return (
    <Button variant="primary" iconBefore={faShoppingBag}>
      Click me!
    </Button>
  );
};

export default MyComponent;
```

## License

MIT © [b3h3m0th](https://github.com/b3h3m0th)
