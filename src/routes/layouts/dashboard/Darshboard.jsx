/---/
import SideBarNav from "./SideBarNav"
import DataContextProvider from "../../../context/DataContext"
import { Outlet } from "react-router"
import "../indexLayout.css"
/---/

export default function Dashboard(){
    return(
        <div className="dashboard">
            <SideBarNav/>
            
            <DataContextProvider>
                <main className="main" id="main">
                    <Outlet/>{/* Será sección Overview/Transactions/Budgets/Pots/RecurringBills */}
                </main>
            </DataContextProvider>
        </div>
    )
}