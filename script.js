const amount = document.getElementById("amount");
const form = document.getElementById("form");
let tier = document.getElementById("tier");
let totalMoney = document.getElementById("totalMoney");
let membersList = document.getElementById("list");
let percentage;
let calculatedAmount;


totalMoney.innerHTML = "N0.00";

function validate() {
    let fullName = document.forms["myform"]["name"].value;
    let selectTier = document.forms["myform"]["tier"].value;
    let amountInput = document.forms["myform"]["amount"].value;
    let newInputedAmount = amount.value;


    //validations
    if(fullName == "" || (!isNaN(fullName))){
        alert("Enter your name");
    }
    if(selectTier == "Select preferred tier"){
        switch(selectTier){
            case "tier 1":
            if(newInputedAmount < 1000 || newInputedAmount > 10000){
                        alert("Amount to save must be greater than 1000 and lesser than 10000");
                    }
                    alert("Good!");
            break;
            case "tier 2":
            if(newInputedAmount < 20000 || newInputedAmount > 30000){
                        alert("Amount to save must be greater than 20000 and lesser than 30000");
                    }
                    alert("Good!");
            break;
            case "tier 3":
            if(newInputedAmount > 30000){
                        alert("Amount to save must be greater than 30000");
                    }
                    alert("Good!");
            break;
            default:
                    alert("Select a tier to proceed")
            }        
    }
    
    if(amountInput == "" ){
        alert("Input an amount to save");
    }
    else{
        alert("Registration Successful");
    }
}

