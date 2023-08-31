const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const math_operators = ['%', '*', '/', '+', '-', '='];
let output = '';

function calculate(botton_value){
    display.focus();
    if (botton_value === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (botton_value === "AC") {
        output = "";
    } else if (botton_value === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && math_operators.includes(botton_value)) return;
        output += botton_value;
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
  });

//display.addEventListener('keypress', function(e){if(e.key==='Enter'){calculate('=')}});
