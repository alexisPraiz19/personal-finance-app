/---/
import BoxHeader from "../../common/BoxHeader"
import ProgressBar from "../../common/ProgressBar"
/---/

export default function Pot({theme, title, total, target}){
    return(
        <div className="pot box">
            <BoxHeader ellipse={{theme}} title={ title } dots={ true }/>

            <div className="pot-barContainer">
                <div className="totalSaved">
                    <span className="totalSaved-text">Total Saved</span>
                    <em className="totalSaved-amount r-bolder">${ total }</em>
                </div>

                <div className="bar">
                    <ProgressBar theme={ theme }/>
                    <div className="bar-text">
                        <span className="bar-percent r-bolder">5.8%</span>
                        <span className="bar-target r-bolder">Target of ${ target }</span>
                    </div>
                </div>
            </div>

            <div className="pot-buttons">
                <button className="pot-buttons_button" type="button">+Add Money</button>
                <button className="pot-buttons_button" type="button">Withdraw</button>
            </div>
        </div>
    )
}