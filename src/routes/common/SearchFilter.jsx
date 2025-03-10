import { Search } from "../../assets/Icons"

const style = {
    label: {
        position: "relative",
        display: "inline-block",
        width: "320px",
        height: "45px",
        outline: "1.3px solid #98908B",
        borderRadius: "8px"
    },
    input: {
        width: "100%",
        height: "100%",
        padding: "12px 15px",
        fontSize: "14px",
        color: "#98908B",
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
    },
    icon: {
        position: "absolute",
        top: "50%",
        right: "15px",
        transform: "translateY(-50%)"
    }
}

export default function SearchFilter(){
    return(
        <label style={ style.label }>
            <input type="search" name="search" title="search by type" placeholder="Search transaction" style={ style.input }/>
            <Search style={ style.icon }/>
        </label>
    )
}