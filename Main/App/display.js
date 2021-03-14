const fs = require('fs');

let rawdata = fs.readFileSync(`${__dirname}/pw.json`);
let pw = JSON.parse(rawdata);
console.log(pw);
