import { useNavigate } from "react-router-dom"

const Register=()=>{
    const haha=useNavigate()
    const fun2=(e)=>{
        e.preventDefault()
haha(-1)
    }
    return(<>
    <div id="reg">
<form>
<pre>
            <label for="val1">NAME</label>    <input type="text" id="name" name="val1" placeholder="ENTER THE NAME"></input>
<br/>
<br/>
<br/>
<label for="val2">E-MAIL</label>  <input type="text" id="name" name="val2" placeholder="ENTER THE E-MAIL"></input>
<br/>
<br/>
<br/>
<label for="val3">PASSWORD</label> <input type="password" id="pass" name="val3" placeholder="ENTER THE PASSWORD"></input>
<br/>
<br/>
<br/>
<label for="val4">CONFIRM PASSWORD</label> <input type="password" id="pas" name="val4" placeholder="CONFIRM PASSWORD"></input>
<br/>
<br/>
<br/>
<input type="submit" onClick={fun2}></input>
</pre>


</form>

    </div>
    
    </>)
}
export default Register