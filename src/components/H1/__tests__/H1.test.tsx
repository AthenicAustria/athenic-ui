import React from "react";
import renderer from "react-test-renderer";

import { H1 } from "../";

describe("Counter", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<H1>Athenic UI</H1>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
