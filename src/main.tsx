import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <>
    <head>
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    </head>
    <App />
  </>
  // </React.StrictMode>
)
