import { Children, useState } from "react"
import { Ccontext } from "./Ccontext";

const Pcontext=({children})=>{
    const[val,setVal]=useState("SATHISH");


return(<>

<Ccontext.Provider value={{val}}>
    {children}
</Ccontext.Provider>

</>)

}
export default Pcontext