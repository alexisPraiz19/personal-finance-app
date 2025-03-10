/---/
import { NavLink } from "react-router"
import FormRegister from "./FormRegister"
/---/

export default function Login(){
    return(
        <>
            <h1 className="r-bolder main-title">Login</h1>

            <FormRegister
                currentForm = "Login"
                formFields = {
                [
                   { fieldName: "Email", type: "email", key: "register-field-login-email" },
                   { fieldName: "Password", type: "password", key: "register-field-login-password" }
                ]}
            />

            <footer className="auth-layout_main-footer">Need to create an account? <NavLink to="/register/singup">Sing Up</NavLink> </footer>
        </>
    )
}