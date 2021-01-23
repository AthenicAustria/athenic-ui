import React, { Component } from "react";
import "./App.css";
import { H1, H2, H3, Button } from "athenic-ui";
import "athenic-ui/dist/index.css";

import icon_placeholder from "../../../src/assets/img/icon_placeholder.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <H1>Headers</H1>
        <H1 style={{ color: "var(--color-light-red)" }}>Athenic UI - H1</H1>
        <H2>Athenic UI - H2</H2>
        <H3>Athenic UI - H3</H3>

        <H1>Buttons</H1>
        <H2>Size</H2>
        <Button
          style={{ marginLeft: 0 }}
          size="small"
          onHover={() => console.log("hovered")}
          onClick={() => console.log("clicked")}
        >
          Small
        </Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>

        <H2>Colors</H2>
        <Button variant="primary" style={{ marginLeft: 0 }}>
          Primary
        </Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="success">Success</Button>
        <Button variant="error">Error</Button>
        <Button variant="warning">Warning</Button>

        <H2>With icon</H2>
        <Button
          style={{ marginLeft: 0 }}
          iconBefore={icon_placeholder}
          variant="tertiary"
          size="medium"
        >
          Icon before
        </Button>
        <Button
          style={{ marginLeft: 0 }}
          iconAfter={icon_placeholder}
          variant="tertiary"
          size="medium"
        >
          Icon after
        </Button>

        <H2>Disabled</H2>
        <Button
          style={{ marginLeft: 0 }}
          iconBefore={icon_placeholder}
          variant="tertiary"
          size="medium"
          disabled={true}
        >
          Icon before
        </Button>
      </div>
    );
  }
}

export default App;
