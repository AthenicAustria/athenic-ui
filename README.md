<center>
  <img width="760" height="500" src="https://raw.githubusercontent.com/b3h3m0th/athenic-ui/main/artwork/logo/logo.svg"> <br/>
  <h3>👑 Building beautiful React Applications made simple</h3>
</center>
<hr/>

# athenic-ui

[![NPM](https://img.shields.io/npm/v/athenic-ui.svg)](https://www.npmjs.com/package/athenic-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

## License

MIT © [b3h3m0th](https://github.com/b3h3m0th)
