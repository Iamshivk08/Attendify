window.onload=function(){


if(localStorage.getItem("isLoggedIn") !== "true"){

window.location.href="login.html";

}


loadRecords();

}




function logout(){

localStorage.removeItem("isLoggedIn");

window.location.href="login.html";

}





function loadRecords(){


let table =
document.getElementById("recordTable");



let history =
JSON.parse(localStorage.getItem("history")) || [];



table.innerHTML="";



history.reverse().forEach((item,index)=>{


let status;


let className;



if(item.percentage >= 75){

status="Good ✅";

className="good";

}

else{

status="Low ❌";

className="bad";

}





let row=document.createElement("tr");



row.innerHTML=`

<td>
${item.date}
</td>


<td>
${item.total}
</td>


<td>
${item.attended}
</td>


<td>
${item.percentage}%
</td>


<td class="${className}">
${status}
</td>


<td>

<button class="delete"
onclick="deleteRecord(${index})">

Delete

</button>

</td>

`;



table.appendChild(row);



});



}








function deleteRecord(index){


let history =
JSON.parse(localStorage.getItem("history")) || [];



history.splice(index,1);



localStorage.setItem(
"history",
JSON.stringify(history)
);



loadRecords();


}








function toggleTheme(){

document.body.classList.toggle("dark");

}