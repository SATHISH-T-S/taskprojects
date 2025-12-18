const Comm_Banner=({value_1})=>{
    return(<>
    
    <div style={{backgroundColor:"green",display:"flex",marginLeft:"20px",height:"200px",marginTop:"20px"}}>
<h1 style={{color:"red",marginLeft:"10px",marginTop:"50px"}}>COMMUNICATION TOPICS</h1>
{value_1.map((e,i)=>(
<div style={{width:"500px",marginLeft:"50px",border:"1px solid black",height:"100px",marginTop:"20px"}} key={i}>

    <h1>{i+1}.{e}</h1>
</div>

))}




    </div>
    
    
    </>)
}
export default Comm_Banner;