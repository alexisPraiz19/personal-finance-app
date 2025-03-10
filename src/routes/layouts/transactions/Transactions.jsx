/---/
import TransactionFilters from "./TransactionsFilters"
import TransactionsTable from "./TransactionsTable"
import TransactionsPagination from "./TransactionsPagination"
/---/

export default function Transaction(){
    return(
        <section className="transactions page">
            <h1 className="title">Transactions</h1>

            <div className="transactions-content box">
                <TransactionFilters/>
                <TransactionsTable/>
                <TransactionsPagination/>
            </div>
        </section>
    )
}