/---/
import { NavLink } from "react-router"
import FormRegister from "./FormRegister"
/---/

export default function SingUp(){
    return(
        <>
            <h1 className="r-bolder main-title">Sing Up</h1>

            <FormRegister
                currentForm = "Sing Up"
                formFields = {
                [
                    { fieldName: "Name", type: "name", key: "register-field-singup-name" }, 
                    { fieldName: "Email", type: "email", key: "register-field-singup-email" }, 
                    { fieldName: "Create Password", type: "password", key: "register-field-singup-password" }
                ]}
            />

            <footer className="auth-layout_main-footer">Already have an account? <NavLink to="/register/login">Login</NavLink> </footer>
        </>
    )
}