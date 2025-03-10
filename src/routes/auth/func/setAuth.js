// Con esta función se establece en el LocalStorage el contexto del usuario respecto a la autenticación
export default function setAuth(){
    const getStorage = (name) => localStorage.getItem(name);
    const setStorage = (name, content) => localStorage.setItem(name, content);

    if(!getStorage("loged")) setStorage("loged", "false");

    if(!getStorage("dataUser-session")){
        setStorage("dataUser-session", null)
    }
}