const message = "Welcome to Quizlet - Learn the Smart Way!";
const typingSpeed = 100;
let index = 0;
const textElement = document.getElementById('typing-text');

const audio = new Audio('audio/typing.mp3');
audio.loop = true;

function typeText() {
  if (index === 0) {
    audio.play();
  }

  if (index < message.length) {
    textElement.textContent += message.charAt(index);
    index++;
    setTimeout(typeText, typingSpeed);
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}

document.addEventListener("click", () => {
  typeText();
}, { once: true });