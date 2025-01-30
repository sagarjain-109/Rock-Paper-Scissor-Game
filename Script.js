// let button = document.querySelectorAll(".button");

// for (let btn in button){
//   button.addEventListener("mouseenter",()=>{
//     button.style.border = "2px solid black";
//   })
//   button.addEventListener("mouseout",()=>{
//     button.style.border = "";
//   })
// }


let score = {
  userScore: 0,
  computerScore:0,
  summary:'You are about to start',
}
display();


function getRandom(){
  let options = ['Paper','Rock','Scissor'];
  return options[Math.floor(Math.random() *3)];
}
function reset(){
  localStorage.clear();
  display();
}


function display(){
  let scorestring = localStorage.getItem('score');
  score = JSON.parse(scorestring) || {
    userScore: 0,
    computerScore:0,
    summary:'You are about to start',
  }
  document.querySelector('#userScore').innerText = score.userScore;
  document.querySelector('#ComputerScore').innerText = score.computerScore;
  document.querySelector('.summary').innerText = score.summary;
}


// function update(){
//   let scorestring = localStorage.getItem('score');
//   score = JSON.parse(scorestring) || {
//     userScore: 0,
//     computerScore:0
//   }
//   document.querySelector('#userScore').innerText = score.userScore;
//   document.querySelector('#ComputerScore').innerText = score.computerScore;
// }

function clicked(message){
  
   let choice = getRandom();

  if((message == 'Rock' && choice == 'Scissor')|| (message == 'Paper' &&  choice == 'Rock') || (message == 'Scissor' && choice == 'Paper')){
     score.summary = `Your choice is ${message} and Computer choice is ${choice} So User Won`;
    score.userScore++;
  }
  else if((message == 'Rock' && choice == 'Rock')|| (message == 'paper' &&  choice == 'Paper') || (message == 'Scissor' && choice == 'Scissor')){
    score.summary = `Your choice is ${message} and Computer choice is ${choice} So Game Drawn`;
  }
  else{
    score.summary = `Your choice is ${message} and Computer choice is ${choice} So Computer Won`;
    score.computerScore++;
  }
  
  
  localStorage.setItem('score',JSON.stringify(score));
  display();
  
  
  
}


