/---/
import { Outlet, Navigate } from "react-router"
import { useAuth } from "../../../context/AuthContext"
/---/

export default function IsAuth(){
    const { isAuth } = useAuth();
    
    return isAuth ? <Outlet /> : <Navigate to="/register/login" />
}