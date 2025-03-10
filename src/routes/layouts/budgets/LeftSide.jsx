/---/
import BudgetChart from "../../common/BudgetChart"
import AdditionalInfoBox from "../../common/AdditionalInfoBox"
import { useDataContext } from "../../../context/DataContext"
/---/

export default function LeftSide(){
    const { data } = useDataContext();

    return(
        <div className="budget-leftSide box">
            <div className="budget-leftSide_chart">
                <BudgetChart/>
            </div>

            <div className="budget-leftSide_spendingSummary">
                <h3 className="spendingSummary-title">Spending Summary</h3>

                <div className="spendingSummary-details">
                    {
                        data?.budgets?.map(({ category, maximum, theme }, index) => (
                            <AdditionalInfoBox
                                title={ category }
                                amount={ maximum }
                                theme={ theme }
                                background="#f8f4f0"
                                className="spendingSummary-item"
                                spent="$2.00"
                                key={ index }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}