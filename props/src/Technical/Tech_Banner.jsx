const Tech_Banner=({value})=>{
    return(<>
    <div class="div2">
        <h1 style={{color:"red"}}>TECHNICAL GUYS</h1>
        {value.map((e,i)=>(
<div class="div3" key={e.ID}>
            <h1>{e.ID}</h1>
            <h2>{e.NAME}</h2>
            <h3>{e.COURSE}</h3>
        </div>


        ))}
        
    </div>
    

    </>)
}
export default Tech_Banner