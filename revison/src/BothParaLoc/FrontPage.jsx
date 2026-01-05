import { Route, Routes } from "react-router-dom"
import NameList from "./NameList"
import Show from "./Show"

const FrontPage=()=>{
    
    return(<>
    <header><NameList/></header>
    <main><Routes>
{/* <Route path="product/:id" element={<Show/>}/> */}
<Route path="/product" element={<Show/>}/>


    </Routes>
</main>

    
    </>)
}
export default FrontPage