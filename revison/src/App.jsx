import { Routes , Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Done from "./Pages/Done";
import Front from "./Pages/Front";
import Outtlet from "./Pages/Outtlet";

const App=()=>{

  return(<>
  {/* <header><Navbar/></header> */}
  <main>
    <Routes>
      <Route element={<Outtlet/>}>

<Route path="/done" element={<Done/>}/>
<Route path="/" element={<Front/>}/>
      </Route>
    
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    
    
    </Routes>
  </main>
  <aside>
  
  </aside>
  <section>
  </section>
  <footer></footer>
  
  
  </>)
}
export default App;