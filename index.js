

const options = ['rock-div','paper-div','scissor-div'];

const userSelected= localStorage.getItem('userSelection');

const pcSelected = options[Math.floor(Math.random()*options.length)];

console.log("user selected : ", userSelected)
console.log("pc selected : ",pcSelected)

const userChoiceDiv = document.getElementById('user-choice');
const computerChoiceDiv = document.getElementById('pc-choice');

userChoiceDiv.classList.add(userSelected);
computerChoiceDiv.classList.add(pcSelected);

const imageMap = {
    'rock-div': 'assests/rock.png',
    'paper-div': 'assests/paper.png',
    'scissor-div': 'assests/scissor.png'
};

document.getElementById('user-choice-image').src = imageMap[userSelected] || 'assets/default.png';
document.getElementById('computer-choice-image').src = imageMap[pcSelected] || 'assets/default.png';


let userCount = parseInt(localStorage.getItem('userCount')) || 0;
let pcCount = parseInt(localStorage.getItem('pcCount')) || 0;


let result;
let winnerText = 'ITS TIE';
let nextButton = document.getElementById('next-btn'); 
if (userSelected === pcSelected) {
    result = "It's a tie!";

} else if (
    (userSelected === 'rock-div' && pcSelected === 'scissor-div') ||
    (userSelected === 'scissor-div' && pcSelected === 'paper-div') ||
    (userSelected === 'paper-div' && pcSelected === 'rock-div')
) {
    result = "You won!";
    userCount++;
    winnerText = "YOU WON THE GAME";
    userChoiceDiv.classList.add('winner-effect'); 
} else {
    result = "You lose!";
    pcCount++;
    winnerText = "PC WON THE GAME";
    computerChoiceDiv.classList.add('winner-effect'); 
}

localStorage.setItem('winner', winnerText);
const resultDiv = document.getElementById('result-text');
resultDiv.textContent = result;


localStorage.setItem('userCount', userCount);
localStorage.setItem('pcCount', pcCount);


document.getElementById('user-count').textContent = ` ${userCount}`;
document.getElementById('pc-count').textContent = ` ${pcCount}`;