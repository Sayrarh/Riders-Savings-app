let name = document.getElementById("name");
let amount = document.getElementById("amount");
const form = document.getElementById("form");
let tier = document.getElementById("tier");
let interest;
let percentage;


function validate() {
    let fullName = document.forms["myform"]["name"].value;
    let selectTier = document.forms["myform"]["tier"].value;
    let amountInput = document.forms["myform"]["amount"].value

    //validations
    if(fullName == "" || (!isNaN(fullName))){
        alert("Enter your name");
    }
    if(selectTier == "Select preferred tier"){
        alert("Select a tier!");
    }
    if(amountInput == "" ){
        alert("Input an amount");
    }
}



