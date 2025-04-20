const message = "We hope you found the answers you were looking for. Do visit again — the learning never stops at Quizlet!  🚀";
const typingSpeed = 100;
let index = 0;
const textElement = document.getElementById('typing-text');

function typeText() {
    if (index < message.length) {
        textElement.textContent += message.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    typeText();
});
