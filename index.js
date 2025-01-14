function getClicked(value){
   console.log(value);
   let clickedItem = value;
   let elem = document.getElementById("calculatorinput");
   elem.value += clickedItem;

   return value
}

//fazer a conta que esta no display do input
function getSubmit(){
    let elem = document.getElementById("calculatorinput");
    let expression = elem.value;

    elem.value = eval(expression);
}

function resetCalculator(){
    let elem = document.getElementById("calculatorinput");
    elem.value = '';
}

function turnNegPos(){
    let elem = document.getElementById("calculatorinput");
    let currentValue = elem.value;

    let lastOperatorIndex = Math.max(
        currentValue.lastIndexOf("+"),
        currentValue.lastIndexOf("−"),
        currentValue.lastIndexOf("*"),
        currentValue.lastIndexOf("/")
    );

    let beforeLastNumber = currentValue.slice(0, lastOperatorIndex + 1);
    let lastNumber = currentValue.slice(lastOperatorIndex + 1);

    if (lastNumber.startsWith("-")) {
        // If the last number is negative, make it positive
        lastNumber = lastNumber.substring(1);
    } else {
        // If the last number is positive, make it negative
        lastNumber = "-" + lastNumber; 
    }

    // Rebuild the input value with the toggled last number
    elem.value = beforeLastNumber + lastNumber;
}



