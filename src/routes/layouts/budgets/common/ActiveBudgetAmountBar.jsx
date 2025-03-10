/---/
import AdditionalInfoBox from "../../../common/AdditionalInfoBox"
import ProgressBar from "../../../common/ProgressBar"
/---/

export default function ActiveBudgetAmountBar({ maximum, theme }){
    return(
        <div className="activeBudget-amountBar">
            <span className="amountBar-maximum">Maximum of ${ maximum }</span>
                        
            <ProgressBar theme={ theme }/>
        
            <div className="amountBar-spentAndFree">
                <AdditionalInfoBox
                    title="Spent"
                    amount="16"
                    theme={ theme }
                    className="info-box"
                    width="small"
                />
        
                <AdditionalInfoBox
                    title="Remaining"
                    amount="600"
                    theme="#F8F4F0"
                    className="info-box"
                    width="small"
                />
            </div>
        </div>
    )
}