import { useState } from "react"
import { Routes, useNavigate ,Route} from "react-router-dom"
import Two from "./Two"
const One=()=>{
    const [val,setVal]=useState(1)
const nav=useNavigate()
    const fun1=()=>{
        // var a=1;
        // var b=1;
        // setVal(a+b)

nav('/two',{state:{val}})


    }
    return(<>
    <h1>FUNCTION ONE VALUE</h1>
    <Routes>
        <Route path='/two' element={<Two/>}/>
    </Routes>
    <h1>"FUN 1" {val}</h1>
<button onClick={fun1}>CLICK TO MOVE ANOTHER FUNCTION</button>



    </>)
}
export default One