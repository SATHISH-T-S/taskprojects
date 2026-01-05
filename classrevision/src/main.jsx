import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import One from './Practices/One.jsx'
import Two from './Practices/Two.jsx'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Three from './Practices/Three.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <One/> */}
    <BrowserRouter>
<Two/>
<Three/>

{/* <Router>
  <Route path="/three" element={<Three/>}/>
</Router>
 */}
</BrowserRouter>

  </StrictMode>,
)
