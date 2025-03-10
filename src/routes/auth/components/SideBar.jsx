import { LogoLarge } from "../../../assets/Icons"

export default function SideBar(){
    return(
        <aside className="sidebar">
            <LogoLarge/>
                            
            <div className="sidebar-texts">
                <span className="sidebar-texts_strong r-bolder">Keep track of your money and save for your future</span>
                    
                <p className="sidebar-texts_paragraph">
                    personal finance app puts you in control of your spending. Track
                    transactions, set budgets, and add to savings post easily.
                </p>
            </div>
        </aside>
    )
}