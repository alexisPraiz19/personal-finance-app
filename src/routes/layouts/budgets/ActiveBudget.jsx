/---/
import BoxHeader from "../../common/BoxHeader"
import ActiveBudgetAmountBar from "./common/ActiveBudgetAmountBar"
import ActiveBudgetLatestSpending from "./common/ActiveBudgetLatestSpending"
/---/

export default function ActiveBudget({title, theme, maximum}){
    return(
        <div className="budget-rightSide_activeBudget box">
            <BoxHeader  ellipse={{theme}} title={ title } dots={ true }/>
            <ActiveBudgetAmountBar maximum={ maximum } theme={ theme } />
            <ActiveBudgetLatestSpending/>
        </div>
    )
}