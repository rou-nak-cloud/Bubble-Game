var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function newHit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble(){
    var clutter="";

for(var i=1; i<=152; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pBtm").innerHTML = clutter;
}

function setTimer(){
   var timerStop = setInterval(() => {
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerStop);
            document.querySelector("#pBtm").textContent = "Game Over"
        }
    }, 1000);
}


document.querySelector("#pBtm").addEventListener("click", function(details){
  var clickedNumber = Number(details.target.textContent);

  details.target.style.transition = "transform 0.3s ease";
  details.target.style.transform = "scale(0)";
  
  if(clickedNumber === hitrn){
    increaseScore();
    newHit();
    makeBubble();
    setTimeout(makeBubble, 300);
  }
})

newHit();
setTimer();
makeBubble();
