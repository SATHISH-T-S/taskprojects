import { Routes , Route} from "react-router-dom";
import Home from "./Home";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
import Nav3 from "./Nav3";
import Interaction from "./Events/Interaction";

const App=()=>{
    return(<>
    <header><Nav1/></header>
    <main><Nav2/></main>
    <section><Nav3/></section>
<aside>
    <Routes>
<Route path="/home" element={<Home/>}/>
<Route path="/interaction" element={<Interaction/>}/>



    </Routes>
    </aside>
<footer></footer>


    </>)
}
export default App;