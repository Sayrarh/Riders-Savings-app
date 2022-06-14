let name = document.getElementById("name");
let amount = document.getElementById("amount");
const form = document.getElementById("form");
let tier = document.getElementById("tier");
let interest;

//functions
function showError(input, message) {
    let formContent = input.parentElement
    formContent.className = "form-content error"
    let small = formContent.querySelector("small")
    small.innerText = message
}

/*function showErrorSelect(select, message) {
    let formContent = select.parentElement
    formContent.className = "form-content error"
    let small = formContent.querySelector("small")
    small.innerText = message
}*/

function showSuccess(input){
    let formContent = input.parentElement
    formContent.className = "form-content success"
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ""){
            showError(input, `${input.id} is required.` )
        }else{
            showSuccess(input)
        }
    })
}

//Event listener
form.addEventListener("submit", function(event) {
    event.preventDefault()
    checkRequired([name, tier, amount])
})