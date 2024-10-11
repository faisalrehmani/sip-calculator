import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ResultProvider } from './providers/ResultContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ResultProvider>
   <App />
   </ResultProvider>
  </React.StrictMode>,
)
