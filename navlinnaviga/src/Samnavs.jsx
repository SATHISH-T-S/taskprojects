import { NavLink } from "react-router-dom"

const Samnavs=()=>{
    return(<>
    
    <div id="p1">
        
      <NavLink to="/one" className={({isActive})=>isActive?"nav":"nav1"}>  <div id="s1">ONE</div></NavLink>
      <NavLink to="/two" className={({isActive})=>isActive?"nav":"nav1"}>  <div id="s1">TWO</div></NavLink>
       <NavLink to="/three" className={({isActive})=>isActive?"nav":"nav1"}> <div id="s1">THREE</div></NavLink>
       <NavLink to="/four" className={({isActive})=>isActive?"nav":"nav1"}> <div id="s1">FOUR</div></NavLink>
       <NavLink to="/five" className={({isActive})=>isActive?"nav":"nav1"}> <div id="s1">FIVE</div></NavLink>
        <NavLink to="/six" className={({isActive})=>isActive?"nav":"nav1"}><div id="s1">SIX</div></NavLink>
     <NavLink to="/seven" className={({isActive})=>isActive?"nav":"nav1"}>   <div id="s1">SEVEN</div></NavLink>
        <NavLink to="/eight" className={({isActive})=>isActive?"nav":"nav1"}><div id="s1">EIGHT</div></NavLink>
        <NavLink to="/nine" className={({isActive})=>isActive?"nav":"nav1"}><div id="s1">NINE</div></NavLink>
        <NavLink to="/ten" className={({isActive})=>isActive?"nav":"nav1"}><div id="s1">TEN</div></NavLink>
        <NavLink to="/ele" className={({isActive})=>isActive?"nav":"nav1"}><div id="s1">ELEVEN</div></NavLink>
        <NavLink to="/twl" className={({isActive})=>isActive?"nav":"nav1"}><div id="s1">TWELVE</div></NavLink>
        <NavLink to="/thr" className={({isActive})=>isActive?"nav":"nav1"}><div id="s1">THIRTEEN</div></NavLink>
        <NavLink to="/for" className={({isActive})=>isActive?"nav":"nav1"}><div id="s1">FOURTEEN</div></NavLink>
        <NavLink to="/fif" className={({isActive})=>isActive?"nav":"nav1"}><div id="s1">FIRFTEEN</div></NavLink>



    </div>
    
    </>)
}
export default Samnavs