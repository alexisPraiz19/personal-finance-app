import { useState } from "react"
import { useDataContext } from "../../../context/DataContext"

export default function TransactionsTable(){
    const [currentPage, setCurrentPage] = useState(1);
    const { data } = useDataContext();
    
    return(
        <table className="transactions-table">
            <thead className="table-head">
                <tr>
                    <td>Recipient / Sender</td>
                    <td>Category</td>
                    <td>Transaction Date</td>
                    <td>Amount</td>
                </tr>
            </thead>

            <tbody className="table-body">
                {
                    data?.transactions?.slice(parseInt(`${currentPage - 1}0`), parseInt(`${currentPage}0`)).map(({avatar, name, category, date, amount}, index) => (
                        <tr key={index}>
                            <td>
                                <em>
                                    <img src={ avatar } alt="avatar-user"/>
                                    { name }
                                </em>
                            </td>
                            <td> { category } </td>
                            <td> { new Date(date).toDateString().split(" ").splice(1, 3).join(" ") } </td>
                            <td> <em className="amount">${ amount }</em> </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}