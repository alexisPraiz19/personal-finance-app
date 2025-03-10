/---/
import BoxHeader from "../../common/BoxHeader"
import AdditionalInfoBox from "../../common/AdditionalInfoBox"
import { useDataContext } from "../../../context/DataContext"
import { IconPot } from "../../../assets/Icons"
import { useState, useEffect } from "react"
/---/

export default function PotsBox(){
    const { data } = useDataContext();
    console.log(data)

    return(
        <div className="potsBox box">
            <BoxHeader className="r-boxHeader" title="Pots" to="/pots" textLink="See Details"/>

            <div className="potsBox-savings">
                <div className="potsBox-totalSaved">
                    <IconPot/>
                    <span className="totalSaved-content">
                        Total Saved
                        <strong className="amount">$850</strong>
                    </span>
                </div>

                <div className="potsBox-savingsSmall">
                    {
                        data?.pots?.slice(0, 4).map(({name, total, theme}, index) => (
                            <AdditionalInfoBox 
                                title={ name } amount={ total } 
                                theme={ theme } width="small" key={ index }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}