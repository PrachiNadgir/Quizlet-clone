const track = document.getElementById('part2b');
  const cards = Array.from(track.children);
  const visibleCards = 4;
  const cardCount = cards.length;
  const cardWidth = 312;
const gap = 55;
const fullCardWidth = cardWidth + gap; 

  let index = 0;

  
  for (let i = 0; i < visibleCards; i++) {
    const clone = cards[i].cloneNode(true);
    track.appendChild(clone);
  }

  function moveSlide(dir) {
    index += dir;

    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${index * fullCardWidth}px)`;

    
    if (index >= cardCount) {
      setTimeout(() => {
        track.style.transition = 'none';
        index = 0;
        track.style.transform = `translateX(0%)`;
      }, 500);
    }
  }

  window.addEventListener("DOMContentLoaded", function () {
    const cardSets = document.querySelectorAll("#part7-cards .card-items");
    let currentSlide = 0;
  
    if (!cardSets.length) return;
  
    let counter = document.getElementById("card-counter");
    if (!counter) {
      counter = document.createElement("div");
      counter.id = "card-counter";
      document.querySelector(".arrow").appendChild(counter);
    }
  
    function updateCarousel2() {
      cardSets.forEach((set, index) => {
        set.classList.toggle("active", index === currentSlide);
      });
  
      counter.textContent = `${currentSlide + 1}/${cardSets.length}`;
  
      const leftArrow = document.querySelector(".arrleft");
      const rightArrow = document.querySelector(".arrright");
  
      leftArrow.style.opacity = currentSlide === 0 ? "0.4" : "1";
      leftArrow.style.pointerEvents = currentSlide === 0 ? "none" : "auto";
  
      rightArrow.style.opacity = currentSlide === cardSets.length - 1 ? "0.4" : "1";
      rightArrow.style.pointerEvents = currentSlide === cardSets.length - 1 ? "none" : "auto";
    }
  
    window.moveCarousel2 = function (step) {
      currentSlide += step;
      if (currentSlide < 0) currentSlide = 0;
      if (currentSlide >= cardSets.length) currentSlide = cardSets.length - 1;
      updateCarousel2();
    };
  
    updateCarousel2();
  });
  