const {app, BrowserWindow, ipcMain, ipcRenderer, electron, Menu} = require('electron')
const path = require('path')
// var routie = require("./js/routie.min")
$ = require('jquery')


// const appMenu = require('./js/appMenu')

let secondWindow;
let win;


function createWindow() {
     win = new BrowserWindow({
        width:800,
        height:600,
        frame: false,
        webPreferences: {
            nodeIntegration:true
        }
    })

    win.loadFile(path.join(__dirname+'/html','index.html'))
    win.webContents.openDevTools();
    win.on('closed', () => {
        win=null;
    })
}

    // const template = appMenu(app, appWindow)
    // const menu = Menu.buildFromTemplate(template)
    // Menu.setApplicationMenu(menu)
    

app.on('ready', () => {
    
    createWindow();
})



ipcMain.on("open", (e, files) => {
    console.log("Open window ", files);
    secondWindow = new BrowserWindow({
        parent:win,
        height:200,
        width:200,
        frame: false,
        webPreferences: {
            nodeIntegration:true
        }
    })
    console.log("Open window");
    secondWindow.loadFile(path.join(__dirname+'/html','index.html'));
    secondWindow.show();
    secondWindow.on("close", (e) => {
        secondWindow.destroy();
    })
})
