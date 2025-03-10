const style = {
    height: "100%",
    paddingInline: "16px",
    fontFamily: "PublicSans Bold",
    fontSize: "14px",
    color: "#fff",
    backgroundColor: "#201F24",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
}

export default function ButtonAdd({text}){
    return(
        <button type="button" style={ style } >{ text }</button>
    )
}