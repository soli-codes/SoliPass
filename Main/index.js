const { app, BrowserWindow } = require('electron');
const fs = require('fs');

process.env.NODE_ENV = 'development';

const isDev = process.env.NODE_ENV !== 'production' ? true : false;
let pwPath = `${app.getPath('userData')}/pw.json`;
let pw = false;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    title: 'SoliPass',
    width: 900,
    height: 600,
    resizable: isDev,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL(`file://${__dirname}/App/index.html`);
}
app.on('ready', () => {
  if (fs.existsSync(pwPath)) {
    // If it does exist, turn the pw variable into a javascript object
    let rawdata = fs.readFileSync(pwPath);
    pw = JSON.parse(rawdata);
  } else {
    // If it does not exist, set pw to false
    if (pw === false) {
      let baseObject = {
        passwords: {},
      };
      let baseData = JSON.stringify(baseObject, null, 2);
      fs.writeFileSync(pwPath, baseData);
    }
  }
});
app.on('ready', createWindow);
