import { useState } from "react";
import {Link} from 'react-router-dom'
const Filetwo=()=>{
    const [val,setVal]=useState([
        {id:1,name:"SATHISH"},
        {id:2,name:"TS"},
        {id:3,name:"JANANI"}
    ])   
    return(<>
    <div id="div1">
        {val.map((e)=>(

<div id="div2" key={e.id}>
            <h4>{e.id} . {e.name}</h4>
        
        {/* <Link to={`/details/${e.id}`}><button>CLICK</button></Link> */}
        <Link to="/details" state={{value:e}}><button>CLICK</button></Link>
        </div>

        ))}
        
    </div>





    </>)
}
export default Filetwo;