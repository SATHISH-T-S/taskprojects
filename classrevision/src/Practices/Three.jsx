import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
const Three=()=>{
    const [val,setVal]=useState({})
    
    const loc=useLocation()
// console.log(loc.state)
    // const data=loc.state;
    // console.log("THREE",data)
// useEffect(()=>{
//     setVal(loc.state);

// })
const fun=()=>{
    setVal(loc.state)
}

return(<>
<br/>
<br/>
<h1>PROFILE</h1>
<div style={{border:"1px solid black",width:"200px",height:"100px"}}>
  NAME:  {val.name}
    <br/>

  AGE:  {val.age}
  <br/>
  </div>
    <button onClick={fun}>CLICK</button>
    </>)
}
export default Three