const { app, BrowserWindow } = require('electron');

process.env.NODE_ENV = 'development';

const isDev = process.env.NODE_ENV !== 'production' ? true : false;

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

app.on('ready', createWindow);
