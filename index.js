const {app, BrowserWindow} = require("electron");

app.on("ready", () => {
    const browserWindow = new BrowserWindow({
        autoHideMenuBar: true,
        width: 800,
        height: 600,
        icon : "build/icons/icon.png"
    });
    browserWindow.maximize();
    browserWindow.loadURL("https://notion.so");
})