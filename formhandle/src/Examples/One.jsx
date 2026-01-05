import { useState } from "react"

const One=()=>{
  const [val,setVal]=useState()
  const [val1,setVal1]=useState()
  const [val2,setVal2]=useState({})
  // const [dum,setDum]=useState({})
  const fun1=(e)=>{
e.preventDefault();
setVal(e.target.value)
  }
  const fun2=(e)=>{
e.preventDefault()
setVal1(e.target.value)
  }
  const fun3=(e)=>{
e.preventDefault()
console.log("run")
// setVal2(val);
// console.log(val2);
let a={name:val,age:val1};
setVal2(a)
console.log(val2)
// setDum(setVal2(a))
// console.log(dum);


  }
  return(<>
<h1 style={{textAlign:"center",color:"red"}}> BASIC FORM </h1>


<form onSubmit={fun3}>
  <label>NAME</label>: <input type="text" placeholder="ENTER THE NAME" onChange={fun1}/>
  <br/>
  <br/>
  <label>AGE</label>:   <input type="text" placeholder="ENTER THE AGE" onChange={fun2}/>
  <br/>
  <br/>
  <input type="submit" value="SUBMIT"/>
</form>
<h1>VALUES:</h1>
<h2>NAME: {val}</h2>
<h2>AGE: {val1}</h2>
<h2>{val2.name} {val2.age}</h2>

  </>)
}
export default One