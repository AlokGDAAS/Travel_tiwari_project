import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TourProvider } from './context/TourContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <TourProvider>
       <App />
    </TourProvider>        
    </BrowserRouter>
  </StrictMode>,
)
