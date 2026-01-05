import { useState } from "react";
import Store from "./Store";

const Create=()=>{
    
    const  [val,setVal]=useState(0)
    const fun1=()=>{
var x=1
        var a=val;
var c=x+a;
setVal(c)

    }

    return(<>
    <h1>TO SEE VALUE OF STATE</h1>
    <h2>{val}</h2>
    <button onClick={fun1}>CLICK</button>
    <Store value={val}/>
    </>)
}
export default Create;