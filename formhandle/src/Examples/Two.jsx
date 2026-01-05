import { useState } from "react"

const Two=()=>{
const [val,setVal]=useState({name:"",age:""})
const fun=(e)=>{
e.preventDefault()
setVal({...val,[e.target.name]:e.target.value})
console.log(val)
}

const fun1=(e)=>{
e.preventDefault()
console.log(val)

}
    return(<>
<h1>BASIC FORM </h1>
<form onSubmit={fun1}>
<label>NAME: </label>
<input type="text"  name="name" placeholder="ENTER THE NAME" onChange={fun} />
<br/>
<br/>
<label>AGE: </label>
<input type="text" name="age" placeholder="ENTER THE AGE" onChange={fun} />
<br/>
<br/>
<input type="submit" value="SUBMIT"/>   
</form>

<h1>VALUES</h1>
<h2>NAME: {val.name}</h2>
<h2>AGE: {val.age}</h2>
    </>)
}
export default Two
