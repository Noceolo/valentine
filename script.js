

const container = document.getElementById('container');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const deniedSound = document.getElementById('denied');
const george = document.getElementById('george');
const jsConfetti = new JSConfetti()


function randomChange() {
    const 
    { width: containerWidth, height: containerHeight } = container.getBoundingClientRect(),
    { width: noBtnWidth, height: noBtnHeight } = noBtn.getBoundingClientRect(),
    i = Math.floor(Math.random() * (containerWidth - noBtnWidth)) + 1,
    j = Math.floor(Math.random() * (containerHeight - noBtnHeight)) + 1;
    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
    deniedSound.currentTime = 0;
    deniedSound.play();
}

function congrats() {
    jsConfetti.addConfetti({
        emojis: ['❤️','💝','🩷','❤']
    })
    george.play();
}

noBtn.addEventListener("click", randomChange);
yesBtn.addEventListener("click", congrats);
