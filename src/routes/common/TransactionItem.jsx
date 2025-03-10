const style = {
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1.5px solid red"
    },

    userInfo: {
        display: "flex",
        alignItems: "center",
        gap: "16px",

        avatar: {
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            aspectRatio: "1/1"
        },
        name: {
            fontFamily: "PublicSans Bold",
            fontSize: "13px",
            color: "#201F24"
        }
    },

    transactionInfo: {
        lineHeight: "1.6",
        textAlign: "end",

        amount: (isPositive) => {
            return isPositive ? {
                display: "block",
                color: "#77B254"
            } : {
                display: "block",
                color: "#201F24"
            }
        }, 

        date: {
            fontSize: "12px",
            color: "#696868"
        }
    }
}

export default function TransactionItem({ userAvatar, userName, amount, date }){
    let transactionDate = new Date(date).toDateString().split(" ").splice(1, 3).join(" ");
    let amountPosivite  = !amount.toString().includes("-");

    return(
        <li style={ style.container }>
            <div style={ style.userInfo }>
                <img src={ userAvatar } alt="image" style={ style.userInfo.avatar } />
                <span style={ style.userInfo.name }>{ userName }</span>
            </div>

            <div style={ style.transactionInfo }>
                <strong className="amount" style={ style.transactionInfo.amount(amountPosivite) }>
                    { amountPosivite ? `+$${amount}` : `-$${ amount.toString().slice(1, 10) }` }
                </strong>
                <time style={ style.transactionInfo.date }>{ transactionDate }</time>
            </div>
        </li>
    )
}