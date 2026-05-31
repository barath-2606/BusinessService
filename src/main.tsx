import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EryxionWebsite from './components/ErixiyonWebsite'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EryxionWebsite />
  </StrictMode>,
)
