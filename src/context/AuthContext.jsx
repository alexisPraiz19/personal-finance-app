/---/
import { createContext, useState, useContext } from "react"
import setAuth from "../routes/auth/func/setAuth"
/---/

const AuthContext = createContext({});

// Este contexto contiene el Estado de la autenticidad del usuario (TRUE/FALSE). Además añade unos datos al
// LocalStorage mediante la función "setAuth"
export default function AuthContextProvider({ children }){
    setAuth();
    const getStorage = (name) => JSON.parse(localStorage.getItem(name));
    const [isAuth, setIsAuth] = useState(getStorage("loged"));
    
    return(
        <AuthContext value={{
            isAuth,
            toggleAuth: () => setIsAuth(getStorage("loged"))
        }}>
            { children }
        </AuthContext>
    )
}

export const useAuth = () => useContext(AuthContext);