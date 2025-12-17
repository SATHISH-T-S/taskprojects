import { useState } from "react";

const Primitiverenders=()=>{
    
    return(<>
    <h1>PRIMITIVE DATATYPES AND NON_PRIMITIVE TYPES USING ((USE STATE))</h1>
<h2>USING DATATYPE WE R GONNA RENDER THE USE STATE VALUE OF EACH DATATYPE</h2>
<br/>
    <hr></hr>
<Nnumber/>
<br/>
    <hr></hr>
<Sstring/>
<br/>
    <hr></hr>
<BBol/>
<br/>
    <hr></hr>
<Aarray/>
<br/>
    <hr></hr>
    <Oobjects/>
    </>)
}
export default Primitiverenders;

const Nnumber=()=>{

    const [One,SetOne]=useState(0)
    const fun1=()=>{

        SetOne(One+1);
    }
    return(<>
    <h1>INITIAL VALUE  IS ="0</h1>
    <h2>UPDATED VALUE IS {One}</h2>
    <button onClick={fun1}>UPDATE VALUE</button>
    
    </>)
}

const Sstring=()=>{
    const [Str,SetStr]=useState("SATHISH");
    const fun2=()=>{

        SetStr("SATHIHS TS");
    }

    return(<>
    <h1>INITIAL STRING IS "SATHISH"</h1>
    <h2>UPDATED STRING IS {Str}</h2>
    <button onClick={fun2}>UPDATED STRING</button>
    
    </>)
}

const BBol=()=>{
    const [Bol,SetBol]=useState(0)
    const fun3=()=>{
        if(Bol==0)
        {
            SetBol("FALSE")
            console.log(Bol);
        }
        else{
            SetBol("TRUE")
            console.log(Bol);
        }
    }
return(<>
<h1>UPDATED VALUE OF BOOLEAN ={Bol}</h1>
<button onClick={fun3}>UPDATED BOOLEAN</button>

</>)
}

const Aarray=()=>{
    const [ary,SetAry]=useState([1,2,3])
    const fun4=()=>{
    
        // SetAry( [...ary],ary[0,1,2]=[0,2,3])
        SetAry(ary[0]=0)
        // SetAry(ary)
        console.log(ary)
    }
    return(<>
    <h1>ARRAY ELEMENTS</h1>
    
    <h1>UPDATED ARRAY ELEMENTS [{ary}]</h1>
    <button onClick={fun4}>ARRAY UPDATE</button>
    
    </>)
}

const Oobjects = () => {
  const [obj, SetObj] = useState({ name: "SATHISH" });

  const fun5 = () => {
    SetObj({
      ...obj,
      name: "SATHISH TS"   // new aa oru object create panni get pannanum 
    });
    console.log(obj)
  };

  return (
    <>
      <h1>OBJECT VALUES</h1>
      <h2>UPDATED VALUE IN OBJECT == {obj.name}</h2>
      <button onClick={fun5}>OBJECT UPDATE</button>
    </>
  );
};
