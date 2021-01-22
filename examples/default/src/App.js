import React, { Component } from "react";
import "./App.css";
import { H1, H2, H3, Button } from "athenic-ui";
import "athenic-ui/dist/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <H1 style={{ color: "var(--color-light-red)" }}>Athenic UI - H1</H1>
        <H2>Athenic UI - H2</H2>
        <H3>Athenic UI - H3</H3>
        <Button>asdf</Button>
      </div>
    );
  }
}

export default App;
