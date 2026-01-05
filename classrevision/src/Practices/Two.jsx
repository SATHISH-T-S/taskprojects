import { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import Three from "./Three";

const Two=()=>{
    const [val,setVal]=useState({name:"",age:""})
    const  nav=useNavigate()

    const fun=(e)=>{
        e.preventDefault()
        setVal({...val,[e.target.name]:e.target.value})
}
const fun1=(e)=>{
e.preventDefault()
console.log(val)
}

const fun2=(e)=>{
e.preventDefault()
nav('/three',{state:val})
}
return(<>
  <header>  <form onSubmit={fun1}>
        <label>NAME: </label><input type="text" placeholder="ENTER THE NAME" name="name" onChange={fun}/>
        <br/>
        <br/>
        <label>AGE: </label><input type="text" placeholder="ENTER THE NAME" name="age" onChange={fun}/>
        <br/>
        <br/>
        <input type="submit" value="SUBMIT"/>
    </form>
    <br/>

 <button onClick={fun2}>CLICK TO SEND STATE VALUE TO ANOTHER FOR PROFILE</button>

</header>
<main>

{/* <Three/> */}
</main>
    </>)
}
export default Two;