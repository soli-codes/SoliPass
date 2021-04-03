const fs = require('fs');
const { app } = require('electron').remote;

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
