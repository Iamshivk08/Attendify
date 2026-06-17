window.onload = function () {


    if (localStorage.getItem("isLoggedIn") !== "true") {

        window.location.href = "login.html";

    }



    loadCharts();


}





function logout() {

    localStorage.removeItem("isLoggedIn");

    window.location.href = "login.html";

}





function loadCharts() {



    // Weekly Attendance Chart

    new Chart(
        document.getElementById("weeklyChart"),
        {


            type: "line",


            data: {


                labels: [
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun"
                ],


                datasets: [{


                    label: "Attendance %",


                    data: [
                        90,
                        85,
                        75,
                        88,
                        92,
                        80,
                        86
                    ],


                    borderWidth: 3


                }]


            }



        });








    // Subject Chart


    new Chart(

        document.getElementById("subjectChart"),

        {


            type: "bar",


            data: {


                labels: [

                    "Java",

                    "DBMS",

                    "Math",

                    "OS"

                ],



                datasets: [{


                    label: "Attendance %",


                    data: [

                        85,
                        78,
                        70,
                        82

                    ],


                    borderWidth: 1


                }]


            }



        });


}






function toggleTheme() {

    document.body.classList.toggle("dark");

}