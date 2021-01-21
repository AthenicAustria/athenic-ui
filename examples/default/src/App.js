import React, { Component } from "react";
import "./App.css";
import * as Athenic from "athenic-ui";
import "athenic-ui/dist/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <Athenic.H1>Athenic UI</Athenic.H1>
      </div>
    );
  }
}

export default App;
