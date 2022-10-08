import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'
import { NiceOne } from '../wailsjs/go/main/App'
const container = document.getElementById('root')

const root = createRoot(container!)



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
