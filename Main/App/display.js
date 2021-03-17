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

const writePasswordToScreen = () => {
  let passwordArea = document.getElementById('passwordArea');
  let names = Object.keys(pw['passwords']);
  if (pw != false) {
    for (let i = 0; i < names.length; i++) {
      passwordArea.insertAdjacentHTML(
        'beforeend',
        `
      <button class="password">
        ${names[i]}
      </button>
      `
      );
      console.log(names[i]);
    }
  }
};
