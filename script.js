

const container = document.getElementById('container');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

const jsConfetti = new JSConfetti()


function randomChange() {
    const 
    { width: containerWidth, height: containerHeight } = container.getBoundingClientRect(),
    { width: noBtnWidth, height: noBtnHeight } = noBtn.getBoundingClientRect(),
    i = Math.floor(Math.random() * (containerWidth - noBtnWidth)) + 1,
    j = Math.floor(Math.random() * (containerHeight - noBtnHeight)) + 1;
    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
}

function congrats() {
    jsConfetti.addConfetti({
        emojis: ['❤️','💝','🩷','❤']
    })
}

noBtn.addEventListener("click", randomChange);
yesBtn.addEventListener("click", congrats);
