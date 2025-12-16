const Submit=()=>{
    // var a=1;
    // count =0
    const fun2=(e)=>{
        e.preventDefault();
// count=0; 
// count ++;
// alert(count);

// var count=document.getElementById("i1").value;
// count++;
// alert(count)

// a=a+1;
// var b=document.getElementById("i1").value;
// var b=Number(b)+1;

// var b=e.target.value;
// console.log(b);
// alert(b)

// alert(e)


let a=document.getElementById("i1").value;
let b=document.getElementById("i2").value;
let sum=Number(a)+Number(b);
document.getElementById("a").innerText=sum;
// alert("ANS"+" "+sum);
    }
    return(<>
    <h1>OnSubmit in FORM </h1>

    <form onSubmit={fun2}>
        <input type="text" id="i1" placeholder="ENTER THE FIRST VALUE"/>
        <br/>

        <input type="text" id="i2" placeholder="ENTER THE SECOND VALUE "/><br/>
        <input type="submit" id="t2" placeholder="SUBMIT"></input>
        <h1 id="a">ANS</h1>

    </form>
    
    
    </>)
}
export default Submit;