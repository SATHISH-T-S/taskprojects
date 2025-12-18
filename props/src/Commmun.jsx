import { useState } from "react"
import Comm_Banner from "./Communication/Comm_Banner.jsx"

const Commmun=()=>{
    const [Comm]=useState(
        ["VERBAL COMMUNICATION", "NON-VERBAL COMMUNICATION","BODY-LANGUAGE"]
    )
    return(<>
    
    <Comm_Banner value_1={Comm}/>
    </>)
}
export default Commmun