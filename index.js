let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

eyeIcon.onclick = ()=>{
    if(password.type == "password"){
        password.type = "text";
        eyeIcon.src="images/eye-open.png";

    }else{
        password.type = "password";
        eyeIcon.src="images/eye-close.png";
    }
}

document.getElementById("icon").onclick = ()=>{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="images/sun.png";
    }else{
        icon.src = "images/moon.png";
    }
};
