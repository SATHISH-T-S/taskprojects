import { useState } from "react"

const App=()=>{
    const [val,setVal]=useState(0)
    const fun=()=>{
        if(val==0)
            setVal(!val)
        
        else
            setVal(!val)
    }
   
    // const  fun=(val)=>{
    //     console.log(val)
    //     if(val===0){
    //         setVal(1)
    //         console.log(val)
    //     }
    //     else{
    //         setVal(0)
    //         console.log(val)
    //     }
        

    // }
    
    return(<>
    {/* <button onClick={(val)=>{if(val==0){console.log(val);setVal(1);console.log(val)}
else{
    setVal(0)
    console.log(val)
}
}}>{val?"ONE":"ZERO"}</button> */}
<button  className={val?"div1":"div2"} onClick={fun}>{val?"LIGHT":"DARK"}</button>

    {/* <div id="div1"></div> */}
    <h1>{val?"SATHISH":"TS"}</h1>

    <button>{val?"NAME":"INITIAL"}</button>
    <br/>

    {val}
    </>)
}
export default App