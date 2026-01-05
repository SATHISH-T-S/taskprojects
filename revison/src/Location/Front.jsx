import { useLocation } from "react-router-dom";

const Front=()=>{
    // const [val,setVal]=useState([
    //     {id:1,name:"SATHIHS"},
    //     {id:2,name:"SANJAY"},
    //     {id:3,name:"BALA"}
    // ])

const loc=useLocation()
const data=loc.state.value;
console.log(data);

    return(<>
    
<h1>{data.name}</h1>

    </>)
}
export default Front;