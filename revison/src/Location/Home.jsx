import { useState } from "react";
import { Link } from "react-router-dom";

const Home=()=>{
const [val,setVal]=useState([
    {id:1,name:"SATHIHS"},
    {id:2,name:"SANJAY"},
    {id:3,name:"BALA"}
])
    
    return(<>

<div id="div1">

{val.map((e)=>(
<div id="div2" key={e.id}>
    <h1>{e.id}.{e.name}</h1>
    <Link to="/home" state={{value:e}}>GO</Link>
</div>
))}
</div>

    </>)
}
export default Home;