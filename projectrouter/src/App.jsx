import Badass from "./Badass";
import Luffy from "./Display/Luffy";
import Sanji from "./Display/Sanji";
import Zoro from "./Display/Zoro";
import Guys from "./Guys";
import Onpiece from "./Onpiece";
import { Routes, Route } from 'react-router-dom'

const App=()=>{
  return(<>
  <header><Onpiece/></header>
  <section><Guys/></section>
  <article><Badass/></article>
  <main>
    <Routes>
      <Route path="/ZOROBADASS" element={<Zoro/>}></Route>
      <Route path="/SANJIIBADASS" element={<Sanji/>}></Route>
      <Route path="/LUFFYBADASS" element={<Luffy/>}></Route>

  
  
  </Routes>
  </main>
  </>)
}
export default App;