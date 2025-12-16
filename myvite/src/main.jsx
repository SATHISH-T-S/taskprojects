import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SingleComp from './SingleComp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SingleComp/> 
  </StrictMode>,
)
