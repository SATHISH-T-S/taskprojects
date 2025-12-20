import { useNavigate } from "react-router-dom"

const Login=()=>{
    const welcome=useNavigate();
    const fun1=(e)=>{
        e.preventDefault()
welcome("/welcome")
    }
    return(<>
    <div id="div4">
        <form onSubmit={fun1}>
       <pre> <label for="val1"><span id="sp">NAME</span> :    </label>
                       <input type="text" id="name" name="val1"  placeholder="ENTER THE NAME"></input>
            <br/>
            <br/>
            <br/>
            <label for="val2"><span id="sp">E-MAIL</span> :  </label><input type="text" id="mail" name="val2" placeholder="ENTER THE MAIL"></input>
    <br/>
    <br/>
    <br/>
    <input type="submit"/>    
    </pre>
    </form>
    </div>
    </>)
}
export default Login