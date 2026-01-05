import { Routes , Route } from "react-router-dom";
import Filetwo from "./Filetwo";
import Filethree from "./Filethree";

const Fileone=()=>{
    return(<>
    <header><Filetwo/></header>
<main>
    <Routes>
        {/* <Route path="details/:id" element={<Filethree/>}/> */}
        <Route path="/details" element={<Filethree/>}/>
    </Routes>
</main>
<aside></aside>
    
    </>)
}
export default Fileone;