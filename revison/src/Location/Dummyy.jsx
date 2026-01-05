import { Routes , Route } from "react-router-dom"
import Front from "./Front"

const Dummyy=()=>{
    
    return(<>

<Routes>
    <Route path="/home" element={<Front/>}/>
</Routes>

    </>)
}
export default Dummyy