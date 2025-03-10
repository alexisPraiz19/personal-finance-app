import { ArrowDown } from "../../assets/Icons"

const style = {
    container: {
        display: "flex",
        alignItems: "center",
        gap: "10px"
    },
    boxSort: {
        position: "relative",
        cursor: "pointer"
    },
    currentSort: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "12px 15px",
        outline: "1.3px solid #98908B",
        borderRadius: "8px"
    },
    sortList: {
        position: "absolute",
        top: "115%",
        display: "none",
        width: "100%",
        maxHeight: "249px",
        padding: "10px 15px",
        listStyle: "none",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 0 10px -6px #201F24",
        overflow: "hidden scroll",
        scrollbarWidth: "thin"
    },
    sortListItem: {
        paddingBlock: "10px",
        fontSize: ".95em",
        cursor: "pointer"
    }
}

export default function BoxSort({ title, listItemText }){
    return(
        <div style={ style.container }>
            <span>{ title }</span>
        
            <div style={ style.boxSort }>
                <div style={ style.currentSort }>
                    { title }
                    <ArrowDown/>
                </div>
        
                <ul style={ style.sortList } className="sortList">
                    { listItemText.map((text, index) => (<li key={index} style={ style.sortListItem }>{ text }</li>)) }
                </ul>
            </div>
        </div>
    )
}