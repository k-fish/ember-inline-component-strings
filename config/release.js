/* eslint-env node */
module.exports = {
  message: "Release %@",
  publish: true,
  afterPublish: function(project, versions) {
    runCommand('ember github-pages:commit --message "Released ' + versions.next + '"');
    runCommand('git push origin gh-pages:gh-pages');
  },
};

function runCommand(command) {
  console.log(`Running: ${command}`);
  const output = execSync(command, { encoding: 'utf8' });
  console.log(output);
}
