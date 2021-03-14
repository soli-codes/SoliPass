const fs = require('fs');
let pw;
if (fs.existsSync(`${__dirname}/pw.json`)) {
  let rawdata = fs.readFileSync(`${__dirname}/pw.json`);
  pw = JSON.parse(rawdata);
} else {
  pw = false;
}
