/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "correct Number";
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
*/

let secretNum = Math.trunc(Math.random() * 20) +1;
let scoreNum= 20;
let highscore=0;

document.querySelector('.check').addEventListener('click',function(){
  const guess=Number(document.querySelector('.guess').value);
   if(!guess){
    document.querySelector('.message').textContent='No number!';
   }
   else if(guess===secretNum){
    document.querySelector('.message').textContent='correct Number';
    document.querySelector('.number').textContent = secretNum;
    //scoreNum++;
    document.querySelector('.score').textContent=scoreNum;
    document.querySelector('body').style.backgroundColor='#60b347';
    if(scoreNum>highscore){
        highscore=scoreNum;
        document.querySelector('.highscore').textContent=scoreNum;
    }
   }
   else if (guess>secretNum){
    if(scoreNum>1){
        document.querySelector('.message').textContent='Too High Number !';
    scoreNum--;
    document.querySelector('.score').textContent=scoreNum;
    }
    else{
        document.querySelector('.message').textContent='You lost the game !';
        document.querySelector('.score').textContent=0;
    }
    
   }
   else if (guess<secretNum){
    if(scoreNum>1){
    document.querySelector('.message').textContent='Too Low Number !';
    scoreNum--;
    document.querySelector('.score').textContent=scoreNum;
    }
    else{
        document.querySelector('.message').textContent = 'You lost the Game !';
        document.querySelector('.score').textContent = 0;
    }
   }
});

document.querySelector('.again').addEventListener('click',function(){
    scoreNum=20;
    secretNum = Math.trunc(Math.random() * 20) +1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=scoreNum;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='black';
})







