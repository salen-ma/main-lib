const shell = require("shelljs");
const { exit } = require("yargs");
const argv = require('yargs').argv;
const branch = argv._[0] || 'main';
// npm run pushSub -- test
console.log(argv._[0]); // test

const repositoryUrl = 'https://github.com/salen-ma/sub-lib.git'
const pullExec = `git subtree pull --prefix sub-lib ${repositoryUrl} ${branch} --squash`
const pushExec = `git subtree push --prefix sub-lib ${repositoryUrl} ${branch}`
if (argv.type === 'pull') {
  console.log(pullExec)
  shell.exec(pullExec)
} else if (argv.type === 'push') {
  console.log(pushExec)
  shell.exec(pushExec)
}
