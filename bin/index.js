#! /usr/bin/env node
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.log();
    console.error(`Failed to execute ${command}, ${error}`);
    console.log();

    return false;
  }

  return true;
}

const repositoryName = process.argv[2];

if (!repositoryName) {
  console.log();
  console.error('Please specify the project directory:');
  console.log(
    `  clean-typography-template '<project-directory>'`
  );
  console.log();
  console.log('For example:');
  console.log(
    `  clean-typography-template 'my-app'`
  );
  console.log();
  process.exit(1);
}

const gitCheckoutCommand = `git clone --depth 1 https://github.com/shadaxv/clean-typography-template ${repositoryName}`;
const installDependenciesCommand = `cd ${repositoryName} && npm install`;

console.log(`Cloning the repository to ${repositoryName}`);

const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) {
  process.exit(1);
}

console.log(`Installing dependencies for ${repositoryName}`);

const installedDeps = runCommand(installDependenciesCommand);

if (!installedDeps) {
  process.exit(1);
}

console.log();
console.log("Success! Follow the following commands to start:")
console.log(`cd ${repositoryName} && npm start`);
console.log();

process.exit(0);