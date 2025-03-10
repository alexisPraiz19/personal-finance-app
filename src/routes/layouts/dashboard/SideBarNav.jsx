/---/
import NavLinkItem from "./NavLinkItem"
import { LogoLarge, LogoSmall, NavOverView, NavTransactions,NavBudgets, NavPots, NavRecurringBills, NavMinimizeMenu } from "../../../assets/Icons"
/---/


export default function SideBarNav(){
    return(
        <nav className="sidebar-menu">
            {/* Logos */}
            <div className="sidebar-menu_logos">
                <LogoLarge />
                <LogoSmall />
            </div>
            
            {/* Links */}
            <div className="sidebar-menu_links">
                <NavLinkItem 
                    to   = "/" 
                    icon ={ <NavOverView/> }
                    text = "OverView"
                />

                <NavLinkItem 
                    to   = "/transactions" 
                    icon = { <NavTransactions/> } 
                    text = "Transactions"
                />

                <NavLinkItem 
                    to   = "/budgets" 
                    icon = { <NavBudgets/> } 
                    text = "Budgets"
                />

                <NavLinkItem 
                    to   = "/pots" 
                    icon = { <NavPots/> } 
                    text = "Pots"
                />

                <NavLinkItem 
                    to   = "/recurring-bills" 
                    icon = { <NavRecurringBills/> } 
                    text = "Recurring Bills"
                />
            </div>
            
            {/* Botón interactivo para minimizar tamaño del munú */}
            <label className="sidebar-menu_minimizeMenu">
                <input type="checkbox" style={{ display: "none" }}/>
                <span className="sidebar-menu_minimizeMenu-icon"> <NavMinimizeMenu/> </span>
                <span className="sidebar-menu_minimizeMenu-text">Minimize Menu</span>
            </label>
        </nav>
    )
}