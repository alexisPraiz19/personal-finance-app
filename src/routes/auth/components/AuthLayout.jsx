/---/
import { Outlet } from "react-router"
import SideBar from "./SideBar"
import "../css/authLayout.css"
/---/

export default function AuthLayout(){
    return(
        <div className="auth-layout">
            <SideBar/>

            <main className="auth-layout_main">
                <Outlet/>
            </main>
        </div>
    )
}