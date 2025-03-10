/---/
import { boxHeader } from "./style_component/style"
import { NavLink } from "react-router"
import { ArrowRight } from "../../assets/Icons"
import { Dots } from "../../assets/Icons"
import Ellipse from "../common/Ellipse"
/---/

export default function BoxHeader({ className, title, to, textLink, ellipse=null, dots=null }){
    return(
        <div className={ className }>
            { ellipse && <Ellipse theme={ellipse.theme}/> }
            <h3 className="r-bolder">{ title }</h3>
            
            {
                dots 
                ?   <button type="button" style={ boxHeader.button }><Dots/></button>
                :   <NavLink to={ to }>
                        { textLink }
                        <ArrowRight/>
                    </NavLink>
            }
        </div>
    )
}