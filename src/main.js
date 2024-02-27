const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

function createWindow() {
	const win = new BrowserWindow({
		width: 600,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			preload: path.join(__dirname, 'preload.js'),
			defaultFontFamily: {
				standard: 'Inter',
				serif: 'Inter',
				sansSerif: 'Inter',
				monospace: 'Inter'
			},
			defaultFontSize: 16
		},
		autoHideMenuBar: true
	})

	win.loadFile(path.join(__dirname, 'index.html'))
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})