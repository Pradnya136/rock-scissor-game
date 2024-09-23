const options = ['rock-div','paper-div','scissor-div'];

const userSelected= localStorage.getItem('userSelection');

const pcSelected = options[Math.floor(Math.random()*options.length)];
console.log("user selected = ", userSelected)
console.log("pc selected=",pcSelected)
const userChoiceDiv = document.getElementById('user-choice');
const computerChoiceDiv = document.getElementById('pc-choice');

userChoiceDiv.classList.add(userSelected);
computerChoiceDiv.classList.add(pcSelected);