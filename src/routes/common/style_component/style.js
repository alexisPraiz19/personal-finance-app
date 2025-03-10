/* Box Header */
export const boxHeader = {
    container: {
        display: "flex",
        justifyContent: "space-between"
    },
    titleContainer: { display: "flex", alignItems: "center" },
    title: { fontSize: "20px" },
    link: {
        display: "inherit",
        alignItems: "center",
        gap: "10px",
        fontSize: "14px",
        color: "#696868",
        textDecoration: "none"
    },
    button: {
        width: "20px",
        textAlign: "end",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer"
    }
}

/* Adittional info */
export const additionalInfo = {
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