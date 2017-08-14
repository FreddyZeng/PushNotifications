const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// global
let win

function createWindow () {
  const iconUrl = url.format({
    pathname: path.join(__dirname, 'Icon/Icon.icns'),
    protocol: 'file:',
    slashes: true
  })

  win = new BrowserWindow({
    width: 800, 
    height: 600,
    icon: iconUrl
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})