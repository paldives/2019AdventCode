var myArgs = process.argv.slice(2);

let file = require('./Day'+myArgs[0]+'/index.js');
process.chdir('./Day'+myArgs[0]);

file.run();