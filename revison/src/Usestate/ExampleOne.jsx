import { useState } from "react"

const ExampleOne=()=>{
const [val,setVal]=useState()
const [vall,setVall]=useState()
const fun=(e)=>{

e.preventDefault()
// var a=e.target.value
// console.log(e.target.value)  
// setVal(a)
setVal(e.target.value)
// setVall(val)
// console.log(e.target.value)
// console.log(val)
// alert(val)
// console.log(val)
}
console.log(val)
// const fun2=(e)=>{
//     e.preventDefault()
//     console.log(val)
// }
// console.log(val)
// const fun2=(e)=>{
// e.preventDefault()
//     console.log(vall)
// }
return(<>
<div>
    <form > 
        <input type="text" onChange={fun} placeholder="ENTER THE VALUE"/>
        <input type="submit"></input>
        {/* <button onClick={fun}>CLICK TO SEE VALUE</button> */}
        {/* <button onClick={fun2}>click to see result</button> */}
        {/* <button onClick={fun2}>CLICK TOO SEE VALUE IN CONSOLE</button> */}
    </form>
    {val}
    </div>    
    
    
    </>)
}
export default ExampleOne