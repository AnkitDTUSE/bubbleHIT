function draw() {
  var bubbles = "";
  for (let i = 1; i < 172; i++) {
    let ranDom = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${ranDom}</div>`;
  }
  document.querySelector(".bottom").innerHTML = bubbles;
}

let time = 60;
let flag2;
const over = `<div class="over"><p>Game Over</p></div>`;
function timer() {
  let pause =  setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#Timer").innerHTML = time;
      console.log(time);
      
    } else {
      flag2=1;
      clearInterval(pause);
      document.querySelector(".bottom").textContent = "";
      document.querySelector(".bottom").innerHTML = over;
      document.querySelector(".bottom").style.cssText= 'pointer-events:none';
      document.querySelector('#hitIt').innerHTML=' ';
    }
  }, 1000);
}

let ranDomNum = 0;

function changeHit() {
  ranDomNum = Math.floor(Math.random() * 10);
  document.querySelector("#hitIt").innerHTML = ranDomNum;
}

let score = 0;

function newScore() {
  score += 10;
  document.querySelector("#urScore").innerHTML = score;
}
let flag = 0;
function clickFun ()  {
  flag=1;
  draw();
  changeHit(); 
  timer();
  document.querySelector('.play').style.cssText='background-color:grey;pointer-events:none';
  document.querySelector('.play').innerHTML='_____';
   
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

console.log(flag2);

if(flag2){
  console.log(flag2);
  document.querySelector('.play').style.cssText='pointer-events:auto';
  document.querySelector('.play').innerHTML='playagain';
  }