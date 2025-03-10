export function handleForm(e, toggleAuth, navigate){
    e.preventDefault();
    const  target      = e.target,
           form        = target.closest(".form-register"),
           userData    = Object.fromEntries(new FormData(form));
    
    switch(form.getAttribute("currentform")){
        case "Login": 
            const storageInfo = JSON.parse(localStorage.getItem("dataUser-session"));
            
            if(storageInfo == null){ alert("Error: Make sure to create your User"); return }
        
            if(userData.email != storageInfo.user.email || userData.password != storageInfo.user.password) alert("Error: Make sure to fill in the fields well");
            else{
                localStorage.setItem("loged", "true");
                toggleAuth(); navigate("/");
            }
        ; break;

        case "Sing Up": 
           localStorage.setItem("dataUser-session", JSON.stringify({ user: userData }));
           navigate("/register/login");
        ; break;
    }
}