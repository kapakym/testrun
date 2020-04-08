// var routie = require("./routie")
const { ipcMain, ipcRenderer, ipc } = require('electron')
const fs = require('fs')
const path = require('path')
var child = require('child_process').execFile;
var routie = require("../js/routie")
$ = require('jquery')


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
    loadContent()
    console.log("send open");
    files = ['1','2', '3']
    ipcRenderer.send('open', files);
})

routie({
    '': function() {

      //alert('root');
    },
    'test1': function() {
         let fileContent; //= fs.readFileSync(path.join(__dirname,"one.html"), "utf8");
     
        $("#contentmain").load(path.join(__dirname,"one.html"))
    //  alert('popup 1 alert');
    },
    'test2': function() {
      alert('popup 2 alert');
    }
  });

  function loadContent (link) {
      let fileContent = fs.readFileSync(path.join(__dirname,"one.html"));
    $("#contentmain").innerHTML = fileContent
      if (link==="two") {
         
      }
  }