const style = {
    chartBox:{
        position: "relative",
        display: "grid",
        placeItems: "center",
        width: "217px",
        height: "210px",
        borderRadius: "50%",
        backgroundImage: "conic-gradient(#277C78 0deg 25deg, #82C9D7 25.5deg 240deg, #F2CDAC 240.5deg 300deg, #626070 300.5deg 360deg)"
    },
    texts:{
        position: "absolute",
        width: "65%", 
        height: "65%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: "1.5",
        textAlign: "center",
        borderRadius: "50%",
        backgroundColor: "#fff",
        boxShadow: "0 0 0 16px rgba(255, 255, 255, .3)"
    },
    curretAmount:{
        display: "block",
        fontSize: "2em",
        color: "#201F24"
    },
    limit:{
        fontFamily: "PublicSans Regular",
        fontSize: ".75em",
        color: "#696868"
    }
}

export default function BudgetChart(){
    return(
        <div style={ style.chartBox }>
            <div style={ style.texts }>
                <strong style={ style.curretAmount }>$338</strong>
                <span style={ style.limit }>of $975 limit</span>
            </div>
        </div>
    )
}