// Theme Toggle

function toggleTheme() {

    document.body.classList.toggle("dark");

    let themeBtn = document.querySelector(".theme");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML = "☀️";

        localStorage.setItem("theme", "dark");

    }
    else {

        themeBtn.innerHTML = "🌙";

        localStorage.setItem("theme", "light");

    }

}



// Load Theme

window.onload = function () {

    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        document.querySelector(".theme").innerHTML = "☀️";

    }

    loadHistory();

};





// Attendance Calculation

function calculate() {

    let total = Number(document.getElementById("total").value);

    let attended = Number(document.getElementById("attended").value);

    let target = Number(document.getElementById("target").value);



    if (total <= 0 || attended < 0 || attended > total) {

        alert("Enter valid class details");

        return;

    }



    let percentage = ((attended / total) * 100).toFixed(2);



    let circle = document.querySelector(".circle");

    let percentText = document.getElementById("percentage");


    percentText.innerHTML = percentage + "%";


    // Progress Circle

    let degree = percentage * 3.6;


    if (percentage >= target) {

        circle.style.background =
            `conic-gradient(#16a34a ${degree}deg, #e5e7eb ${degree}deg)`;

        percentText.style.color = "#16a34a";

        circle.classList.add("good");

        circle.classList.remove("bad");

    }

    else {

        circle.style.background =
            `conic-gradient(#dc2626 ${degree}deg, #e5e7eb ${degree}deg)`;

        percentText.style.color = "#dc2626";

        circle.classList.add("bad");

        circle.classList.remove("good");

    }



    let status = document.getElementById("status");

    let details = document.getElementById("details");



    if (percentage >= target) {

        status.innerHTML = "✅ Good Attendance";

        details.innerHTML =
            "You are above the required percentage.";

    }

    else {

        let needed = Math.ceil(
            ((target * total) - (100 * attended)) / (100 - target)
        );


        status.innerHTML = "⚠️ Low Attendance";

        details.innerHTML =
            "Attend next " + needed + " classes continuously.";

    }



    saveHistory(total, attended, percentage);

}





// Save History

function saveHistory(total, attended, percentage) {


    let history = JSON.parse(localStorage.getItem("history")) || [];


    let data = {

        total: total,

        attended: attended,

        percentage: percentage,

        date: new Date().toLocaleString()

    };


    history.push(data);


    localStorage.setItem("history", JSON.stringify(history));


    loadHistory();

}





// Display History

function loadHistory() {


    let list = document.getElementById("historyList");


    if (!list) return;


    list.innerHTML = "";


    let history = JSON.parse(localStorage.getItem("history")) || [];



    history.reverse().forEach(item => {


        let li = document.createElement("li");


        li.innerHTML = `

        📅 ${item.date}<br>

        Total Classes: ${item.total} |

        Attended: ${item.attended}<br>

        Percentage: ${item.percentage}%

        `;


        list.appendChild(li);


    });


}





// Delete History

function deleteHistory() {


    localStorage.removeItem("history");


    document.getElementById("historyList").innerHTML = "";


    alert("History deleted successfully!");

}

localStorage.setItem(
"history",
JSON.stringify(history)
);