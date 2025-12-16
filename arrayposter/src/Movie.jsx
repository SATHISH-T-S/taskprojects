const Movie=()=>{
    const Movie={moviename:"MECHANIC ROCKY",
        hero:{name:"VISHWAK SEN",age:34,status:"SINGLE"},
        heroein:{name:"MEENAKSHI CHAUDHARY",age:26,status:"SINGLE"},
    director:{name:"RAVI TEJA MULLAPUDI",age:48,status:"MARRIED"}};
return (
    <>
<div>  
<div id="d1">
</div>
<div id="n">
    <br/>
    <pre>                       <span id="s">{Movie.moviename}</span></pre>
    <pre>                       <span id="c"> COMEDY / DRAMA</span> </pre>

</div>
</div>
<div id="h">
    <div id="he">
        HERO
        <div id="her">
<p>
Hero Name : <span id="hn">{Movie.hero.name}</span>
<br/>
<br/>
AGE :    <span id="hn">{Movie.hero.age}</span>
<br/>
<br/>
Status :<span id="hn">{Movie.hero.status}</span>
</p>
        </div>
    </div>

</div>



<div id="h1">
    <div id="he1">
        HEROEIN
        <div id="her1">
<p>
Heroien Name : <span id="hn">{Movie.heroein.name}</span>
<br/>
<br/>
AGE :    <span id="hn">{Movie.heroein.age}</span>
<br/>
<br/>
Status :<span id="hn">{Movie.heroein.status}</span>
</p>
        </div>
    </div>

</div>




<div id="h2">
    <div id="he2">
        DIRECTOR
        <div id="her2">
<p>
Director Name : <span id="hn">{Movie.director.name}</span>
<br/>
<br/>
AGE :    <span id="hn">{Movie.director.age}</span>
<br/>
<br/>
Status :<span id="hn">{Movie.director.status}</span>
</p>
        </div>
    </div>

</div>


    
    </>
)
}
export default Movie;