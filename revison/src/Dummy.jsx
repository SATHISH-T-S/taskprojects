import { Routes , Route } from "react-router-dom"
import ProductDetails from "./Parameter/ProductDetails"

const Dummy=()=>{
    return(<>
    <header></header>
    <main>
<Routes>
    <Route path="product/:id" element={<ProductDetails/>}/>
</Routes>


    </main>
    </>)
}
export default Dummy