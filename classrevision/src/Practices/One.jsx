import { useState } from "react"

const One=()=>{
const [val,setVal]=useState({name:"SATHISH",age:"22"})
const [vall,setVall]=useState({})
console.log(val)
const fun=(e)=>{
e.preventDefault()
// console.log(e.target.value)
setVal({...val,[e.target.name]:e.target.value})

}
const fun1=(e)=>{
    e.preventDefault();
// console.log(val)
setVall(val)
}

const fun2=(e)=>{
    e.preventDefault()
    console.log(vall)
}
return(<>
<hr/>

    <form onSubmit={fun1}>
        <label>NAME: </label><input type="text" placeholder="ENTER THE NAME" onChange={fun} name="name" />
        <br/>
        <br/>
        <label>AGE : </label><input type="text" placeholder="ENTER THE AGE" onChange={fun}name="age" />
        <br/>
        <br/>
<input type="submit" value="SUBMIT"/>
<button onClick={fun2}>TO SEE IN CONSOLE</button>
    </form>
    <hr/>

    <h1>INITIAL VALUE </h1>
    <h2>NAME :  {val.name} </h2>
    <h2>AGE : {val.age}</h2>
    <hr/>

    <h1>UPDATED VALUE</h1>
    <h1>NAME:{vall.name}</h1>
    <h1>AGE:{vall.age}</h1>
    </>)
}
export default One