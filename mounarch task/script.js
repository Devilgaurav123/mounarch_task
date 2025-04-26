const carousel = document.getElementById("carousel");
const images = carousel.querySelectorAll("img");
let index = 0;
let interval = null;
let movingForward = true; // Pehle forward move hoga
let autoMoving = false;

function showImage(index) {
  const width = images[0].clientWidth;
  carousel.style.transform = `translateX(-${index * width}px)`;
}

document.getElementById("startStop").addEventListener("click", () => {
  if (!autoMoving) {
    interval = setInterval(() => {
      if (movingForward) {
        index++;
        if (index >= images.length - 1) {
          movingForward = false; // Jab last image aaye, reverse chalu karo
        }
      } else {
        index--;
        if (index <= 0) {
          movingForward = true; // Jab first image aaye, forward chalu karo
        }
      }
      showImage(index);
    }, 1500); // Har 1.5 second mein move
    document.getElementById("startStop").textContent = "Stop";
    autoMoving = true;
  } else {
    clearInterval(interval);
    document.getElementById("startStop").textContent = "Start";
    autoMoving = false;
  }
});

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % images.length;
  showImage(index);
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
});