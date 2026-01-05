import { useState } from "react"
import Done from "./Done";
import { useNavigate } from "react-router-dom";

const Login=()=>{
const [val,setVal]=useState(0)

    const fun1=()=>{
console.log(val);
    }
    const nav=useNavigate()
    const fun2=(e)=>{
        e.preventDefault()
nav("/done")
    }
    const fun3=(e)=>{
        var a=e.target.value;

        alert(a)
    }
    return(<>
<div id="div3">
<form onSubmit={fun2}>
    <input  type="text" name="val" id="i1" placeholder="name"/>
    <input type="text"  name="val2" id="i2" onChange={fun3} placeholder="value"/>
    <input type="submit"></input>
</form>
<button onClick={fun1}>CLICK TO SEE VALUE IN CONSOLE</button>
    </div>
    </>)
}

export default Login