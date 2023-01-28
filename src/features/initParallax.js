import Ukiyo from "ukiyojs"

// funzione parallax con ukiyo
function initParallax() {
  const images = document.querySelectorAll(".immagine_parallax");
  images.forEach(image => {
    new Ukiyo(image, {
      speed: 2,
      scale: 1.25
    });
  });
}

export default initParallax