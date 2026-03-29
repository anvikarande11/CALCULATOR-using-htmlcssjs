// 1. Setup Audio & Elements
// Make sure your HTML <audio> tag has id="keySound"
const audio = document.getElementById("keySound");
const display = document.getElementById("display");
const pet = document.getElementById('pet-character');

function playClick() {
    if (audio) {
        audio.currentTime = 0; 
        audio.play();
    }
}

// 2. Pet Logic
function updatePet(mood) {
    if (pet) {
        pet.innerText = mood;
        pet.classList.add('pet-react');
        setTimeout(() => pet.classList.remove('pet-react'), 200);
    }
}

// 3. Calculator Functions
function appendToDisplay(input) {
    playClick();
    display.value += input;
    
    const typingMoods = ['(>ᴗ<)', '( ^▿^)', '(o_o)', '( •⌄• )'];
    const randomMood = typingMoods[Math.floor(Math.random() * typingMoods.length)];
    updatePet(randomMood);
}

function cleardisplay() {
    playClick();
    display.value = "";
    updatePet('( -_ -)zZ'); 
}

function Backspace() {
    playClick();
    display.value = display.value.slice(0, -1);
    updatePet('(•ˋ _ ˊ•)'); 
}

function calculate() {
    playClick();
    try {
        let expression = display.value;
        // Handle percentages
        expression = expression.replace(/%/g, '/100');
        
        // Solve the math
        const result = eval(expression);
        
        // Check if result is valid
        if (result === undefined || isNaN(result)) {
            throw new Error();
        }

        display.value = result;
        updatePet('(✧ω✧)'); 
    } catch (error) {
        display.value = "Error";
        updatePet('(╥﹏╥)'); 
    }
}

function toggleSign() {
    playClick();
    if (display.value === "") return;
    if (!isNaN(display.value)) {
        display.value = String(-Number(display.value));
        return;
    }
}

// 4. Sparkle Effect
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        let sparkle = document.createElement('span');
        sparkle.innerText = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.fontSize = '20px';
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = 'fadeUp 0.8s forwards';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 800);
    });
});

// 5. Theme Switcher Function (Make sure this is here!)
function setTheme(main, accent, screen) {
    const root = document.querySelector(':root');
    root.style.setProperty('--main-bg', main);
    root.style.setProperty('--accent-color', accent);
    root.style.setProperty('--screen-bg', screen);
    updatePet('✨👗✨');
}
