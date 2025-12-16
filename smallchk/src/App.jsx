import { Routes , Route } from "react-router-dom";
import Mother from "./Details/Mother";
import Father from "./Details/Father";

const App=()=>{
    return(<>
    <Father/>
    <Routes>
        <Route path="/father" element={<Mother/>}/>
    </Routes>
    <h1>SATHIHS TS </h1>
    </>)
}
export default App;