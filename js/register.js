function register() {


    let name = document.getElementById("name").value;

    let roll = document.getElementById("roll").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;




    if (name === "" || roll === "" || email === "" || password === "") {


        alert("Please fill all details");

        return;

    }




    let user = {


        name: name,

        roll: roll,

        email: email,

        password: password


    };





    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );




    alert("Registration Successful ✅");



    window.location.href = "login.html";



}