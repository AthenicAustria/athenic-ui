import type { Config } from "@jest/types";
import * as path from "path";

const config: Config.InitialOptions = {
  roots: [path.resolve(__dirname, "src")],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  name: "athenic-ui",
  verbose: true,
};

export default config;
