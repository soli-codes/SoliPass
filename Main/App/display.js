const fs = require('fs');
let pw;
// Checks if pw.json exists
if (fs.existsSync(`${__dirname}/pw.json`)) {
  // If it does exist, turn the pw variable into a javascript object
  let rawdata = fs.readFileSync(`${__dirname}/pw.json`);
  pw = JSON.parse(rawdata);
} else {
  // If it does not exist, set pw to false
  pw = false;
}
