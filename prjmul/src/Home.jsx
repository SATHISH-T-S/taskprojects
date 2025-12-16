
import Government from './Needs/Government/Government.jsx';
import Money from './Needs/Money/Money.jsx';
import Name from './Needs/Name/Name.jsx'
import Tour from './Needs/Tour/Tour.jsx';
const Home=()=>{
    return(
        <>
        <div id="m1">
            <div id="m2">
                <h1 style={{textAlign:"center"}}>BASIC NEEDS FOR ME </h1></div>
                <div id="N">NAME
                    <div id="disn">

<Name/>

        </div>
    
                </div>
                <div id="M">MONEY
                    <div id="dism">

<Money/>

        </div>
                </div>
                <div id="T">TOUR
                    <div id="dist">

<Tour/>

        </div>
                </div>
                
                <div id="G">GOVERNMENT
                    <Government/>
                </div>

        </div>
        
    </>
    )
}
export default Home;