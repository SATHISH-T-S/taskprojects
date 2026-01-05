import {Link , NavLink} from 'react-router-dom'
const Navbar=()=>{
    return(<>
    <div id="div1">
<div id="div2">
    {/* <Link to="/home"><h1>HOME</h1></Link> */}
    <NavLink to="/home" className={({isActive})=>isActive?"s1":"s2"}>HOME</NavLink>
</div>
<div id="div2">
    
    {/* <Link to="/login"><h1>LOGIN</h1></Link> */}

    <NavLink to="/login" className={({isActive})=>isActive?"s1":"s2"}>LOGIN</NavLink>
</div>

    </div>
    
    </>)
}
export default Navbar