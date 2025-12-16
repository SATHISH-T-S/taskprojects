import Education from "./Sectors/Education";
import Fund from "./Sectors/Fund";
import Police from "./Sectors/Police";

const Government=()=>{
    return (
        <>
        <div id="g1">
                        <div id="gg1">POLICE
                            <Police/>
                        </div>
                        <div id="gg2">EDUCATION
                            <Education/>
                        </div>
                        <div id="gg3">FUND
                        <Fund/>
                        </div>
                    </div>
        
        </>
    )
}
export default Government;