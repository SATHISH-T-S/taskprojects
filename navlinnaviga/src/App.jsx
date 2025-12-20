import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Navbar from "./Pages/Navbar";
import Welcome from "./Pages/Welcome";
import Register from "./Pages/Register";
import Samnavs from "./Samnavs";
import One from "./Practice/One";
import Two from "./Practice/Two";
import Three from "./Practice/Three";
import Four from "./Practice/Four";
import Five from "./Practice/Five";
import Six from "./Practice/Six";
import Seven from "./Practice/Seven";
import Eight from "./Practice/Eight.";
import Nine from "./Practice/Nine";
import Ten from "./Practice/Ten";
import Eleven from "./Practice/Eleven";
import Twelve from "./Practice/Twelve";
import Thirteen from "./Practice/Thirteen";
import Fourteen from "./Practice/Fourteen";
import Fifteen from "./Practice/Fifteen";

const App=()=>{
    return(<>
<header><Navbar/></header>
<main>
<Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
    </Routes>
    </main>
<section>
  <Routes>
    <Route path="/one" element={<One/>}/>
    <Route path="/two" element={<Two/>}/>
    <Route path="/three" element={<Three/>}/>
    <Route path="/four" element={<Four/>}/>
    <Route path="/five" element={<Five/>}/>
    <Route path="/six" element={<Six/>}/>
    <Route path="/seven" element={<Seven/>}/>
    <Route path="/eight" element={<Eight/>}/>
    <Route path="/nine" element={<Nine/>}/>
    <Route path="/ten" element={<Ten/>}/>
    <Route path="/ele" element={<Eleven/>}/>
    <Route path="/twl" element={<Twelve/>}/>
    <Route path="/thr" element={<Thirteen/>}/>
    <Route path="/for" element={<Fourteen/>}/>
    <Route path="/fif" element={<Fifteen/>}/>

    </Routes>  
</section>
<aside></aside>
<footer><Samnavs/></footer>
    </>)
}
export default App;