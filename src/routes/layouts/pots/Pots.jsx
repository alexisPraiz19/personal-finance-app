/---/
import SectionHeader from "../../common/SectionHeader"
import ButtonAdd from "../../common/ButtonAdd"
import Pot from "./Pot"
import { useDataContext } from "../../../context/DataContext"
/---/

export default function Pots(){
    const { data } = useDataContext();
    
    return(
        <section className="pots page">
            <SectionHeader
                title="Pots"
                button={<ButtonAdd text="+Add New Pot"/>}
                className="pots-header"
            />

            <div className="pots-content">
                {
                    data?.pots?.map(({name, target, total, theme}, index) => (
                        <Pot
                            theme={ theme } title={ name } 
                            total={ total } target={ target } 
                            key={ index }
                        />
                    ))
                }
            </div>
        </section>
    )
}