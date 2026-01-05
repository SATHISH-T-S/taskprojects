import { useState } from "react"

const Store=({value})=>{
    const [val,setVal]=useState(0)
    
    const fun1=()=>{
        var a=value;
        // var b=val
        // console.log(a)
        setVal(a)
    }

    return(<>
<h1>TO SEE CREATE VALUE OF ANOTHER COMPONENT</h1>
<h2>{value}</h2>
<h2>TO PERFORM OPERATION </h2>
<h3>{val}</h3>
<button onClick={fun1}>CLICK</button>

    
    </>)
}
export default Store