function addNewWEFeild(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "wefield", "mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let weob = document.getElementById("we");
    let weAddbuttonob = document.getElementById("weAddbutton");
    weob.insertBefore(newNode, weAddbuttonob);
}

function AddnewAQfield(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "eqfield", "mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let aqob = document.getElementById("aq");
    let aqAddbuttonob = document.getElementById("aqAddbutton");
    aqob.insertBefore(newNode, aqAddbuttonob);
}

function generateCV(){
    let namefield = document.getElementById("namefield").value;
    document.getElementById("nameT1").innerHTML = namefield;
    document.getElementById("nameT2").innerHTML = namefield;

    document.getElementById("contactT").innerHTML = document.getElementById("phonefield").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instafield").value;
    document.getElementById("linkT").innerHTML = document.getElementById("linkdinfield").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectivefield").value;

    // Handle Work Experience
    let wes = document.getElementsByClassName("wefield");
    let weContent = "";
    for (let e of wes) {
        weContent += `<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = weContent;

    // Handle Academic Qualifications
    let aqs = document.getElementsByClassName("eqfield");
    let aqContent = "";
    for (let e of aqs) {
        aqContent += `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = aqContent;  // Fixed 'aqT' typo

    // Handle Image Upload
    /*let file = document.getElementById("imgfield").files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onloadend = function () {
            document.getElementById("imgtemplate").src = reader.result;
        };
    }*/

        // Handle Image Upload
let file = document.getElementById("imgfield").files[0];
if (file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onloadend = function () {
        document.getElementById("imgtemplate").src = reader.result;
    };
}


    // Hide form and show CV template
    document.getElementById("cv-generator").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

function printcv(){
    window.print(); 
}
