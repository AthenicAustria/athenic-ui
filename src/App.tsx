import React from "react";
import { H1 } from "./components/H1";
import "./index.scss";

const App = () => {
  return (
    <div>
      <H1 style={{ color: "var(--color-dark-red)" }}>Athenic UI</H1>
      <H1 style={{ color: "var(--color-light-red)" }}>Athenic UI</H1>
      <H1 style={{ color: "var(--color-blue)" }}>Athenic UI</H1>
      <H1 style={{ color: "var(--color-light-grey)" }}>Athenic UI</H1>
      <H1 style={{ color: "var(--color-dark-grey)" }}>Athenic UI</H1>
    </div>
  );
};

export default App;
