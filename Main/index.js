const { app, BrowserWindow } = require('electron');
const fs = require('fs');

process.env.NODE_ENV = 'development';

const isDev = process.env.NODE_ENV !== 'production' ? true : false;
let pwPath = `${app.getPath('userData')}/pw.json`;

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
  mainWindow.setMenuBarVisibility(true);
  mainWindow.loadURL(`file://${__dirname}/App/index.html`);
}
app.on('ready', () => {
  if (!fs.existsSync(pwPath)) {
    let baseObject = {
      passwords: {},
    };
    let baseData = JSON.stringify(baseObject, null, 2);
    fs.writeFileSync(pwPath, baseData);
  }
});
app.on('ready', createWindow);
