/**
* By Alvaro Trigo 
* Follow me on Twitter: https://twitter.com/imac2
*/
(function(){
    init();

    var g_containerInViewport;
    function init(){
        setStickyContainersSize();
        bindEvents();
    }

    function bindEvents(){
        window.addEventListener("wheel", wheelHandler);        
    }

    function setStickyContainersSize(){
        document.querySelectorAll('.sticky-container').forEach(function(container){
            const stikyContainerHeight = container.querySelector('main').scrollWidth;
            container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
        });
    }

    function isElementInViewport (el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    }

    function wheelHandler(evt){
        
        const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
            return isElementInViewport(container);
        })[0];

        if(!containerInViewPort){
            return;
        }

        var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if(g_canScrollHorizontally){
            containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
        }
    }
})();

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');


    for (var i = 0; i < reveals.length; i++) {
        
        var windowheight = window.innerHeight;
        var revealLeft = reveals[i].getBoundingClientRect().left;
        var revealpoint = 150;

        if (revealLeft < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else{
           reveals[i].classList.remove('active'); 
        }
    }
}

if ( window.location.hash ) {
    let hash = window.location.hash;
    if ( $(hash).length ) {
        ('html, body').animate({
            scrollTop: $(hash).offset().top - 120
        }, 900, '');
    }
}

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
