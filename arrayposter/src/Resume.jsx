const Resume=()=>{
    const Resume=[{personalinformation:{name:"SATHISH",mobile:"7539965139",gender:"MALE",status:"SINGLE",dob:"02-09-2002",country:"INDIA",state:"TAMIL NADU",city:"UTHUKOTTAI"}},
        {education:{degree:["MSC IT","BSC CS"],institue:["DGVC College","RKMVC College"],city:["ARUMBAKKAM","MYLAPORE"]}},
        {skills:{frontend:["HTML","CSS","REACT"],backend:["NODE++","JAVA"]}}
    ]

    return(
        <>
        {/* <h1>{Resume[0].personalinformation.name}</h1>
        <h1>{Resume[1].education.degree[0]}</h1>
        <h1>{Resume[2].skills.frontend[0]}</h1> */}
<div id="r1">
<div id="r2">
    <div id="r3">

    </div>
    <div id="r4">
        <h3>Name :<span class="sp1">{Resume[0].personalinformation.name}</span></h3>
        <h3>Mobile :<span class="sp1">{Resume[0].personalinformation.mobile}</span></h3>
        <h3>Gender :<span class="sp1">{Resume[0].personalinformation.gender}</span></h3>
        <h3>Status :<span class="sp1">{Resume[0].personalinformation.status}</span></h3>
    </div>
    <div id="r5">
        <h3>DOB :<span class="sp1">{Resume[0].personalinformation.dob}</span></h3>
        <h3>Country :<span class="sp1">{Resume[0].personalinformation.country}</span></h3>
        <h3>State :<span class="sp1">{Resume[0].personalinformation.state}</span></h3>
        <h3>City :<span class="sp1">{Resume[0].personalinformation.city}</span></h3>
    </div>
</div>
<hr id="li"></hr>
<div id="r6">
    <div id="r7">
<h2>EDUCATION</h2>
<h3>DEGREE :<span class="sp1">{Resume[1].education.degree[0]}</span></h3>
<h3>INSTITUTE :<span class="sp1">{Resume[1].education.institue[0]}</span></h3>
<h3>CITY :<span class="sp1">{Resume[1].education.city[0]}</span></h3>
<br/>
<h3>DEGREE :<span class="sp1">{Resume[1].education.degree[1]}</span></h3>
<h3>INSTITUTE :<span class="sp1">{Resume[1].education.institue[1]}</span></h3>
<h3>CITY :<span class="sp1">{Resume[1].education.city[1]}</span></h3>
    </div>
    <div id="r9"></div>
    <div id="r8">
<h2>SKILLS</h2>
<h3>FRONT END :<span class="sp1">{Resume[2].skills.frontend[0]} , {Resume[2].skills.frontend[1]} , {Resume[2].skills.frontend[2]}</span></h3>
<h3>BACK END  :<span class="sp1">{Resume[2].skills.backend[0]} , {Resume[2].skills.backend[1]}</span></h3>

    </div>

</div>
</div>

        
        </>
    )
}
export default Resume;