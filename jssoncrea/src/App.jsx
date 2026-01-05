import { useState } from "react"
import goop from './assets/goop.jpeg'
import swam from './assets/swam.jpeg'
import bigchill from './assets/bigchill.jpeg'
import rath from './assets/rath.jpeg'
import echo from './assets/echo.jpeg'

const App=()=>{
    // const [sample,setSample]=useState([
    //     {id:1,name:"goop"}
    //     ,{id:2,name:"bigchill"}
    //     ,{id:3,name:"echo-echo"}
    
    // ])
    // const [Sample,setSample]=useState([
    //     {id:1,name:"GOOP",strength:"89%",intelligence:"GOOD",AlienTechnology:"JELLY",iag:goop},
    // {id:2,name:"SWAM FIRE",strength:"93%",intelligence:"GOOD",AlienTechnology:"TREE POWER",iag:swam},
    // {id:3,name:"BigChill",strength:"98%",intelligence:"GOOD",AlienTechnology:"ICE",iag:bigchill},
    // {id:4,name:"Rath",strength:"100%",intelligence:"BAD",AlienTechnology:"FAST FIGHT",iag:rath},
    // {id:5,name:"Echo Echo",strength:"79%",intelligence:"AVERAGE",AlienTechnology:"VIBRATION",iag:echo}

    // ])

const [Sample,setSample]=useState([])

const fun1=async()=>{

    const alien=await fetch("/ben.json")
console.log(alien);

const aliens=await alien.json();
console.log(aliens)
setSample(aliens.Ben);

}


    return(<>
    {/* <div>
<div>
    <h1>{sample[0].id} . {sample[0].name}</h1>
    <h1>{sample[1].id} . {sample[1].name}</h1>
    <h1>{sample[2].id} . {sample[2].name}</h1>
</div>

    </div> */}

    <h1>BEN 10  ALIEN FORCE  </h1>
    <br/>   
    <div id="div1">
        
        {Sample.map((e)=>(
<div id="div2" key={e.id}>
    <img src={e.iag} alt="not"/>
<h3>NAME: <span id="sp">{e.name}</span></h3>
<h3>STRENGHT: <span id="sp">{e.strength}</span></h3>
<h3>INTELLIGENCE: <span id="sp">{e.intelligence}</span></h3>
<h3>ALEN TECH: <span id="sp">{e.AlienTechnology}</span></h3>

        </div>

        ))}

    </div>
    <br/>
    <br/>
    <button onClick={fun1}>CLICK ME TO EXPLORE</button>




    
    </>)
}
export default App