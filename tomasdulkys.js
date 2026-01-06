// Create a <style> element to insert global styles for back-to-top button
const style = document.createElement("style");
style.innerHTML = `
/* =========================
   BACK TO TOP BUTTON
   ========================= */

#button{
  position: fixed;
  bottom: 30px;
  right: 60px;
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  box-shadow: none;
  text-decoration: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  color: #C29B88;
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  line-height: 1;
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px);
  transition:
  opacity 0.4s ease,
  visibility 0.4s ease,
  transform 0.3s ease,
  color 0.3s ease,
  border-color 0.3s ease;

  z-index: 1000;

  border-radius: 50%;
  border: 1px solid transparent; /* invisible by default */
}

/* Mobile position/size */
@media screen and (max-width: 768px){
  #button{
    right: 24px;
    width: 44px;
    height: 44px;
    font-size: 1.8rem;
  }
}

/* Visible state */
#button.show{
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}



/* Arrow glyph:*/
#button::after{
  content: "›";
  position: absolute;
  left: 50%;
  top: 50%;

  font-family: "Playfair Display", serif;
  font-size: inherit;
  line-height: 1;

  transform-origin: center;
  /* IMPORTANT: translateY happens BEFORE rotate → true up/down pulse */
  transform: translate(-50%, -50%) translateY(0) rotate(-90deg);

  animation: none;
  pointer-events: none;
}

/* Smooth pulse (up/down), stays centered */
@keyframes arrowPulse{
  0%   { transform: translate(-50%, -50%) translateY(0) rotate(-90deg); }
  50%  { transform: translate(-50%, -50%) translateY(-2px) rotate(-90deg); }
  100% { transform: translate(-50%, -50%) translateY(0) rotate(-90deg); }
}


`;

// Append the style to the document head
document.head.appendChild(style);

// Create the button dynamically
const button = document.createElement("a");
button.id = "button";
button.href = "#top";
document.body.appendChild(button);

// Button show/hide logic based on scroll position (restricted to certain pages)
window.addEventListener("scroll", () => {
  const path = window.location.pathname;
  const excludedPages = ["index.html", "about.html", "projects.html", "contact.html"];

  const isExcluded =
    excludedPages.some(page => path.endsWith(page)) ||
    path === "/" || path === "/index";

  if (!isExcluded) {
    if (window.scrollY > 300) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  } else {
    button.classList.remove("show");
  }
});

// Smooth scroll to top on button click
button.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const video = document.querySelector('.background-video');
  const path = window.location.pathname;

  // Fade in body content after page load
  body.classList.add('loaded');

  const savedTime = sessionStorage.getItem('videoTime');
  if (video && savedTime) {
    video.currentTime = parseFloat(savedTime);
    video.play();

    video.addEventListener('loadedmetadata', () => {
      if (parseFloat(savedTime) >= video.duration - 1) {
        video.pause();
      }
    });
  }

  if (video) {
    video.style.opacity = '0.3';
    video.style.transition = 'opacity 0.5s ease-in-out';
  }

  // ✅ Scrollbar logic
  if (path.endsWith("index.html") || path === "/") {
    // hide scrollbar initially
    document.documentElement.style.overflow = "hidden"; // hides browser scrollbar completely

    setTimeout(() => {
      // show scrollbar after 6s
      document.documentElement.style.overflow = "auto";
      addScrollbarStyle();
    }, 6000);
  } else {
    addScrollbarStyle();
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));

  createFooter(); // ✅ Footer creation
});

function addScrollbarStyle() {
  const style = document.createElement('style');
  style.innerHTML = `
    ::-webkit-scrollbar { width: 7px; }
    ::-webkit-scrollbar-track { background: #14151A; }
    ::-webkit-scrollbar-thumb { background: #C29B88; border-radius: 2px; }
    ::-webkit-scrollbar-thumb:hover { background: #A07065; }
  `;
  document.head.appendChild(style);
}

function createFooter() {
  const footerHTML = `
    <div class="copy">
      <p>&copy; 2025 Tomas Dulkys Visuals, All Rights Reserved. Let's create something amazing together.</p>
      <p>Winchester</p>
      <p><a href="mailto:tomasdulkys@gmail.com">tomasdulkys@gmail.com</a></p>
      <div class='social'>
        <a href='https://www.instagram.com/tomasdulkys/' target="_blank"><i class='fab fa-instagram'></i></a>
        <a href='https://www.linkedin.com/in/tomasdulkys/' target="_blank"><i class='fab fa-linkedin'></i></a>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.innerHTML = `
    #footer-container {
      margin-top: 200px;
      z-index: 10;
      position: relative;
    }

    @media screen and (max-width: 768px) {
      #footer-container {
        margin-top: 200px;
      }
    }

    .copy {
      color: rgba(20, 21, 26, 0.8);
      font-weight: 100;
      text-align: center;
      background-color: white;
      padding: 20px;
    }

    @media screen and (max-width: 768px) {
      .copy {
        margin-bottom: 0px;
      }
    }

    .copy p {
      display: inline-block;
      padding: 0px 25px;
      font-size: 14px;
    }

    @media screen and (max-width: 768px) {
      .copy p {
        display: block;
        margin-top: 15px;
        font-size: 13px;
      }
    }

    .copy a[href^="mailto:"] {
      color: #C29B88;
      text-decoration: none;
    }

    .copy a[href^="mailto:"]:hover {
      text-decoration: underline;
    }

    .social {
      display: none;
    }

    @media screen and (max-width: 768px) {
      .social {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 14px 15px;
        gap: 20px;
        margin-top: 15px;
      }

      .social a {
        color: #C29B88;
        font-size: 1.1rem;
        transition: transform 0.3s, color 0.3s;
      }

      .social a:hover {
        transform: scale(1.2);
        color: #f8f8f8;
      }
    }
  `;

  document.getElementById('footer-container').innerHTML = footerHTML;
  document.head.appendChild(style);
}
