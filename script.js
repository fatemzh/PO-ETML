/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    CAROUSEL
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
getElementById('carousel__button--next')
.addEventListener("click", function() {
  moveToNextSlide();
});

document.
getElementById('carousel__button--prev')
.addEventListener("click", function() {
  moveToPrevSlide();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item-hidden');
  }
  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide () {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides -1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    GENERATEUR
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
  "Un·e génie du code qui va créer une application révolutionnaire",
  "Un·e passionné·e du réseau",
  "Un·e hackeur·se bienveillant·e qui protégera les serveurs d'hôpitaux",
  "Un·e hackeur·se du Mal recherché·e par la police",
  "Un danger des internets qui détourne les emails importants",
  "Un·e pirate qui va attaquer Google",
  "Un·e artiste pro du webdesign",
  "Un·e ingénieur·e des algorithmes",
  "Un·e enseignant·e en informatique qui formera les futures générations de génies de l'informatique",
  "Le ou la geek de la famille qui a toutes les réponses",
];
btn.addEventListener('click', function () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  output.innerHTML = randomQuote;
})

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    BACK TO TOP BUTTON & NAVIGATION BAR
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

var toTopButton = document.getElementById("to-top-button");
var navBar = document.getElementById("navigation");

// When the user scrolls down 200px from the top of the document, show the button
// When the user scrolls down 88px from the top of the document, adds opacity to the navigation bar
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    toTopButton.classList.remove("hidden");
  } else {
    toTopButton.classList.add("hidden");
  }
  if (document.body.scrollTop > 88 || document.documentElement.scrollTop > 88) {
    navBar.classList.add("opacity-95");
  } else {
    navBar.classList.remove("opacity-95");
  }
}

// When the user clicks on the button, smoothy scroll to the top of the document
function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
