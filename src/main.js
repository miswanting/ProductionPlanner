const { app } = require('electron')
const WindowManager = require('./managers/window')
function start() {
    let wm = new WindowManager()
    wm.start()
}
app.whenReady().then(start)
