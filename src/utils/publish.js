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
    console.clear();

    exec(`npm run build`, (error, stdout, stderr) => {
      if (error) console.log(error);
      if (stderr) console.log(stderr);
      console.log(chalk.white.bold(`✔️  Built new bundle`));

      exec(`npm version ${answers.version}`, (error, stdout, stderr) => {
        if (error) console.log(error);
        if (stderr) console.log(stderr);

        console.log(chalk.white.bold(`✔️  Bumped version to ${stdout}`));

        exec(`git diff`, (error, stdout, stderr) => {
          if (error) console.log(error);
          if (stderr) console.log(stderr);

          if (stdout) {
            exec(`git add .`, (error, stdout, stderr) => {
              if (error) console.log(error);
              if (stderr) console.log(stderr);

              exec(
                `git commit -m \"🔖 published ${packageJson.version}\"`,
                (error, stdout, stderr) => {
                  if (error) console.log(error);
                  if (stderr) console.log(stderr);

                  console.log(
                    chalk.white.bold(`✔️  Committed changes to Github`)
                  );

                  exec(`git push`, (error, stdout, stderr) => {
                    if (error) console.log(error);
                    if (stderr) console.log(stderr);
                    console.log(
                      chalk.white.bold(`✔️  Pushed changes to Github`)
                    );

                    exec(`npm publish`, (error, stdout, stderr) => {
                      if (error) console.log(error);
                      if (stderr) console.log(stderr);

                      console.log(
                        chalk.white.bold(
                          `✔️  Successfully published ${packageJson.name}@${packageJson.version} to NPM`
                        )
                      );
                    });
                  });
                }
              );
            });
          } else {
            exec(`npm publish`, (error, stdout, stderr) => {
              if (error) console.log(error);
              if (stderr) console.log(stderr);

              console.log(
                chalk.white.bold(
                  `✔️  Successfully published ${packageJson.name}@${packageJson.version} to NPM`
                )
              );
            });
          }
        });
      });
    });
  } catch (err) {
    console.log(err);
  }
});
