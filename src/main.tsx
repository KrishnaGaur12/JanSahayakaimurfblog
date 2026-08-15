import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactLenis } from 'lenis/react'
import './index.css'
import App from './App.tsx'

const lenisOptions = { lerp: 0.05, duration: 1.5, smoothWheel: true };

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis root options={lenisOptions}>
      <App />
    </ReactLenis>
  </StrictMode>,
)
