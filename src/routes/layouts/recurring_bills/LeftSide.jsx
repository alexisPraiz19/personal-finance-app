/---/
import { IconRecurringBills } from "../../../assets/Icons"
/---/

export default function LeftSide(){
    return(
        <div className="recurringBills-leftSide">
            <div className="totalBills">
                <IconRecurringBills/>

                <div className="totalBills-texts">
                    <span className="totalBills-text">Total Bills</span>
                    <strong className="totalBills-amount amount">$384.98</strong>
                </div>
            </div>
            
            <div className="summary box">
                <h3 className="summary-title">Summary</h3>

                <div className="summary-texts">
                    <div className="summary-texts_text">
                        <span className="summary-texts_category">Paid bills</span>
                        <em className="summary-texts_amount r-bolder">4 ($190)</em>
                    </div>

                    <div className="summary-texts_text">
                        <span className="summary-texts_category">Total Upcoming</span>
                        <em className="summary-texts_amount r-bolder">4 ($194.98)</em>
                    </div>

                    <div className="summary-texts_text">
                        <span className="summary-texts_category">Due Soon</span>
                        <em className="summary-texts_amount r-bolder">4 ($59.98)</em>
                    </div>
                </div>
            </div>
        </div>
    )
}