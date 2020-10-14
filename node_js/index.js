const bs = require('electron').BrowserWindow;
const app = require('electron').app;
var win;

const createWindow = function () {
    win = new bs({
        width: 1024,
        height: 600,
        icon: "icon.png",
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
            devTools: false,
        },

    })
    win.removeMenu(); // Linux & windows only
    win.setTitle(app.getName());
    win.loadFile('index.html');
    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});