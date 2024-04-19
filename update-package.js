const data = require('./package.json');
var exec = require('child_process').exec, child;

if (data != undefined) {
  let packages = '';

  if (data.dependencies !== undefined) {
    Object.keys(data.dependencies).forEach(key => {
      if (key !== "glob") {
        packages += ` ${key}@latest`;
      }
    });
  }
  
  if (data.devDependencies !== undefined) {
    Object.keys(data.devDependencies).forEach(key => {
      if (key !== "glob") {
        packages += ` ${key}@latest`;
      }
    });
  }

  child = exec('npm i ' + packages, (error, stdout, stderr) => {
    if (error) {
      console.log(error);
    }
    console.log(stdout);
  });
}