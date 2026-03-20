import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)

onCLS(console.log)
onFCP(console.log)
onINP(console.log)
onLCP(console.log)
onTTFB(console.log)
