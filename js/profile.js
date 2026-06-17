window.onload=function(){


if(localStorage.getItem("isLoggedIn") !== "true"){

window.location.href="login.html";

return;

}


loadProfile();

loadAttendance();


}






function logout(){

localStorage.removeItem("isLoggedIn");

window.location.href="login.html";

}








function saveProfile(){


let profile={


name:
document.getElementById("name").value,


email:
document.getElementById("email").value,


roll:
document.getElementById("roll").value,


department:
document.getElementById("department").value,


phone:
document.getElementById("phone").value



};



localStorage.setItem(
"profile",
JSON.stringify(profile)
);



loadProfile();



alert("Profile Saved");


}








function loadProfile(){


let profile =
JSON.parse(localStorage.getItem("profile"));



if(profile){



document.getElementById("name").value =
profile.name;



document.getElementById("email").value =
profile.email;



document.getElementById("roll").value =
profile.roll;



document.getElementById("department").value =
profile.department;



document.getElementById("phone").value =
profile.phone;




document.getElementById("displayName").innerHTML =
profile.name;



document.getElementById("displayEmail").innerHTML =
profile.email;


}


}








function loadAttendance(){


let history =
JSON.parse(localStorage.getItem("history")) || [];



let total=0;

let attended=0;



history.forEach(item=>{


total += Number(item.total);

attended += Number(item.attended);


});



let percentage=0;



if(total>0){

percentage =
((attended/total)*100).toFixed(2);

}



document.getElementById("total").innerHTML =
total;



document.getElementById("attended").innerHTML =
attended;



document.getElementById("percentage").innerHTML =
percentage+"%";



}







function toggleTheme(){

document.body.classList.toggle("dark");

}