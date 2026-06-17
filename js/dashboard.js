// Login Protection

window.onload=function(){

    if(localStorage.getItem("isLoggedIn") !== "true"){

        window.location.href="login.html";

    }

};




// Logout

function logout(){

    localStorage.removeItem("isLoggedIn");

    window.location.href="login.html";

}



// Dark Mode

function toggleTheme(){

    document.body.classList.toggle("dark");


}