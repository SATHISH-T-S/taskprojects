import { useState } from "react"
import Appti_Banner from "./Apptitude/Appti_Banner"

const Appti=()=>{
//     const [app]=useState(
//         [{Q1:"CAT,DOG,RAT,LION",A:"RAT",B:"DOG",C:"LION",D:"CAT"},
//             {Q1:"FISH,OCTOPUS,CRAB,EAGLE",A:"OCTOPUS",B:"FISH",C:"CRAB",D:"EAGLE"}
// ])

const [aapi]=useState([
    {Q1:"'DOG','CAT','WOLF','RAT'",A:"DOG",B:"CAT",C:"RAT",D:"WOLF"},
    {Q1:"'FISH','OCTOPUS','CRAB','EAGLE'",A:"EAGLE",B:"CRAB",C:"OCTOPUS",D:"FISH" }
])

    return(<>
    <Appti_Banner values={aapi}/>


    </>)
}

export default Appti