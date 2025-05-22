function draw() {
  var bubbles = "";
  for (let i = 1; i < 172; i++) {
    let ranDom = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${ranDom}</div>`;
  }
  document.querySelector(".bottom").innerHTML = bubbles;
}

let time = 61;
let score=0;
let flag =0;
let flag2 =0;
let ranDomNum = 0;

function changeHit() {
  ranDomNum = Math.floor(Math.random() * 10);
  document.querySelector("#hitIt").innerHTML = ranDomNum;
}
function newScore() {
  score += 10;
  document.querySelector("#urScore").textContent = score;
}

function timer() {
  let pause =  setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#Timer").innerHTML = time;
      console.log(time);
      
    } 
    else {
      clearInterval(pause);
      const over = `<div class="over"><p>Game Over</p><p>Your score is: ${score}</div>`;
      document.querySelector('.play').style.cssText='pointer-events:auto;padding:5px';
      document.querySelector('.play').textContent='Playagain';
      document.querySelector(".bottom").textContent = "";
      document.querySelector(".bottom").innerHTML = over;
      document.querySelector(".bottom").style.cssText= 'pointer-events:none';
      document.querySelector('#hitIt').innerHTML=' ';
      flag=0;
      
    }
  }, 1000);
}

function clickFun (){
  const textButton=document.querySelector('.play').textContent.trim();
  if(textButton === 'Start' || textButton === 'Playagain'){ 
  flag=1;
  time=61;
  score=0;
  draw();
  changeHit(); 
  timer();
  document.querySelector('.play').style.cssText='background-color:grey;pointer-events:none';
  document.querySelector(".bottom").style.cssText= 'pointer-events:auto';
  document.querySelector("#urScore").textContent = '0';
}
}
  
document.querySelector(".play").addEventListener("click",clickFun);

document.querySelector(".bottom").addEventListener("click", (event) => {
  let click = Number(event.target.textContent); //typecasting
  if ((ranDomNum === click || typeof(click)==="number") && flag!==0) {
    draw();
    if(ranDomNum === click && flag!==0){
        changeHit();
        newScore();
    }
  }
});
