/---/
import SectionHeader from "../../common/SectionHeader"
import Balance from "./Balance"
import PotsBox from "./PotsBox"
import TransactionsBox from "./TransactionsBox"
import BudgetsBox from "./BudgetsBox"
import RecurringBills from "./RecurringBillsBox"
/---/

export default function Overview(){
    return(
        <section className="overview page">
            <h1 className="r-bolder">Overview</h1>

            <Balance/>

            <div className="overview-content">
                <div className="left-side r-grid">
                    <PotsBox/>
                    <TransactionsBox/>
                </div>

                <div className="right-side">
                    <BudgetsBox/>
                    <RecurringBills/>
                </div>
            </div>
        </section>
    )
}

/*<div className="overview-content">
                <div className="left-side">
                    <PotsBox/>
                    <TransactionsBox/>
                </div>

                <div className="right-side">
                    <BudgetsBox/>
                    <RecurringBills/>
                </div>
            </div> */