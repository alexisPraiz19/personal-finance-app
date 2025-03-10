/---/
import SearchFilter from "../../common/SearchFilter"
import BoxSort from "../../common/BoxSort"
/---/

export default function TransactionFilters(){
    return(
        <div className="transactions-filters">
            <SearchFilter />

            <div className="sort-filters">
                <BoxSort 
                    title="Sort by"
                    listItemText={ ["Latest", "Oldtest", "A to Z", "Z to A", "Highest", "Lowest"] }
                />

                <BoxSort 
                    title="All Category"
                    listItemText={ ["All Transactions", "Entretaiment", "Bills", "Groceries", "Dining Out", "Transportation", "Education", "Lifestyle", "Shopping", "General"] }
                />
            </div>
        </div>
    )
}