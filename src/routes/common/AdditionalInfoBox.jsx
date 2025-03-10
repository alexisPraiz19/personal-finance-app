const style = {
    small: theme => {
        return{
            display: "grid",
            paddingLeft: "12px",
            lineHeight: "1.6",
            fontSize: "12px",
            color: "#696868",
            boxShadow: `-3px 0 0 ${ theme }`
        }        
    },
    long: (theme, background) => {
        return{
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 13px",
            fontSize: "13px",
            color: "#696868",
            backgroundColor: background,
            borderRadius: "5px",
            boxShadow: `-3px 0 0 ${ theme }`
        }        
    },
    amount: { fontFamily: "PublicSans Bold" },
    spent: { fontSize: "15px" }
}

export default function AdditionalInfoBox({ title, amount, theme, background, className, width , spent}){
    return(
        <div className={ className } style={ width == "small" ? style.small(theme) : style.long(theme, background) }>
            <span>{ title }</span>
            <div style={ style.amount }>
                { spent && <span style={ style.spent }>{ spent }</span> }
                <em className="amount">{ spent ? `of $${ amount }` : `$${ amount }` } </em>
            </div>
        </div>
    )
}