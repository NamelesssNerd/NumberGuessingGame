const NumberDiv = document.getElementById('NumberDiv');
const Message = document.getElementById('Message');
const Wrong = document.getElementById('Wrong');
const Welcome = document.getElementById('Welcome');
const Haryo = document.getElementById('Haryo');
const Won = document.getElementById('Won');
const Start = document.getElementById('Start');
const ButtonSHow = document.getElementById('ButtonSHow');
const Time = document.getElementById('Time');
const Reason = document.getElementById('Reason');
const Lose = document.getElementById('Lose');
const Loss = document.getElementById('Loss');
const Congra = document.getElementById('Congra');
const Congratulation = document.getElementById('Congratulation');
const SmallerNumber = 'Select Smaller Number';
const BiggerNumber = 'Select Bigger Number';
const TTOFF = 'Sorry Your Time is Over!'
const Resss = 'Sorry Your Chances Are Over!'
var RandomNumber;
var Chances = 10;
var TimeCount = 60;
for (var i = 1; i <= 100; i++) {
    const Data = `<div id="N" onclick="Check(${i})">
    <h4>${i}</h4>
</div>`;
    NumberDiv.insertAdjacentHTML('beforeend', Data);
}
Start.addEventListener('click', () => {
    setInterval(() => {
        TimeCount--;
        if (TimeCount > -1) {
            Time.textContent = TimeCount;
        }
        if (TimeCount == 0) {
            TimeCount = 0;
            Time.textContent = TimeCount;
            TimeFinish();
        }
    }, 1000);
    NumberDiv.style.visibility = 'visible';
    ButtonSHow.style.visibility = 'hidden';
    RandomNumber = Math.floor(Math.random() * 100) + 1;
    Welcome.volume = 0.3;
    Welcome.play();
});
const Check = (n) => {
    Chances--;
    if (Chances == 0) {
        ChanceOff();
    }
    if (RandomNumber == n) {
        ConGratulation();
    } else if (n > RandomNumber) {
        Wrong.play();
        Message.textContent = SmallerNumber;
    } else {
        Message.textContent = BiggerNumber;
        Wrong.play();
    }
}
function ConGratulation() {
    Congratulation.style.visibility = 'visible';
    NumberDiv.style.visibility = 'hidden'
    Welcome.pause();
    Won.play();
}
Congra.addEventListener('click', () => {
    window.location.reload();
});
function TimeFinish() {
    Lose.style.visibility = 'visible';
    NumberDiv.style.visibility = 'hidden';
    Reason.textContent = TTOFF;
    Welcome.pause();
    Haryo.play();
    SHowLose();
}
function ChanceOff() {
    Lose.style.visibility = 'visible';
    NumberDiv.style.visibility = 'hidden';
    Reason.textContent = Resss;
    Welcome.pause();
    Haryo.play();
    SHowLose();
}
function SHowLose() {
    setTimeout(() => {
    }, 500);
}
Loss.addEventListener('click', () => {
    window.location.reload();
})