const style = {
    ellipseStyle: theme => {
        return{
            display: "inline-block",
            width: "15px",
            height: "15px",
            marginRight: "10px",
            backgroundColor: theme,
            transform: "translateY(1px)",
            borderRadius: "50%"
        }
    }
}
export default function Ellipse({theme}){
    return(
        <span className="ellipse" style={ style.ellipseStyle(theme) }></span>
    )
}