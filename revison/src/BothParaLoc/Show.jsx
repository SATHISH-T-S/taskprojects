import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Show=()=>{
    // const [val,setVal]=useState([
    //    {id:1,name:"SAT"},
    // {id:2,name:"HI"},
    // {id:3,name:"SH"}
    // ])
    // const {id}=useParams()
    // const data=val.find((e)=>e.id===Number(id))
const loc=useLocation()
const data=loc.state.value;

    
    return(<>
<h1>{data.name}</h1>



    </>)
}
export default Show;