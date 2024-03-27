import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="custom-theme text-foreground bg-background">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
)
