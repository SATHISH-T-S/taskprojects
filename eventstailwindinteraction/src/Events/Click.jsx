const Click=()=>{
const fun1=()=>{
let a=document.getElementById("h1");
let b=document.getElementById("p1");
var c=document.getElementById("btn1");
a.innerText="Button onClick";

a.style.backgroundColor="blue";
b.style.display="none";
c.innerText="OnClICk";
alert("CHANGE ON ONCLICK ")
}
    return(<>
    <h1>onClick on BUTTON</h1>
    <div id="h2"></div>
    <p id="p1">dummy</p>
    <h1  id="h1" style={{textAlign:"center"}}>Button OnClick</h1>
    <button id="btn1" onClick={fun1}>ONCLICK</button>
    
    </>)
}
export default Click