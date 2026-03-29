
const display = document.getElementById("display");
const pet = document.getElementById('pet-character');

function updatePet(mood) {
    pet.innerText = mood;
    // Add a quick visual "pop" effect
    pet.classList.add('pet-react');
    setTimeout(() => pet.classList.remove('pet-react'), 200);
}
function appendToDisplay(input){
    display.value += input;
    // Character looks busy/excited while typing
    const typingMoods = ['(>ᴗ<)', '( ^▿^)', '(o_o)', '( •⌄• )'];
    const randomMood = typingMoods[Math.floor(Math.random() * typingMoods.length)];
    updatePet(randomMood);
}

function cleardisplay(){
    display.value = "";
    updatePet('( -_ -)'); // Sleepy/bored face when empty
}

function calculate(){
    try{
        display.value = eval(display.value);
        updatePet('(*^▽^*)'); // Happy face for a successful math!
    } catch {
        display.value = "Error";
        updatePet('(╥﹏╥)'); // Sad face if the math is wrong
    }
}

function Backspace(){
    display.value=display.value.slice(0,-1);
    updatePet('(•ˋ _ ˊ•)'); // Annoyed face for deleting
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
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        let sparkle = document.createElement('span');
        sparkle.innerText = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'fadeUp 0.8s forwards';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 800);
    });
});
