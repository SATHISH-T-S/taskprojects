import { NavLink } from "react-router-dom"

const Navbar=()=>{
    return(<>
    
    <div id="div1">
    <div id="div2">
        <hi>DASHBOARD</hi></div>
         <div class="div3">
            <NavLink to="/register" className={({isActive})=>isActive?"nav":"nav1"}><h3>REGISTER</h3></NavLink>
         </div>
        
            <div id="div3">
             <NavLink to="/login" className={({isActive})=>isActive?"nav":"nav1"}>   <h3>LOGIN</h3></NavLink>
            </div>
        </div>
    </>)
}
export default Navbar