import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Product from './Parameter/Product'
import Dummy from './Dummy'
import Home from './Location/Home'
import Dummyy from './Location/Dummyy'
import FrontPage from './BothParaLoc/FrontPage'
import Fileone from './SecondTime/Fileone'
import Secondone from './Jsonnn/Secondone'
import ExampleOne from './Usestate/ExampleOne'
// import One from './Navigation/One'
// import Create from './Statess/Create.jsx'
// import Store from './Statess/Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    {/* <Create/> */}
    {/* <Store/> */}
    {/* <One/> */}
{/* <Product/> */}
{/* <Dummy/> */}
{/* <Home/> */}
{/* <Dummy/> */}
{/* <Dummyy/> */}
{/* <FrontPage/> */}
{/* <Fileone/> */}
{/* <Secondone/> */}
<ExampleOne/>

    </BrowserRouter>
  </StrictMode>,
)
