import React, { Component } from "react";
import "./App.css";
import {
  H1,
  H2,
  H3,
  Button,
  IconButton,
  Badge,
  Spinner,
  TextInput,
} from "athenic-ui";
import "athenic-ui/dist/index.css";

import icon_placeholder from "../../../src/assets/img/icon_placeholder.png";
import arrow_left from "../../../src/assets/img/arrow_right.png";

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
        <Button style={{ marginLeft: 0 }} size="small" disabled={true}>
          disabled - small
        </Button>
        <Button size="medium" disabled={true}>
          disabled - medium
        </Button>
        <Button size="large" disabled={true}>
          disabled - large
        </Button>

        <H2>Icon Button</H2>
        <IconButton style={{ marginLeft: 0 }} icon={arrow_left} size="small" />
        <IconButton style={{ marginLeft: 0 }} icon={arrow_left} size="medium" />
        <IconButton style={{ marginLeft: 0 }} icon={arrow_left} size="large" />

        <H1>Badges</H1>
        <H2>Tint</H2>
        <Badge label="primary" style={{ marginRight: 0 }} />
        <Badge label="secondary" variant="secondary" />
        <Badge label="tertiary" variant="tertiary" />
        <Badge label="success" variant="success" />
        <Badge label="warning" variant="warning" />
        <Badge label="error" variant="error" />

        <H2>Solid</H2>
        <Badge label="primary" solid={true} style={{ marginRight: 0 }} />
        <Badge label="secondary" variant="secondary" solid={true} />
        <Badge label="tertiary" variant="tertiary" solid={true} />
        <Badge label="success" variant="success" solid={true} />
        <Badge label="warning" variant="warning" solid={true} />
        <Badge label="error" variant="error" solid={true} />

        <H1>Spinner</H1>
        <H2>Variants</H2>
        <Spinner />
        <Spinner variant="secondary" />
        <Spinner variant="tertiary" />

        <H2>Size</H2>
        <Spinner size="small" />
        <Spinner size="medium" />
        <Spinner size="large" />

        <H2>Custom Speed</H2>
        <Spinner speed={500} />
        <Spinner speed={2000} />

        <H1>Text Input</H1>
        <TextInput />

        <H2>With Placeholder</H2>
        <TextInput placeholder="Athenic UI" />

        <H2>Disabled</H2>
        <TextInput disabled={true} />

        <H2>Invalid</H2>
        <TextInput invalid={true} />
      </div>
    );
  }
}

export default App;
