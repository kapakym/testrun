const { ipcRender } = require('electron')
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