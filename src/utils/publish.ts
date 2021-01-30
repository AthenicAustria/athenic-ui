import { exec } from "child_process";
import Inquirer from "inquirer";

Inquirer.prompt([
  {
    type: "list",
    name: "version",
    message: "Version",
    choices: ["major", "minor", "patch"],
  },
]).then((answers: any) => {});
