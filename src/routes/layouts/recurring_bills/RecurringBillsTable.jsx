/---/
import { useDataContext } from "../../../context/DataContext"
/---/

export default function RecurringBillsTable(){
    const { data }  = useDataContext();
    const recurring = data?.transactions?.filter(transaction => transaction.recurring);

    return(
        <table className="rightSide-table">
            <thead className="rightSide-table_thead">
                <tr className="table-thead_tr">
                    <td>Bill title</td>
                    <td>Due Date</td>
                    <td>Amount</td>
                </tr>
            </thead>

            <tbody className="rightSide-table_tbody">
                {
                    recurring?.map(({name, avatar, date, amount},index) => (
                        <tr className="table-body_tr" key={index}>
                            <td>
                                <em>
                                    <img src={ avatar } alt="avatar-user"/>
                                    { name }
                                </em>
                            </td>
                            <td> { new Date(date).toDateString().split(" ").splice(1, 3).join(" ") } </td>
                            <td> <em className="amount">${ amount }</em> </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}