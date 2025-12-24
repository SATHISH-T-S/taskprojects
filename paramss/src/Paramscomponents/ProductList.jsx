import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import Product from "./Product"

const ProductList=()=>{
    const [List,setList]=useState([
        {id:1,name:"SATHISH"},
        {id:2,name:"TS"},
        {id:3,name:"REACT"}
    
    ])
// const {id}=useParams()
// const prouduct=List.find((e)=>e.id===Number(id))

const  loc=useLocation()
const  produ=loc.state.products;

return(<>
    <h1>{produ.id}</h1>
    <h2>{produ.name}</h2>
    
    </>)
}
export default ProductList