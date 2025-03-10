/---/
import RecurringBillsTable from "./RecurringBillsTable"
import SearchFilter from "../../common/SearchFilter"
import BoxSort from "../../common/BoxSort"
/---/

export default function RightSide(){
    return(
        <div className="recurringBills-rightSide box">
            <div className="filter-bills">
                <SearchFilter/>
                <BoxSort
                    title="Sort By"
                    listItemText={["Latest", "Oldtest", "A to Z", "Z to A", "Highest", "Lowest"]}
                />
            </div>

            <RecurringBillsTable/>
        </div>
    )
}