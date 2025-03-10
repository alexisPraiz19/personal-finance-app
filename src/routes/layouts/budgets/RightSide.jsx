/---/
import ActiveBudget from "./ActiveBudget"
import { useDataContext } from "../../../context/DataContext"
/---/

export default function RightSide(){
    const { data } = useDataContext();

    return(
        <div className="budget-rightSide">
            {
                data?.budgets?.map(({category, maximum, theme}, index)=>(
                    <ActiveBudget
                        title={ category }
                        maximum={ maximum }
                        theme={ theme }
                        spent="$15"
                        transactions={ data?.transactions }
                        key={index}
                    />
                ))
            }        
        </div>
    )
}