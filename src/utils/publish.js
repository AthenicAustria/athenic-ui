const { exec } = require("child_process");
const Inquirer = require("inquirer");
const packageJson = require("../../package.json");
const chalk = require("chalk");

Inquirer.prompt([
  {
    type: "list",
    name: "version",
    message: "Version",
    choices: ["patch", "major", "minor"],
  },
]).then((answers) => {
  try {
    exec(`npm version ${answers.version}`, (error, stdout, stderr) => {
      if (error) console.log(error);
      if (stderr) console.log(stderr);

      chalk.white.bold(`✔️  Updated package version to ${packageJson.version}`);
      console.log(stdout);
    });

    exec(`npm publish`, (error, stdout, stderr) => {
      if (error) console.log(error);
      if (stderr) console.log(stderr);

      chalk.white.bold(
        `✔️  Successfully published ${packageJson.name}@${packageJson.version} to NPM`
      );
      console.log(stdout);
    });
  } catch (err) {
    console.log(err);
  }
});
