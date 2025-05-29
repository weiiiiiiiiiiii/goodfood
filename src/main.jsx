import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async' // 加入這行

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* 包起來 */}
      <App />
    </HelmetProvider>
  </StrictMode>,
)
