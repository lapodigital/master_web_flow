import SplitType from 'split-type'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)



// funzione effeti text con gsap
function initAnimation() {
  let addAnimation = function () {
    $(".skew-up").each(function (index) {
      const text = new SplitType($(this), {
        types: "lines, words",
        lineClass: "word-line"
      });
      let textInstance = $(this);
      let line = textInstance.find(".word-line");
      let word = line.find(".word");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: textInstance,
          start: "top 85%",
          end: "top 85%",
          onComplete: function () {
            $(textInstance).removeClass("skew-up");
          }
        }
      });

      tl.set(textInstance, { opacity: 1 }).from(word, {
        y: "100%",
        skewX: "-6",
        duration: 2,
        stagger: 0.03,
        ease: "expo.out"
      });
    });
  };
  addAnimation();
  window.addEventListener("resize", function (event) {
    addAnimation();
  });
}

export default initAnimation



