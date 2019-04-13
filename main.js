// Create an empty array for new developers

let developerArray = [];

// Declare a variable called elBody and assign it the id of "my-Body"

let elBody = document.getElementById("my-Body");

// Declare a variable called elTable and assign it the id of "developer-Table"

let elTable = document.getElementById("developer-Table");

// Declare a variable called elForm and assign it the id of "new-developer"

let elForm = document.getElementById("submit-Developer");

// Create a function constructor for the developers

function Developer (name, school, language){
    this.name = name;
    this.school = school;
    this.language = language;
}


//Create local storage

let storageDeveloperArray = [];

if(localStorage.length > 0) {
    let getDeveloperArray = localStorage.getItem("storageDeveloperArray")
    developerArray = JSON.parse(getDeveloperArray);
   
} else {


//Create instances from the constructor function

let Joseph = new Developer ("Joseph", "Code Partners", "JavaScript");

let Alyssa = new Developer ("Alyssa", "Flatiron School", "Python");

let Prince = new Developer ("Prince", "App Academy", "Java");

// Push the instances in the developerArray

developerArray.push(Joseph, Alyssa, Prince);
//localStorage.setItem("storageDeveloperArray", JSON.stringify(developerArray));

}


// Create a function that display the header of the table

function displayHeader () {
    let elRowHeader = document.createElement("tr");
    elTable.appendChild(elRowHeader);
    let headerArray = ["Developer Name", "Coding School", "Programming Language"];
    for (i = 0; i < headerArray.length; i++){
        let elHeaderTable = document.createElement("th");
        elRowHeader.appendChild(elHeaderTable).innerHTML = headerArray[i];
    }
}



displayHeader();

// Create a function that displays the list of developers

function displayDevelopers (developer) {
    let elRowDeveloper = document.createElement("tr");
    elTable.appendChild(elRowDeveloper);

    let elTdName = document.createElement("td");
    elRowDeveloper.appendChild(elTdName).innerHTML = developer.name;

    for(let i = 1; i < developerArray.length; i++){

        let elTdSchool = document.createElement("td");
        elRowDeveloper.appendChild(elTdSchool).innerHTML = developer.school;

        break;

    }

    let elTdLanguage = document.createElement("td");
    elRowDeveloper.appendChild(elTdLanguage).innerHTML = developer.language;
    
}


/* Declare variables called devName, devSchool, devLanguage 
and assign them the values of the inputs devName, devSchool, devLanguage */

let devName = elForm.devName;

let devSchool = elForm.devSchool;

let devLanguage = elForm.devLanguage;

// Define a function called "addNewDeveloper" to let user add a new developer with the form

function addNewDeveloper(e){

    e.preventDefault();
    let newDeveloper = new Developer(devName.value, devSchool.value, devLanguage.value);
    developerArray.push(newDeveloper);
    
    let saveNewDeveloper = localStorage.setItem("storageDeveloperArray", JSON.stringify(developerArray));
   displayDevelopers(newDeveloper);

  

}


elForm.addEventListener('submit', addNewDeveloper);

function populateTable () {
    for (let i = 0; i < developerArray.length; i++) {
        displayDevelopers(developerArray[i]);
    }
   
}
 
populateTable();
