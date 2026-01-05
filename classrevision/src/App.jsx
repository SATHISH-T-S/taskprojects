import { useRef, useState } from "react"

const App=()=>{
    console.log("OPEN CALL")
const [val,setVal]=useState("SATHISH")
const  vall=useRef("")
// const  fun=()=>{
//     console.log("STATE CALL")
//     setVal("SATHISH TS")
// }
const fun1=()=>{
    console.log("REF CALL")
console.log("STATE CALL")    
    setVal("SATHISH TS")
    vall.current.style.color="red";
}

    return(<>


    <div>
        {/* <h1 >SATHISH</h1> */}
        {/* <button onClick={fun1} >CLICK TO REF UPDATE</button> */}
        <h1 ref={vall}>{val}</h1>
        <button onClick={fun1}>CLICK TO STATE UPDATE</button>
    </div>
    </>)
}
export default App