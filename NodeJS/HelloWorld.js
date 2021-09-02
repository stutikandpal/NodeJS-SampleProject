import show from "./secondmodule.mjs";
import * as SM from "./secondmodule.mjs"
//const os = require('os');
//const dns = require('dns');



console.log("Hello World")
console.log("node v14.16.1")
console.log("npm 6.14.12")
console.log("")
console.log("Commands")
console.log("")
console.log("npm init")
console.log("npm install express --save")
console.log("to install globally in the computer, add -g like : npm install -g express")
console.log("npm i -g nodemon or npm i nodemon (when we save, automatically rerun server")
console.log("npm install --save-dev nodemon (if we want nodemon should work only while development - dev dependency")
console.log("npm uninstall nodemon (to uninstall something)")
console.log("Add 'Path':'module' for ES6 and 'common javascript' for CJS in package.json")
console.log("npm install --save express")
/*
User1= require("./secondfile");
console.log("Imported Element 1 is \n",User1)

dns.lookup('example.org', (err, address, family) => {
    console.log('address: %j family: IPv%s', address, family);
  });

console.log(os.freemem())
console.log(os.totalmem())
console.log(os.uptime())
console.log(os.type())
*/

show()
console.log(SM)

