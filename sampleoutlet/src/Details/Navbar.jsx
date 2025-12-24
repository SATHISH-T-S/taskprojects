import { NavLink } from "react-router-dom"

const Navbar=()=>{
    return(<>
    <div style={{display:"flex",marginLeft:"20px",gap:"10px"}}>
    <NavLink to="/" className={({isActive})=>isActive?"nav":"nav1"}><div>DUMMY</div></NavLink>
    <NavLink to="/home" className={({isActive})=>isActive?"nav":"nav1"}>  <div>HOME</div></NavLink>
    <NavLink to="/login" className={({isActive})=>isActive?"nav":"nav1"}>   <div>LOGIN</div></NavLink>
    </div>


    </>)
}
export default Navbar