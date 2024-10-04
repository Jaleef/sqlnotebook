// const { app, BrowserWindow } = require('electron');
import { app, BrowserWindow } from 'electron';

// 创建一个窗口
const createWindow = () => {
    // 一个window对象
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // 配置渲染进程的环境选项
        webPreferences: {
            // 预加载脚本的路径
            preload: path.join(__dirname, 'preload.js'),
        },
    });
    
    // 加载index.html
    // win.loadFile('./electron/index.html');

    win.loadURL('http://localhost:3001');
}

// 监听app的ready事件
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
})

// 监听app的window-all-closed事件
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})