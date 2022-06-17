const amount = document.getElementById("amount");
const form = document.getElementById("form");
let tier = document.getElementById("tier");
let totalMoney = document.getElementById("totalMoney");
let membersList = document.getElementById("members");
let percentage; //interest percentage
let interestMsg = document.getElementById("interest");
let calculatedAmount;
let list = []; //array of riders
let totalMoneyAdd;
let amountToWithDraw;



form.addEventListener("submit", function(event) {
    event.preventDefault();//avoid page reload
});

totalMoneyAdd = parseInt(totalMoney.innerHTML);
console.log(totalMoneyAdd);


//function for name, tier and amount validations
function validate() {
    let fullName = document.forms["myform"]["name"].value;
    let selectTier = document.forms["myform"]["tier"].value;
    let newInputedAmount = amount.value;

    amountToWithDraw = document.getElementById("amt-with");

    percentage = 0.00;


    if(fullName == "" || (!isNaN(fullName))){
        alert("Enter your name");
    }
    if(selectTier != "Select preferred tier"){
        switch(selectTier){
            case "tier 1":
            if(newInputedAmount < 1000 || newInputedAmount > 10000){
                        alert("Amount to save must be greater than 1000 and lesser than 10000");
                        return true;
                    }else{
                        percentage = 0.07;
                    }
            break;
            case "tier 2":
            if(newInputedAmount < 20000 || newInputedAmount > 30000){
                        alert("Amount to save must be greater than 20000 and lesser than 30000");
                        return true;
                    }else{
                        percentage = 0.12;
                    }
            break;
            case "tier 3":
            if(newInputedAmount < 30000){
                        alert("Amount to save must be greater than 30000");
                        return true;
                    }else{
                        percentage = 0.25;
                    }
            break;
            default:
                    alert("Select a tier to proceed");
            }     

        }else{
            alert("Select a tier to proceed");
        }

    //newInputedAmount = parseFloat(newInputedAmount);
    totalMoneyAdd += Number(newInputedAmount);//code to update the newInputedAmount
    totalMoney.innerHTML = totalMoneyAdd;
    console.log(percentage);
    
    calculatedAmount = percentage * newInputedAmount; //Calculating interest per week
    calculatedAmount = calculatedAmount.toFixed(2);
    interestMsg.textContent = "Your weekly interest is: #" + calculatedAmount;

    amountToWithDraw.innerHTML =  Number(newInputedAmount) + (percentage * Number(newInputedAmount));// amount to draw with interest

    list.push(fullName + " -> " + newInputedAmount); //pushing name to the group members list 
    membersList.innerHTML = list; //display the list
    

    
if(newInputedAmount == "" || newInputedAmount.length == 0){
        alert("Input an amount to save");
    }
else{
        alert("Registration Successful");
    }
}
