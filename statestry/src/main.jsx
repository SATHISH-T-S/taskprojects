import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import State_Render from './State_Render'
import { BrowserRouter } from 'react-router-dom'

// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <App /> */}
    <BrowserRouter>
    <State_Render/>
    </BrowserRouter>
  </StrictMode>,
)
