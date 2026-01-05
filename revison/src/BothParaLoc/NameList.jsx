import { useState } from "react"
import { Link } from "react-router-dom"
const NameList=()=>{
const [val,setVal]=useState([
    {id:1,name:"SAT"},
    {id:2,name:"HI"},
    {id:3,name:"SH"}
])

return(<>
<div id="div1">
   {val.map((e)=>(
 <div id="div2" key={e.id}>
        <h1>{e.id}.{e.name}</h1>
        {/* <Link to={`product/${e.id}`} ><button>CLICK</button></Link> */}
        <Link to="/product" state={{value:e}}>CLICK</Link>
    </div>

   ))}
</div>
    
    </>)
}
export default NameList