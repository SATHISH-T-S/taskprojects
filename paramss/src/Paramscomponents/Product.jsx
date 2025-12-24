import { useState } from "react"
import {Link} from 'react-router-dom'

const Product=()=>{

    const [List,setList]=useState([
        {id:1,name:"SATHISH"},
        {id:2,name:"TS"},
        {id:3,name:"REACT"}
    
    ])


    
    return(<>
    <div>
    {List.map((e)=>(
        <div key={e.id}>
<h1>{e.name}</h1>
{/* <Link to={`Product/${e.id}`}><button>READ MORE</button></Link> */}
<Link to="/product" state={{products:e}}><button>READ MORE</button></Link>
</div>
    ))}
    </div>
    
    
    
    </>)
}
export default Product