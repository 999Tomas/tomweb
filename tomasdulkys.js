



function changeClass(){
  
}

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:110}, '300');
});


var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal-left, .reveal-right');


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




class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

  <header>
    <div class="container">
      <input type="checkbox" name="check" id="check">
      <div class="logo-container">
        <img src="logo/logo11.png" alt>
      </div>

      <div class="nav-btn">
        <div class="nav-links">
          <ul>
            <li class="nav-link" style="--i: .6s">
              <a href="index.html">Welcome</a>
            </li>
            <li class="nav-link" style="--i: .85s">
                <a href="about.html">My Journey</a>
            </li>
            <li class="nav-link" style="--i: 1.1s">
              <a href="projects.html">Immersive Experience</a>
              <div class="dropdown">
                <ul>
                    <li class="dropdown-link">
                        <a href="clientproject2.html">Tomebound's Aztec Art</a>
                    </li>
                    <li class="dropdown-link">
                        <a href="socialmedia.html">Social Media Campaign</a>
                    </li>
                    <li class="dropdown-link">
                        <a href="newbeginning.html">New Beginning</a>
                    </li>
                    <li class="dropdown-link">
                        <a href="lizarddruid.html">Lizard Druid</a>
                    </li>
                    <li class="dropdown-link">
                        <a href="medievalenvironment.html">Medieval Environment</a>
                    </li>
                    <li class="dropdown-link">
                        <a href="homedevice.html">Home Device</a>
                    </li>
                    <li class="dropdown-link">
                        <a href="drpepi.html">Dr. Pepi</a>
                    </li>
                    <li class="dropdown-link">
                        <a href="lowpolyart.html">Chest of Souls</a>
                    </li>
                    <li class="dropdown-link">
                        <a href="webdevelop.html">Web Development</a>
                    </li>
                    <li class="dropdown-link">
                        <a href="bookpen.html">Book & Pen 3D Assets</a>
                    </li>
                </ul>
              </div>
          </li>
            
            <li class="nav-link" style="--i: 1.35s">
              <a href="contact.html">Unleach Your Vision</a>
            </li>
            <li class="nav-link" style="--i: 1.60s">
              <a href="livecv.html">Live CV</a>
            </li>
          </ul>
        </div>
        <div class="socialtop">
            <div class='top-social'>
             
                <a href='https://www.instagram.com/tomasdulkys/' target="_blank"><i class='fa fa-instagram'></i></a>
                <a href='https://www.linkedin.com/in/tomasdulkys/' target="_blank"><i class='fa fa-linkedin'></i></a>
            </div>
        </div>
      </div>

      <div class="hamburger-menu-container">
        <div class="hamburger-menu">
          <div></div>
        </div>
      </div>
    </div>
  </header>

  <style type="text/css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

:root {
  --clr-bg-header: rgba(0, 0, 0, 0.5);
  --clr-btn: ;
  --clr-dropdown: #1C6758;
  --clr-nav-hover: #1E6F5C;
  --clr-dropdown-hov: #289672;
  --clr-dropdown-link-hov: #29BB89;
  --clr-light: #FAFAFA;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  overflow-y: auto
  background-color: #f5f7f6;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

header {
  position: sticky;
  top: 0px;
  background-color: rgba(20,21,26, 0.6);
  width: 100%;
  height: 120px;
  z-index: 3000;
}

/***** Slide bottom *****/
header {
  animation: 1s header;
}

@keyframes header {
  from {
    margin-top: -100%;
  }
  to {
    margin-top: 0%;
  }
}

.container {
  max-width: 100%;
  top: 30px;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  position: relative;
  background: transparent;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-container img{
  width: 100%;
  max-width: 200px;
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 0;
  margin-bottom: 12px;

}

.nav-btn {
  flex: 3;
  display: flex;
  background-color: transparent;
  align-items: center;
}

.nav-links {
  flex: 2;
}

.btn {
  display: inline-block;
  padding: .5rem 1.3rem;
  font-size: .8rem;
  border: 2px solid var(--clr-light);
  border-radius: 2rem;
  line-height: 1;
  margin: 0 .2rem;
  transition: .3s;
  text-transform: uppercase;
}

.btn.solid,
.btn.transparent:hover {
  background-color: var(--clr-light);
  color: var(--clr-btn);
}

.btn.transparent,
.btn.solid:hover {
  background-color: transparent;
  color: var(--clr-light);
}

.nav-links > ul {
  display: flex;
  float: right;
  background-color: transparent;
  text-align: center;
  margin: auto;
  padding: auto;
  margin-right: 20px;
}

.nav-link {
  position: relative;
}

.nav-link > a {
  line-height: 3rem;
  color: #F8F8F8;
  padding: 0 .8rem;
  margin-right: rem;
  letter-spacing: 1px;
  font-size: .95rem;
  display: inline-block;
  align-items: center;
  justify-content: space-between;
  
   /* animation properties */
  -moz-transform: translateY(0%);
  -webkit-transform: translateY(0%);
  transform: translateY(0%);
  animation-name: my-animation;
  animation-duration: 1s;
}

/* for Chrome */
@-webkit-keyframes my-animation {
  from { -webkit-transform: translateY(100%); }
  to { -webkit-transform: translateY(0%); }
}

.nav-link > a > i {
  margin-left: .2rem;
}

.nav-link:hover > a {
  color: #A28681;
}

.nav-link::before  {
  transition: 300ms;
  height: 5px;
  content: "";
  position: absolute;
  background-color: #A28681;
  width: 0%;
  bottom: 10px;
}

@media screen and (max-width: 1040px) {
  .nav-link::before  {
    display: none;
  }
}

.nav-link:hover::before {
  width: 100%;
}

.nav-link:active::before {
  transform: scale(1.1);
  overflow:hidden;
  bottom: 10px;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 12.2rem;
  transform: translateY(10px);
  opacity: 0;
  pointer-events: none;
  transition: .5s;
  box-shadow: 0px 1px 7px 1px rgba(20, 21, 26, 0.9);
}

.dropdown::before {
 content: '';
  position: absolute;
  top: -19px;
  right: 80px;
  display: inline-block;
  border-right: 20px solid transparent;
  border-bottom: 20px solid green;
  border-left: 20px solid transparent;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}

.dropdown::after {
  content: '';
  position: absolute;
  top: -18px;
  right: 81px;
  display: inline-block;
  border-right: 19px solid transparent;
  border-bottom: 19px solid #23272a;
  border-left: 19px solid transparent;
  box-sizing: border-box;
}

.dropdown ul {
  position: relative;
}

.dropdown-link > a {
  display: flex;
  color: #F8F8F8;
  padding: .5rem 1rem;
  font-size: .9rem;
  align-items: center;
  justify-content: space-between;
  transition: .3s;
  background-color: #23272a;
  
}

.dropdown-link:hover > a {
 color: #A28681;
}

.dropdown-link {
  position: relative;
}

.nav-link:hover > .dropdown,
.dropdown-link:hover>.dropdown {
  transform: translate(0, 0);
  opacity: 1;
  pointer-events: auto;
}

.socialtop {
  float: right;
  margin-right: 0;
}


.top-social a {
  padding: 13px;
  color: #fff;
}

.top-social {
  padding: 14px 15px;
}

.top-social a:hover {
  color: #BBA6AB;
}

@media screen and (max-width: 1040px) {
  .top-social {
    display: none;
  }
}

header {
  height: 100px;

}
.hamburger-menu-container {
  flex: 1;
  display: none;
  align-items: center;
  justify-content: flex-end;
}

.hamburger-menu {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.hamburger-menu div {
  width: 1.6rem;
  height: 3px;
  border-radius: 3px;
  background-color: var(--clr-light);
  position: relative;
  z-index: 1001;
  transition: .5s;
}

.hamburger-menu div:before,
.hamburger-menu div:after {
  content: '';
  position: absolute;
  width: inherit;
  height: inherit;
  background-color: var(--clr-light);
  border-radius: 3px;
  transition: .5s;
}

.hamburger-menu div:before {
  transform: translateY(-7px);
}

.hamburger-menu div:after {
  transform: translateY(7px);
}

#check {
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
  width: 2.5rem;
  height: 2.5rem;
  z-index: 90000;
  cursor: pointer;
  opacity: 0;
  display: none;
}

#check:checked ~ .hamburger-menu-container .hamburger-menu div {
  background-color: transparent;
}

#check:checked ~ .hamburger-menu-container .hamburger-menu div:before {
  transform: translateY(0) rotate(-45deg);
}

#check:checked ~ .hamburger-menu-container .hamburger-menu div:after {
  transform: translateY(0) rotate(45deg);
}

@keyframes animation {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@media (max-width: 1040px) {
  .hamburger-menu-container {
    display: flex;
  }

.logo-container img{
  width: 100%;
  max-width: 100px;
}
  #check {
    display: block;
  }

  .nav-btn {
    position: fixed;
    height: calc(100vh - 3rem);
    top: 6.2rem;
    left: 0;
    width: 100%;
    background-color: rgba(20, 21, 26, 1);
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transform: translateY(100%);
    transition: .65s;
  }

  #check:checked ~ .nav-btn {
    transform: translateY(0);
  }

  #check:checked ~ .nav-btn .nav-link,
  #check:checked ~ .nav-btn .log-sign {
    animation: animation .5s ease forwards var(--i);
  }

  .nav-links {
    flex: initial;
    width: 100%;
    top: 3.5rem;
    background-color: transparent;
  }

  .nav-links > ul {
    flex-direction: column;
    float: left;
    text-align: left;
    margin-right: 0;
    background: transparent;
  }

  .nav-link {
    width: 100%;
    opacity: 0;
    transform: translateY(15px);
  }

  .nav-link > a {
    line-height: 1;
    padding: 1.6rem 2rem;
  }

  .nav-link:hover > a {
    transform: scale(1);
    background-color: transparent;
  }

  .dropdown {
    position: initial;
    top: initial;
    left: initial;
    transform: initial;
    opacity: 1;
    pointer-events: auto;
    width: 100%;
    height: 100%;
    padding: 0;
    display: none;
    overflow-y: auto;
    background-color: #23272a;
     
  }

  .dropdown::before {
  content: '';
  position: absolute;
  top: 1px;
  right: 100px;
  display: inline-block;
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
  border-bottom: transparent;
  box-shadow: 2px 2px 7px 1px rgb(133, 129, 142, 07);
  box-sizing: border-box;
}

.dropdown::after {
  content: '';
  position: absolute;
  top: 0px;
  right: 101px;
  display: inline-block;
  border-right: 19px solid transparent;
  border-top: 19px solid #14151A;
  border-left: 19px solid transparent;
   border-bottom: transparent;
  box-sizing: border-box;

}

  .nav-link:hover > .dropdown,
  .dropdown-link:hover>.dropdown {
    display: block;
  }

  .nav-link:hover > a > i,
  .dropdown-link:hover>a>i {
    transform: rotate(360deg);
  }

  .dropdown-link > a {
    background-color: transparent;
    color: var(--clr-light);
    padding: 1.2rem 2rem;
    line-height: 1;
  }

  .dropdown.second .dropdown-link > a {
    padding: 1.2rem 2rem 1.2rem 3rem;
  }

  .dropdown.second .dropdown.second .dropdown-link > a {
    padding: 1.2rem 2rem 1.2rem 4rem;
  }

  .dropdown-link:not(:nth-last-child(2)) {
    border-bottom: none;
  }

  .arrow {
    z-index: 1;
    background-color: var(--clr-btn);
    left: 10%;
    transform: scale(1.1) rotate(45deg);
    transition: .5s;
  }

  .nav-link:hover .arrow {
    background-color: transparent;
  }

  .dropdown .arrow {
    display: none;
  }

  .dropdown-link:hover > a {
    background-color: transparent;
    color: rgba(162,134,129, 0.6);
  }

  .dropdown-link:first-child:hover ~ .arrow {
    background-color: var(--clr-nav-hover);
  }

  .nav-link > a > i {
    font-size: 1.1rem;
    transform: rotate(-90deg);
    transition: .7s;
  }

  .dropdown i {
    font-size: 1rem;
    transition: .7s;
  }

  </style>
  

  `
  }
}

customElements.define('my-header', MyHeader)



// Loader Animation
const loader = document.getElementById('loader');
const transition = document.querySelector('.transition')

window.addEventListener("load", () => {
transition.classList.add('slide');
setTimeout(() => {
  transition.classList.remove('');
}, 1500);
})


class Slider {
    constructor(slider) {
        this.slider = slider;
        this.display = slider.querySelector(".image-display");
        this.navButtons = Array.from(slider.querySelectorAll(".nav-button"));
        this.prevButton = slider.querySelector(".prev-button");
        this.nextButton = slider.querySelector(".next-button");
        this.sliderNavigation = slider.querySelector(".slider-navigation");
        this.currentSlideIndex = 0;
        this.preloadedImages = {};

        this.initialize();
    }

    initialize() {
        this.setupSlider();
        this.preloadImages();
        this.eventListeners();
    }

    setupSlider() {
        this.showSlide(this.currentSlideIndex);
    }

    showSlide(index) {
        this.currentSlideIndex = index;
        const navButtonImg = this.navButtons[
            this.currentSlideIndex
        ].querySelector("img");
        if (navButtonImg) {
            const imgClone = navButtonImg.cloneNode();
            this.display.replaceChildren(imgClone);
        }
        this.updateNavButtons();
    }

    updateNavButtons() {
        this.navButtons.forEach((button, buttonIndex) => {
            const isSelected = buttonIndex === this.currentSlideIndex;
            button.setAttribute("aria-selected", isSelected);
            if (isSelected) button.focus();
        });
    }

    preloadImages() {
        this.navButtons.forEach((button) => {
            const imgElement = button.querySelector("img");
            if (imgElement) {
                const imgSrc = imgElement.src;
                if (!this.preloadedImages[imgSrc]) {
                    this.preloadedImages[imgSrc] = new Image();
                    this.preloadedImages[imgSrc].src = imgSrc;
                }
            }
        });
    }

    eventListeners() {
        document.addEventListener("keydown", (event) => {
            this.handleAction(event.key);
        });

        this.sliderNavigation.addEventListener("click", (event) => {
            const targetButton = event.target.closest(".nav-button");
            const index = targetButton
                ? this.navButtons.indexOf(targetButton)
                : -1;
            if (index !== -1) {
                this.showSlide(index);
            }
        });

        this.prevButton.addEventListener("click", () =>
            this.handleAction("prev")
        );
        this.nextButton.addEventListener("click", () =>
            this.handleAction("next")
        );
    }

    handleAction(action) {
        if (action === "Home") {
            this.currentSlideIndex = 0;
        } else if (action === "End") {
            this.currentSlideIndex = this.navButtons.length - 1;
        } else if (action === "ArrowRight" || action === "next") {
            this.currentSlideIndex =
                (this.currentSlideIndex + 1) % this.navButtons.length;
        } else if (action === "ArrowLeft" || action === "prev") {
            this.currentSlideIndex =
                (this.currentSlideIndex - 1 + this.navButtons.length) %
                this.navButtons.length;
        }

        this.showSlide(this.currentSlideIndex);
    }
}

const sliders = document.querySelectorAll('.item-image-slider');
sliders.forEach(slider => {
    new Slider(slider);
});

document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.item-24 .item-img1 video');

    videos.forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play(); // Play video on mouse enter
        });

        video.addEventListener('mouseleave', () => {
            video.pause(); // Pause video on mouse leave
            video.currentTime = 0; // Reset video to the beginning
        });
    });
});


document.addEventListener('scroll', function() {
    const skillsList = document.getElementById("skillsList");
    const skillsItems = skillsList.querySelectorAll("li");

    const triggerBottom = window.innerHeight / 1.2; // Trigger by scrolling

    skillsItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            item.classList.add('show');
        }
    });
});


 // JavaScript to apply the metallic gradient background
        document.addEventListener('DOMContentLoaded', function() {
            // Create a div element for the background
            var backgroundDiv = document.createElement('div');
            backgroundDiv.classList.add('metallic-background');

            // Append the gradient background div to the body
            document.body.appendChild(backgroundDiv);
        });


function createFooter() {
    const footerHTML = `
        <footer>
            <div class="copy">
                <p>&copy; 2024 Tomas Dulkys, All Rights Reserved. Let's create something amazing together.</p>
                <p>Winchester</p>
                <p>tomasdulkys@gmail.com</p>
            </div>
        </footer>

<style type="text/css">
.copy {
    height: auto;
    line-height: 100px;
    color: #85818E;
    text-align: center;
    background-color:  #14151A;
    border-block-start: 1px solid;
    padding-block-end: 1px solid;
    border-image-source: linear-gradient(90deg, transparent 20%, #85818E, transparent 80%);
    border-image-slice: 1;
}
@media screen and (max-width: 48em) {
    .copy{
        line-height: 15px;
        background-color: #14151A;
        border-image-source: linear-gradient(90deg, transparent 10%, #85818E, transparent 90%);
        margin-bottom: 20px;
    }
}
.copy p {
    display: inline-block;
    padding: 0px 30px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
}
@media screen and (max-width: 48em) {
    .copy p{
        display: block;
        margin-top: 10px;
    }
}

 </style>
    `;

    document.getElementById('footer-container').innerHTML = footerHTML;
}

// Call the function to create the footer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createFooter);


// Function to load the scrollbar styles
function loadScrollbarStyles() {
  const styles = `
    ::-webkit-scrollbar {
      width: 7px;
      background-color: #14151A;
    }

    ::-webkit-scrollbar-thumb {
      background: #736B74;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #9F94A1;
    }

     body {
                overflow-x: hidden;
            }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.appendChild(document.createTextNode(styles));
  document.head.appendChild(styleSheet);
}

// Call the function on page load to apply styles
window.onload = loadScrollbarStyles;


// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

