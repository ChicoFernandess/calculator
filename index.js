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