import { useState } from "react";
import {Routes , Route} from 'react-router-dom'
;import Usestate_Render from "./Usestate_Render";
import Primitiverenders from "./Primitiverenders";

const State_Render=()=>{
    return(<>
    <h1>PRIMITIVE DATATYPES AND NON_PRIMITIVE TYPES USING ((STATE))</h1>
<h2>USING DATATYPE WE R GONNA RENDER THE STATE VALUE OF EACH DATATYPE</h2>
    <br/>
    <hr></hr>
    <Nnumber/>
<br/>
    <hr></hr>
    <Sstring/>
    <br/>
    <hr></hr>
<Bbolean/>
<br/>
    <hr></hr>
    <Nnull/>
    <br/>
    <hr></hr>
<Uundefined/>
        <br/>
    <hr></hr>
<Aaray/>
            <br/>
    <hr></hr>
<Oobject/>
<br/>
    <hr></hr>

    <div>
<Usestate_Render/>

    </div>
    <footer>
<Routes>

    <Route path="/Usestate" element={<Primitiverenders/>}/>
</Routes>



    </footer>


    </>)
}
export default State_Render;

const Nnumber=()=>{
    const [num,SetNum]=useState(1)
    return(<>
    <h1>NUMBER VALUE USING STATE </h1>
    <h2>INITIAL VALUE IS ="{num}"</h2>
    
    </>)
}

const Sstring=()=>{
    const [nam,SetNam]=useState("SATHISH")
    return(<>
    <h1>STRING DATA USING STATE</h1>
    <h2>INITIAL DATA IS ="{nam}"</h2>
    </>)
}

const Bbolean=()=>{
    const [bol,SetBol]=useState(0)
    return(<>
    <h1>BOOLEAN DATA USING STATE</h1>
{bol?<h1>"DATA IS "{bol}"so TRUE"</h1>:<h1>"DATA IS "{bol}"SO FALSE"</h1>}
</>)
}

const Nnull=()=>{
    const [mul,SetMul]=useState(null)
    console.log(mul);
    return(<>
    <h1>NULL USING STATE</h1>
    <h2>INITIAL DATA IN NULL IS ="{mul}null"</h2>
    
    </>)
}

const Uundefined=()=>{
const [undef,SetUndef]=useState()
return(<>
    <h1>UNDEFINED IN STATE</h1>
    <h2>INITIAL VALUE IS "{undef}undefined"</h2>
    
    </>)
}
const Aaray=()=>{
    const [Aar,SetAar]=useState(['S','A','T','H','I','S','H'])
    return(<>
    <h1>ARRAY USING STATE</h1>
    <h2>ARRAY VALUES [{Aar[3]}]</h2>
    
    
    </>)
}

const Oobject=()=>{
    const [Oob,SetOob]=useState({name:"SATHISH"})
    return(<>
    <h1>OBJECT USING STATE</h1>
    <h2>OBJECT DATA OF INITIAL DATA ={Oob.name}</h2>
    
    
    </>)
}

