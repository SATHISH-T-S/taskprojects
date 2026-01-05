import { useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetails=()=>{

    const [val,setVal]=useState([
        {id:1,name:"SATHISH",age:23},
        {id:2,name:"BALA",age:22},
        {id:3,name:"SANJAY",age:22}
    ])
const {id}=useParams()
const data=val.find((e)=>e.id===Number(id))

console.log(data)
return(<>

                <h1>ID:{data.id}</h1>
            <h1>NAME:{data.name}</h1>
            <h1>AGE:{data.age}</h1>
    </>)
}
export default ProductDetails