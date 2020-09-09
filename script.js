window.addEventListener("load", function() {


    const listButton = document.getElementById("list");
    const astronautBios = document.getElementById("bio");
    listButton.addEventListener("click", function() {
        fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
            response.json().then(function(json) {


                astronautBios.innerHTML = "";

                for (let index = 0; index < json.length; index++) {
                    let active = "";
                    if (json[index].active) {
                        active = `<li style="color:green;">Active: ${json[index].active}</li>`
                    } else {
                        active = `<li style="color:red;">Active: ${json[index].active}</li>`
                    }

                    let test =
                        `<div class="astronaut"><h3>${json[index].firstName} ${json[index].lastName}</h3>
                        <ul>
                        <li>Hours in space: ${json[index].hoursInSpace}</li>${active}
                        <li> Skills: ${json[index].skills} </li> 
                        </ul>
                        <img class="avatar" src = ${json[index].picture} height=250></img></div>`;
                    astronautBios.innerHTML = astronautBios.innerHTML + test;
                }
            });

        });

        function compareNumbers(a, b) {
            return b.hoursInSpace - a.hoursInSpace;
        }
        const sortButton = document.getElementById("sort");
        sortButton.addEventListener("click", function() {
            fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
                response.json().then(function(json) {
                    astronautBios.innerHTML = "";
                    json.sort(compareNumbers);

                    for (let index = 0; index < json.length; index++) {
                        let active = "";
                        if (json[index].active) {
                            active = `<li style="color:green;">Active: ${json[index].active}</li>`
                        } else {
                            active = `<li style="color:red;">Active: ${json[index].active}</li>`
                        }

                        let test =
                            `<div class="astronaut"><h3>${json[index].firstName} ${json[index].lastName}</h3>
                        <ul>
                        <li >Hours in space: ${json[index].hoursInSpace}</li>${active}
                        <li> Skills: ${json[index].skills} </li> 
                        </ul>
                        <img class="avatar" src = ${json[index].picture} height=250></img></div>`;
                        astronautBios.innerHTML = astronautBios.innerHTML + test;
                    }

                });
            });

        });
    });

});