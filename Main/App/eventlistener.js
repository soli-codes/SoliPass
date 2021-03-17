// Listens to click on generate button and calls writePasswordToFile function when clicked
document
  .querySelector('#generate')
  .addEventListener('click', writePasswordToFile);

window.addEventListener('DOMContentLoaded', () => {
  writePasswordToScreen();
});
