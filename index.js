
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function cleardisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function Backspace(){
    display.value=display.value.slice(0,-1);
}
function toggleSign() {
    if (display.value === "") return;

    // Case 1: whole display is a number
    if (!isNaN(display.value)) {
        display.value = String(-Number(display.value));
        return;
    }

    // Case 2: expression exists → change last number
    let exp = display.value;
    let match = exp.match(/(-?\d+\.?\d*)$/);

    if (match) {
        let num = match[0];
        let toggled = String(-Number(num));
        display.value = exp.slice(0, -num.length) + toggled;
    }
}
