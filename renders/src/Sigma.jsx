const Sigma=()=>{
    const val="yellow"
    return (
        <>
        <br/>
        <br/>
        <br/>
        
        <h1>POLICE PRESSED<i id="sig"> {val}</i> SO </h1>
        {val==="red"&&<div class="s1"><h1>STOP !</h1></div>}
        
        {val==="green"&&<div class="s1">GOOO!</div>}
        
        {val==="yellow"&&<div class="s1">READY!</div>}
        </>
    )
}
export default Sigma;