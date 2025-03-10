import BoxHeader from "../../../common/BoxHeader"
import TransactionItem from "../../../common/TransactionItem"

export default function ActiveBudgetLatestSpending(){
    return(
        <div className="activeBudget-latestSpending">
            <BoxHeader title="Latest Spending" to="/transactions"/>

            <ul className="latestSpending-list">
                <TransactionItem
                    userAvatar="/images/james-thompson.jpg"
                    userName="James Thompson"
                    amount="-5"
                    date="11 Aug 2024"
                />

                <TransactionItem
                    userAvatar="/images/james-thompson.jpg"
                    userName="James Thompson"
                    amount="-5"
                    date="11 Aug 2024"
                />

                <TransactionItem
                    userAvatar="/images/james-thompson.jpg"
                    userName="James Thompson"
                    amount="-5"
                    date="11 Aug 2024"
                />
            </ul>
        </div>
    )
}