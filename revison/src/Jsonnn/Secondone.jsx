import { useState } from "react";

const Secondone=()=>{
    // const [val,setVal]=useState([
    //     {id:1,name:"SATHISH",age:22},
    //     {id:2,name:"BALA",age:23},
    //     {id:3,name:"SANJAY",age:24}

    // ])
    const [val,setVal]=useState([])
    const fun1=async()=>{
const Getdata=await fetch("/data.json")
const Convertdata=await Getdata.json()
console.log(Convertdata.Data);
setVal(Convertdata.Data)
}
    
    return(<>
    <div id="div1">
        {val.map((e)=>(
 <div id="div2" key={e.id}>

<h4>{e.id}.{e.name}</h4>
<h4>{e.age}</h4>

        </div>

        ))}
        <button onClick={fun1}>CLICK TO SEE JSON </button>
       
    </div>

    </>)
}
export default Secondone;