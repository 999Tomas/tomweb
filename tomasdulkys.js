var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// JavaScript
Array.prototype.forEach.call(document.querySelector("img"), function (elem) {
    elem.addEventListener("click", function () {
        elem.classList.toggle("enlarged");
    });
});
let btnOpen = document.querySelector('button');
let input = document.querySelector('input')

btnOpen.addEventListener('click', ()=> {
        window.open(input.value, 'blank')
})

const mouseWheel = document.querySelector('#home .gallery');

mouseWheel.addEventListener('wheel', function(e) {
    const race = 15; // How many pixels to scroll

    if (e.deltaY > 0) // Scroll right
        mouseWheel.scrollLeft += race;
    else // Scroll left
        mouseWheel.scrollLeft -= race;
                e.preventDefault();
});
 