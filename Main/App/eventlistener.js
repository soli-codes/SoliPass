const { clipboard } = require('electron');
document
  .querySelector('#generate')
  .addEventListener('click', writePasswordToFile);

const buttonEventListener = () => {
  document.querySelectorAll('.password').forEach((e) =>
    e.addEventListener('click', (clickTarget) => {
      let key = clickTarget.target.innerText;
      clipboard.writeText(pw['passwords'][key]);
    })
  );
};

window.addEventListener('DOMContentLoaded', () => {
  writePasswordToScreen();
  buttonEventListener();
});
