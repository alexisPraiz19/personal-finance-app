const style = {
    container: {
        padding: "4px",
        height: "32px",
        margin: "12px 0 16px 0",
        backgroundColor: "#F8F4F0",
        borderRadius: "4px"
    },
    bar: (theme) => {
        return{
            display: "block",
            width: "100%",
            height: "100%",
            backgroundColor: theme,
            borderRadius: "3px",
            width: "50%"
        }
    }
    
}

export default function ProgressBar({theme}){
    return(
        <div style={ style.container }> <span style={ style.bar(theme) }></span> </div>
    )
}