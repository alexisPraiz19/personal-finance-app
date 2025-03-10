/---/
import BoxHeader from "../../common/BoxHeader"
import AdditionalInfoBox from "../../common/AdditionalInfoBox"
import BudgetChart from "../../common/BudgetChart"
import { useDataContext } from "../../../context/DataContext"
/---/

export default function BudgetsBox(){
    const { data } = useDataContext();

    return(
        <div className="budgetsBox box">
            <BoxHeader className="r-boxHeader" title="Budgets" to="/pots" textLink="See Details" />

            <div className="budgetsBox-chartContainer">
                <BudgetChart/>
                
                <div className="budgetsBox-budgetsSmall">
                    {
                        data.budgets?.slice(0, 4).map(({category, maximum, theme}, index) => (
                            <AdditionalInfoBox 
                                title={ category } amount={ maximum } 
                                theme={ theme }  width="small" key={ index }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}