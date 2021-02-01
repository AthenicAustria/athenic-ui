import React from "react";
import packageJson from "../package.json";
import { H1 } from "./components/H1";
import { H2 } from "./components/H2";
import { H3 } from "./components/H3";
import { Button } from "./components/Button";
import { IconButton } from "./components/Button";
import { Badge } from "./components/Badge";
import { Spinner } from "./components/Spinner";
import { TextInput } from "./components/TextInput";
import { Card } from "./components/Card";
import { Link } from "./components/Link";
import "./index.scss";

import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import * as faIcons from "@fortawesome/free-solid-svg-icons";

import arrow_right from "./assets/img/arrow_right.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Counter } from "./components/Counter";
import { Collapse } from "./components/Collapse";

const App = () => {
  return (
    <div id="App">
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
        iconBefore={faShoppingBag}
        variant="tertiary"
        size="medium"
      >
        Icon before
      </Button>
      <Button iconAfter={faShoppingBag} variant="tertiary" size="medium">
        Icon after
      </Button>

      <H2>With link</H2>
      <Button
        variant="primary"
        link={packageJson.repository.url}
        style={{ marginLeft: 0 }}
      >
        🐱 Link to the Github-Repo
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
      <IconButton style={{ marginLeft: 0 }} icon={faShoppingBag} size="small" />
      <IconButton
        style={{ marginLeft: 0 }}
        icon={faShoppingBag}
        size="medium"
      />
      <IconButton style={{ marginLeft: 0 }} icon={faShoppingBag} size="large" />

      <H1>All Icons</H1>
      <Link to={`https://fontawesome.com/`} text="Icons by Font Awesome" />
      <Card size="auto" style={{ marginLeft: 0 }}>
        {Object.values(faIcons).map((f: any, i: number) => (
          <FontAwesomeIcon icon={f} style={{ margin: 5 }} key={i} />
        ))}
      </Card>

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
      <TextInput style={{ marginLeft: "0px" }} />

      <H2>With Placeholder</H2>
      <TextInput placeholder="Athenic UI" style={{ marginLeft: 0 }} />

      <H2>Disabled</H2>
      <TextInput disabled={true} style={{ marginLeft: 0 }} />

      <H2>Invalid</H2>
      <TextInput invalid={true} style={{ marginLeft: 0 }} />

      <H2>With Label</H2>
      <TextInput label="E-Mail" style={{ marginLeft: 0 }} />

      <H2>With Validation-Message</H2>
      <TextInput
        validationMessage="Please enter a valid E-Mail"
        style={{ marginLeft: 0 }}
      />

      <H2>Password</H2>
      <TextInput type="password" style={{ marginLeft: 0 }} />

      <H1>Card</H1>
      <H2>Size</H2>
      <Card size="small" />
      <Card />
      <Card size="large" />
      <H2>Example</H2>
      <Card
        title="Athenic UI - Card title"
        size="auto"
        style={{ marginLeft: 0 }}
      >
        <TextInput placeholder="Password" />
        <TextInput placeholder="E-Mail" type="password" />
        <Button>✌️ Athenic - Sign In</Button>
      </Card>

      <H1>Link</H1>
      <H2>Standard</H2>
      <p>
        This is a simple <Link to={packageJson.repository.url} text="Link" /> to
        the Athenic UI Github-Repo.
      </p>

      <H2>Target new Tab</H2>
      <p>
        Here is another sample{" "}
        <Link to={packageJson.repository.url} text="Link" target="_blank" />.
      </p>

      <H1>Counter</H1>
      <H2>Size</H2>
      <Counter size="small" end={5000} />
      <Counter end={5000} />
      <Counter size="large" end={5000} />

      <H2>Duration</H2>
      <Counter size="small" end={5000} duration={2} />
      <Counter size="small" end={5000} duration={5} />

      <H2>With prefix</H2>
      <Counter size="small" prefix="$ " end={5000} />
      <Counter size="small" prefix="€ " end={5000} />

      <H2>With suffix</H2>
      <Counter size="small" suffix=" Users" end={5000} />
      <Counter size="small" suffix=" satisfied customers" end={5000} />

      <H2>With delay</H2>
      <Counter size="small" delay={2} end={5000} />

      <H1>Collapse</H1>
      <Collapse
        content={[{ header: "Tab 1", content: "Content of Tab 1" }]}
      ></Collapse>
      <Collapse
        content={[
          { header: "Tab 1", content: "Content of Tab 1" },
          { header: "Tab 2", content: "Content of Tab 2" },
          { header: "Tab 3", content: "Content of Tab 3" },
          { header: "Tab 4", content: "Content of Tab 4" },
        ]}
      ></Collapse>

      <H2>With initial opened</H2>
      <Collapse
        content={[
          { header: "Tab 1", content: "Content of Tab 1" },
          { header: "Tab 2", content: "Content of Tab 2" },
          { header: "Tab 3", content: "Content of Tab 3" },
        ]}
        initialActiveTabs={[0]}
      ></Collapse>

      <H2>Nesting Elements in Collapse</H2>
      <Collapse
        content={[
          {
            header: "Tab 1",
            content: (
              <Button
                text="👋 I'm hiding in here... :D"
                style={{ marginLeft: 0 }}
              />
            ),
          },
          { header: "Tab 2", content: "Content of Tab 2" },
          { header: "Tab 3", content: "Content of Tab 3" },
        ]}
        initialActiveTabs={[0]}
      ></Collapse>
    </div>
  );
};

export default App;
