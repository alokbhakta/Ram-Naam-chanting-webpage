const mainTitle = document.querySelector('#title');
let curValue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click', () => {
  curValue++;
  mainTitle.textContent = curValue;
});

let play = document.getElementById("increment");
   function playMusic(){
    let audio = new Audio("ram_sms_tone.mp3");
    audio.play()
   }
   play.addEventListener("click",playMusic);

/* btnDecrement.addEventListener('click', () => {
  curValue--;
  mainTitle.textContent = curValue;
}); */

btnReset.addEventListener('click', () => {
  curValue = 0;
  mainTitle.textContent = curValue;
});