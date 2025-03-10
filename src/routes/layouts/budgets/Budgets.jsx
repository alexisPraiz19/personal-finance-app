/---/
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
import ButtonAdd from "../../common/ButtonAdd"
/---/

export default function Budgets(){
    return(
        <section className="budgets page">
            <div className="budget-header">
                <h1 className="title">Budgets</h1>
                <ButtonAdd text="+Add New Budget"/>
            </div>

            <div className="budget-content">
                <LeftSide/>
                <RightSide/>
            </div>
        </section>
    )
}