import { useLocation } from "react-router-dom";

const Two=()=>{
    // console.log(val)
    const loc=useLocation()
    const data=loc.state 
    // console.log("value"+data)
    const copy={...data}
    console.log("FIRST FUNCTION VALUE IS "+copy.val)

    // console.log("sat")
    return(<>
    
    <h2>SECOND FUNCTION  VALUE</h2>
    <h1>"FUN2 "{copy.val}</h1>


    </>)
}
export default Two;