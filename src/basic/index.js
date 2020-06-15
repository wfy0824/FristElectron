const{app,BrowserWindow} = require('electron');

function createWindow(){
    win = new BrowserWindow({
        width:800,
        height:600
    });
    win.loadFile('index.html');
    win.on('closed',()=>{
        console.log('closed');
        win = null;
    })
}
app.on('ready',createWindow);
app.on('window-all-closed',()=>{ //关闭事件
    console.log('window-all-closed');
    if(process.platform != 'darwin'){ //不是苹果系统,苹果系统不需要
        app.quit();
    }
})
app.on('activate',()=>{ //激活事件
    console.log('activate');
    if(win == null){//用于苹果系统,在window系统不触发
        craeteWindow();
    }
})