import { app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import path from 'path';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    resizable: true,
    icon: path.join(__dirname, 'path/to/your/icon.png'),
  });

  mainWindow.maximize();

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    // mainWindow.webContents.openDevTools();
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools();
    });
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
