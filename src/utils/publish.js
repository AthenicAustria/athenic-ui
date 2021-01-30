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
]).then(async (answers) => {
  try {
    await exec(
      `git commit -m \"🔖 published ${packageJson.version}\"`,
      (error, stdout, stderr) => {
        if (error) console.log(error);
        if (stderr) console.log(stderr);

        console.log(stdout);
      }
    );

    await exec(`git push`, (error, stdout, stderr) => {
      if (error) console.log(error);
      if (stderr) console.log(stderr);
      console.log(stdout);
    });

    await exec(`npm run build`, (error, stdout, stderr) => {
      if (error) console.log(error);
      if (stderr) console.log(stderr);
    });

    await exec(`npm version ${answers.version}`, (error, stdout, stderr) => {
      if (error) console.log(error);
      if (stderr) console.log(stderr);

      // chalk.white.bold(`✔️  Updated package version to ${packageJson.version}`);
      console.log(stdout);
    });

    await exec(`npm publish`, (error, stdout, stderr) => {
      if (error) console.log(error);
      if (stderr) console.log(stderr);

      chalk.white.bold(
        `✔️  Successfully published ${packageJson.name}@${packageJson.version} to NPM`
      );
      console.log(stdout);
    });
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
});
