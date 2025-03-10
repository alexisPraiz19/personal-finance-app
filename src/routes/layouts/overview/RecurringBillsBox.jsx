/---/
import BoxHeader from "../../common/BoxHeader"
import AdditionalInfoBox from "../../common/AdditionalInfoBox"
/---/

export default function RecurringBills(){
    return(
        <div className="recurringBillsBox box">
            <BoxHeader className="r-boxHeader" title="Recurring Bills" to="/recurring-bills" textLink="See Details" />
            
            <AdditionalInfoBox title="Paid Bills" amount="190" theme="#277C78" background="#F8F4F0"/>
            <AdditionalInfoBox title="Total Incoming" amount="194.98" theme="#F2CDAC" background="#F8F4F0" />
            <AdditionalInfoBox title="Due Soon" amount="59.98" theme="#82C9D7" background="#F8F4F0" />
        </div>
    )
}