/---/
import TransactionItem from "../../common/TransactionItem"
import BoxHeader from "../../common/BoxHeader"
import { useDataContext } from "../../../context/DataContext"
/---/

export default function TransactionsBox(){
    const { data } = useDataContext();

    return(
        <div className="transactionsBox box">
            <BoxHeader className="r-boxHeader" title="Transactions" to="/transactions" textLink="See All" />

            <ul className="transactionsBox-list">
                {
                    data.transactions?.slice(0, 5).map(({ avatar, name, amount, date }, index) => (
                        <TransactionItem 
                            userAvatar={avatar} userName={name} 
                            amount={amount} date={date} key={index}
                        />
                    ))
                }
            </ul>
        </div>
    )
}