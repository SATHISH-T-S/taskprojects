import SATHISH from '../src/assets/images/luffy.jpg'
import SANJAY from '../src/assets/images/sanjii.jpeg'
import BALA from '../src/assets/images/zoro.jpg'
const Cards=()=>{
    // const img1=SATHISH
    const card=[{id:1,image:SATHISH,name:"SATHISH",age:23},
        {id:2,image:SANJAY,name:"SANJAY",age:22},
        {id:3,image:BALA,name:"BALA",age:23}
    ]
    return(
        <>
        
        <div class="div5">
{card.map((e,i)=>(
    <div class="div6" key={e.id}>
        <img src={e.image} class="img1"/>
        <h1 class="h2">{e.name}</h1>
        <h2 class="h3">{e.age}</h2>
        
        </div>
))}

        </div>
        
        </>
    )
}
export default Cards;