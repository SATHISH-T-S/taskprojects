import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Filethree=()=>{
    // const [val,setVal]=useState([
    //     {id:1,name:"SATHISH"},
    //     {id:2,name:"TS"},
    //     {id:3,name:"JANANI"}
    // ])
    // const {id}=useParams()
    // const data=val.find((e)=>e.id===Number(id))
    const loc=useLocation()
    const data=loc.state.value;

    return(<>
<h1>{data.id}.{data.name}</h1>
    </>)
}
export default Filethree;