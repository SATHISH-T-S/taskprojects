const Appti_Banner=({values})=>{
console.log(values)
    return(<>
    <div style={{backgroundColor:"red",marginTop:"10px",display:"flex"}}>
        <h1>ODD ONE OUT</h1>
        {values.map((e,i)=>(
        <div style={{backgroundColor:"aqua",width:"550px",height:"250px",border:"1px solid black",marginLeft:"20px;"}} key={i}>
            <h1>{e.Q1}</h1>
            <h4>A.{e.A}</h4>
            <h4>B.{e.B}</h4>
            <h4>C.{e.C}</h4>
            <h4>D.{e.D}</h4>
</div>

            ))}
            
            
        
    </div>
    
    </>)
}
export default Appti_Banner