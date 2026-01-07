import { useContext } from "react"
import { Ccontext } from "./Context/Ccontext"

const Home=()=>{
const {val}=useContext(Ccontext)
    return(<>
<h1>{val}</h1>

    </>
    )
}
export default Home