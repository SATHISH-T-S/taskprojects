import { useState } from "react"
import { Link } from "react-router-dom"

const Product=()=>{
    
    const [val,setVal]=useState([
        {id:1,name:"SATHISH",age:23},
        {id:2,name:"BALA",age:22},
        {id:3,name:"SANJAY",age:22}

    ])
    
    return(<>
    <div style={{backgroundColor:"aqua",width:"1200px",height:"250px",display:"flex"}}>
        
        {val.map((e)=>(
<div style={{border:"1px solid black",width:"300px",padding:"2px",marginLeft:"80px"}} key={e.id}>
                <h1>ID:{e.id}</h1>
            <h1>NAME:{e.name}</h1>
            <h1>AGE:{e.age}</h1>
            <Link to={`product/${e.id}`}><button>READ MORE</button></Link>
        </div>
        ))}
    </div>

    </>)

}
export default Product