import { useState } from "react"

const App=()=>{
  const [val,setVal]=useState(1)
  const [val1,setVal1]=useState("")

  const fun=()=>{
    localStorage.setItem("VALUE", val)
  }
  const fun1=()=>{
    let a=localStorage.getItem("VALUE")
    // alert(a)
    let b=a+1
setVal(b);
setVal1("SATHISH T S")


  }

  return(<>
<button onClick={fun}>LOCAL</button>
<br/>
<br/>
<h1>VALUE AFTER  {val1}---{val}</h1>
<button onClick={fun1}>GETVALUE</button>

  </>)
}
export default App