const {app, BrowserWindow} = require('electron')
const { path } = require('path')



function createWindow() {
    let win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences: {
            nodeIntegration:true
        }
    })

    win.loadFile('index.html')

    win.on('closed', () => {
        win=null;
    })
}

app.whenReady().then(createWindow)

