/---/
import { useNavigate } from "react-router"
import { useAuth } from "../../../context/AuthContext"
import { handleForm } from "../func/handleForm"
/---/

export default function FormRegister({ currentForm, formFields }){
    const { toggleAuth } = useAuth();
    const  navigate      = useNavigate();

    return(
        <form className="form-register" currentform={ currentForm } onSubmit={e => handleForm(e, toggleAuth, navigate)}>
            {
                formFields.map(({ fieldName, type, key }) => (
                    <label className="form-register_label r-bolder" key={ key }>
                        <span className="form-register_label-fieldName">{ fieldName }</span>
                        <input type={ type } name={ type } className="form-register_input" required autoComplete="off"/>
                    </label>
                ))
            }
            
            <button type="submit" className="form-register_button r-bolder">{ currentForm }</button>
        </form>
    )
}