/---/
import SectionHeader from "../../common/SectionHeader"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
/---/

export default function RecurringBills(){
    return(
        <section className="recurringBills page">
            <SectionHeader title="Recurring Bills" />

            <div className="recurringBills-content">
                <LeftSide/>
                <RightSide/>
            </div>
        </section>
    )
}