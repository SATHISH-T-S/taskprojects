import Tech_Banner from "./Technical/Tech_Banner.jsx"
import { useState } from "react"
const Techinical=()=>{
const [Tech]=useState(
    [{ID:1001,NAME:"SATHISH",COURSE:"MERN"},
        {ID:1002,NAME:"SANJAY",COURSE:"JAVA"},
        {ID:1003,NAME:"BALA",COURSE:"PYTHON"}
    ]
)
    return(<>
    <div id="div1">

        <Tech_Banner value={Tech}/>



    </div>
    </>)
}
export default Techinical