import {Route, Routes } from "react-router-dom"
import Product from "./Paramscomponents/Product"
import ProductList from "./Paramscomponents/ProductList"
// import Outlett from "./Paramscomponents/Outlett"
// import Dummy from "./Paramscomponents/Dummy"

const App=()=>{
    return(<>
    <Product/>
    <Routes>
{/* <Route path="/Product/:id" element={<ProductList/>}/> */}
<Route path="/product" element={<ProductList/>} />
{/* <Route element={<Outlett/>}>
<Route path="/Product" element={<Dummy/>}/>
</Route> */}

    </Routes>
    </>)
}
export default App