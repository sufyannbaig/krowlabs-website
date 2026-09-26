import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initAnalytics } from '@/lib/analytics'

initAnalytics()

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Built pages ship prerendered HTML for their route (see seoPages in vite.config.ts). Take it over
// when it belongs to the current URL; otherwise (dev server, 404 fallback, a host serving another
// page's file) render from scratch.
const path = window.location.pathname.replace(/\/+$/, '') || '/'
if (container.dataset.prerendered === path) {
  hydrateRoot(container, app)
} else {
  container.textContent = ''
  createRoot(container).render(app)
}
