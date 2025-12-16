import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Resume from './Resume'
import Movie from './Movie'
// import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Movie/>
    {/* <Resume/> */}
  </StrictMode>,
)
