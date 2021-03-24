let min =  1; 
let max = 9 ;
let correct = 0;
let mistake = 0;
let score = 0;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('.lvl').onchange = function() {
  let value = document.querySelector('.lvl').value;
  switch (value) {
    case '1': {
      min = 1;
      max = 9;
      break;
    } 
    case '2': {
      min = 10;
      max = 99;
      break;
    } 
    case '3': {
      min = 100;
      max = 999;
      break;
    } 
    default: {
      min = 1;
      max = 9;
      break;
    }
  }
}

document.querySelector(".p").onclick = function () {
  let a = random(min, max);
  let b = random(min, max);
  let c = a + b;
  let d = prompt("Enter the result \n"+ a + ' + ' + b + " =" );
  check (c, d);
}

document.querySelector(".m").onclick = function () {
  let a = random(min, max);
  let b = random(min, max);
  let c = a - b;
  let d = prompt("Enter the result \n"+ a + ' - ' + b + " =" );
  check (c, d);
}

document.querySelector(".d").onclick = function () {
  let a = random(min, max);
  let b = random(min, max);
  let c = Math.round(a/b);
  let d = prompt("Enter the result \n round answer \n"+ a + ' : ' + b + " =" );
  check (c, d);
}

document.querySelector(".mu").onclick = function () {
  let a = random(min, max);
  let b = random(min, max);
  let c = a * b;
  let d = prompt("Enter the result \n"+ a + ' * ' + b + " =" );
  check (c, d);
}

function check(c,d){
  if (c == d){
    correct++ ;
    alert("Correct " + c + '!');
  } else {
    mistake++;
    alert("Incorrect \n" + c + " is the right anwser!");
  };
  score = correct - mistake;
}



document.querySelector(".check").onclick = function (){
  if (score > 0) {
    alert("Your score is \n Correct: " + correct +"\n Incorrect: " + mistake + "\n scorre: " + score + "\n GOOD JOB! ");
  } else {
    alert("Your score is \n Correct: " + correct +"\n Incorrect: " + mistake + "\n scorre: " + score + "\n SLOW DOWN! YOU GOT IT");
  }
}



