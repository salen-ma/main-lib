const shell = require("shelljs");
const argv = require('yargs').argv;

const repositoryUrl = 'https://github.com/salen-ma/sub-lib.git'
const pullExec = `git subtree pull --prefix sub-lib ${repositoryUrl} main --squash`
const pushExec = `git subtree push --prefix sub-lib ${repositoryUrl} main`
if (argv.type === 'pull') {
  console.log(pullExec)
  shell.exec(pullExec)
} else if (argv.type === 'push') {
  console.log(pushExec)
  shell.exec(pushExec)
}
