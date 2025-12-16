const Change=()=>{

const fun1=(e)=>{
    // e.preventDefault();

    // var a=e.target.value;
    // var b=e.target.value;
    // var c=Number(a)+Number(b);



    // var a=document.getElementById("t1");
    var a=1;
    var b=e.target.value;
    var c=a+Number(b);

    alert(c)
}


    return(<>
    <h1>
        onChange in Input 
    </h1>
    <form >
{/* <input type="text" onChange={fun1} id="t1" placeholder="ENTER THE VALUE"/>
<input type="text" id="t2" placeholder="ENTER THE VALUE"/>
<input type="submit" id="t3" onChange={fun1}   placeholder="CHANGE"/> */}

<input type="text" id="t1" placeholder="ENTER THE VALUE" onChange={fun1}/>
{/* <input type="submit"/> */}


    </form>
    
    
    </>)
}
export default Change;