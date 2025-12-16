import Check from "./Check";
import Sigma from "./Sigma";
import Signals from "./Signals";

const App=()=>{
  return (
    <>
  <h1 id="h1">CONDITIONAL RENDERS </h1>
  <hr class="hr1"></hr>
  <DivShow/>
  <hr class="hr1"></hr>
  <TextShow/>
  <hr class="hr1"></hr>
<EvenOdd/>
<hr class="hr1"></hr>
<ButtonShow/>
<hr class="hr1"></hr>
<Signals/>
<hr id="hr2"></hr>
<Check/>
<Sigma/>
<hr id="hr3"></hr>
<Story/>
<hr id="hr2"></hr>

    </>
  )
}
export default App;

const DivShow=()=>{
  const dec1=1;
  return (<>
  <h3>Task:1-- DIV RENDERING</h3>
  {dec1?<div id="div1">
<h1>Given Value is {dec1} so It's true the DIV Exist.</h1>

  </div>:""}
  </>
  )
}

const TextShow=()=>{
  const dec2=1
  const dec3="SATHISH TS "

  return (
    <>
    <h3>Task:2-- TEXT RENDERING</h3>
    <h3>If Your NAME is shown in ANSWER the given value is True  </h3>
    <h4>1. What is your NAME? </h4>
  {dec2?<div class="div2"><h3>My NAME is :  {dec3}</h3></div>:<div class="div2"><h3>My NAME is :</h3></div>}
    </>
  
)
}

const EvenOdd=()=>{
  const dec4=2
  return (<>
  <h3>Task:3-- CHECK ODD/EVEN</h3>
  <h3>Given Value is {dec4}</h3>
  <h4>SO THE OUTPUT IS</h4>
  {dec4==2?<div class="div1"><h1>EVEN</h1></div>:<div class="div1"><h1>ODD</h1></div>}
  </>)
}

const ButtonShow=()=>{
  const dec5=1;
  return(
    <>
    <h3>Task:4-- USING IMPLICIT SHOW (TRUE) BUTTON IF THE VALUE IS TRUE OTHERWISE HIDE (FALSE)BUTTON</h3>
    <h3>Given Value is {dec5}</h3>
    {dec5?<button class="bt1">TRUE</button>:<button class="bt1">FALSE</button>}
    </>
  )
}

const Story=()=>{
  const name="SATHISH T S "
  const place="PERIYAPALAYAM"
  const heart=1;
  const family=4;
  const ans=null;
  return (<>
  <div>
    <h1>{name} KUTTY STORY</h1>
    <h2>Hi Am {name} from {place} if i say about me <br/>
    <br/>
    am a EXTROVERT Person a non-Stop talkative person  with a {heart?<h3>KIND</h3>:<h3>RUDE</h3>} heart ..<br/>
<br/>
i faced a lot of problems in my life <br/>
<br/>
In family we are {family==4&&<i id="fa">{family}</i>} members DAD MOM YOUNGER BRO am too jealous abt my YOUNG BRO bcz he is tooo COOL<br/>
<br/>
and am  thesies if i go to temple i just  ask one thing i will get <h3>married or Not</h3> <br/>
<br/>
His Answer is {ans??<div id="def">Definitely Not</div>} !!!!
    </h2>
  </div>
  
  </>)
}