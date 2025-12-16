const Home=()=>{
    const home=[{id:1,name:"ROOM"},
        {id:2,name:"CONTACT"},
        {id:3,name:"LOCATION"}
    ]
    return (<>
    <div class="div2">
<h1 class="dum">RENTAL  ROOMS</h1> 
{home.map((e,i)=>(
<div class="div3" key={e.id}>
    <a href="a.txt" class="a1">{e.name}</a></div>

))}
<div class="dd">
PAIDLIST

</div>

</div>
    
    
    
    </>)
}
export default Home;