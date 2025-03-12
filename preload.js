const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    startReporting: (url) => ipcRenderer.send('start-reporting', url),
    onUpdateOutput: (callback) => ipcRenderer.on('update-output', callback)
});
