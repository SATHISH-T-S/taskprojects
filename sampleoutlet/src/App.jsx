import { Routes , Route} from "react-router-dom"
// import Navbar from "./Details/Navbar"
import Home from "./Details/Home"
import Login from "./Details/Login"
import Dummy from "./Details/Dummy"
import Layout from "./Details/Layout"

const App=()=>{
  return(<>
  {/* <section><Navbar/></section> */}
  <header>
<Routes>
{/* <Route path="/" element={<Dummy/>}/> */}

<Route element={<Layout/>}>
{/* <Route path="/" element={<Dummy/>}/> */}
<Navbar/>
</Route>
<Route path="/home" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>

</Routes>

  </header>
  <main></main>
  <aside></aside>
  <footer></footer>
  
  </>)
}
export default App