const { ipcMain, ipcRenderer, ipc } = require('electron')
var child = require('child_process').execFile;

console.log(document.getElementById("ruprog"))
document.getElementById("ruprog").addEventListener('click', ()=>{
    console.log('Start running')
    child("APCJ.exe", ['default.in'], (err, data) => {
        if (err) {
            console.log(err);
            console.error(err);
            return
        }
        console.log(data.toString())
    })
})

document.getElementById("btn1").addEventListener("click", () => {
    console.log("send open");
    files = ['1','2', '3']
    ipcRenderer.send('open', files);
})