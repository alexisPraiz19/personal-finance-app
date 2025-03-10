import { useDataContext } from "../../../context/DataContext"

const BalanceContainer = ({ title, amount }) =>{
    return(
        <div className="balance-content">
            <span className="balance-title">{ title }</span>
            <em className="balance-amount r-bolder">${ amount }</em>
        </div>
    )
}

export default function Balance(){
    const { data } = useDataContext();

    return(
        <header className="overview-balance">
            <BalanceContainer title="Current Balance" amount={ data.balance?.[0].current.toLocaleString() } />
            <BalanceContainer title="Income"          amount={ data.balance?.[0].income.toLocaleString() }  />
            <BalanceContainer title="Expenses"        amount={ data.balance?.[0].expenses.toLocaleString() } />
        </header>
    )
}