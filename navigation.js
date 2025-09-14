window.addEventListener('DOMContentLoaded', () => {
  // ✅ Do not load navigation on the CV page
  if (window.location.pathname.includes("livecv.html")) {
    return;
  }

  const nav = document.createElement('nav');
  nav.className = 'main-nav';
  nav.innerHTML = `
    <div class="nav-logo">
      <video id="animated-logo" autoplay muted playsinline>
        <source src="assets/videos/logo.webm" type="video/webm">
        Your browser does not support the video tag.
      </video>
    </div>
    <input type="checkbox" name="check" id="check">
    <div class="hamburger-menu-container">
      <div class="hamburger-menu">
        <div></div>
      </div>
    </div>
    <div class="nav-links">
      <a href="index.html">Welcome</a>
      <a href="about.html">About</a>
      <div class="dropdown">
        <a class="dropdown-toggle" href="projects.html">Immersive Experience</a>
        <div class="dropdown-menu">
          <li class="dropdown-link"><a href="virtualcities.html">Winchester Castle | A Virtual Revival</a></li>
          <li class="dropdown-link"><a href="interactivemap.html">Urban Cool: Heat Mitigation | RSA</a></li>
          <li class="dropdown-link"><a href="clientproject2.html">Tomebound's Aztec Art</a></li>
          <li class="dropdown-link"><a href="socialmedia.html">Social Media Campaign</a></li>
          <li class="dropdown-link"><a href="newbeginning.html">New Beginning</a></li>
          <li class="dropdown-link"><a href="lizarddruid.html">Lizard Druid</a></li>
          <li class="dropdown-link"><a href="medievalenvironment.html">Medieval Environment</a></li>
          <li class="dropdown-link"><a href="homedevice.html">Home Device</a></li>
          <li class="dropdown-link"><a href="drpepi.html">Dr. Pepi</a></li>
          <li class="dropdown-link"><a href="lowpolyart.html">Chest of Souls</a></li>
          <li class="dropdown-link"><a href="webdevelop.html">Web Development</a></li>
          <li class="dropdown-link"><a href="bookpen.html">Book & Pen 3D Assets</a></li>
        </div>
      </div>
      <a href="contact.html">Unleash Your Vision</a>
      <a href="livecv.html">Live CV</a>
    </div>
    <div class="nav-social">
      <a href="https://www.instagram.com/tomasdulkys/" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/tomasdulkys/" target="_blank"><i class="fab fa-linkedin"></i></a>
    </div>
  `;
  document.body.prepend(nav);

  const style = document.createElement('style');
  style.textContent = `
    .main-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 130px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      background: transparent;
      backdrop-filter: blur(10px);
      z-index: 1000;
      box-sizing: border-box;
      transition: top 0.3s, opacity 2s ease-in-out;
    }

    body.welcome-page .main-nav,
    body.about-page .main-nav {
      background: transparent !important;
      backdrop-filter: none !important;
      box-shadow: none !important;
    }

    .main-nav.hidden-nav {
      opacity: 0;
      pointer-events: none;
    }

    .main-nav.visible-nav {
      opacity: 1;
      pointer-events: auto;
    }

    .nav-logo video {
      height: auto;
      width: auto;
      display: block;
    }

    .nav-links {
      display: flex;
      gap: 20px;
      align-items: center;
    }

    .dropdown {
      display: flex;
      align-items: center;
    }

    .nav-links > a,
    .nav-links .dropdown-toggle {
      position: relative;
      color: #f8f8f8;
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      padding-bottom: 5px;
      transition: color 0.3s;
    }

    .nav-links > a:hover,
    .nav-links .dropdown-toggle:hover {
      color: #C29B88;
    }

    .nav-links > a::after,
    .nav-links .dropdown-toggle::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 2px;
      background-color: #C29B88;
      transition: width 0.3s;
    }

    .nav-links > a:hover::after,
    .nav-links .dropdown-toggle:hover::after {
      width: 100%;
    }

    .dropdown {
      position: relative;
    }

    .dropdown-toggle {
      pointer-events: auto;
      position: relative;
      z-index: 1001;
    }

    .dropdown-menu {
      list-style: none;
      position: absolute;
      top: calc(100% + 10px);
      left: 0;
      background-color: rgba(0, 0, 0, 0.8);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      padding: 15px 0 10px;
      min-width: 160px;
      display: none;
      flex-direction: column;
      z-index: 999;
      border-radius: 4px;
    }

    .dropdown-menu::before {
      content: '';
      position: absolute;
      top: -15px;
      left: 0;
      height: 15px;
      width: 100%;
      background: transparent;
      pointer-events: auto;
    }

    .dropdown:hover .dropdown-menu {
      display: flex;
    }

    .dropdown-link a {
      display: block;
      padding: 10px 15px;
      color: #f8f8f8;
      font-size: 0.95rem;
      white-space: normal;
      line-height: 1.3;
      text-decoration: none;
      transition: background-color 0.3s, color 0.3s;
    }

    .dropdown-link a:hover {
      background-color: #222;
      color: #C29B88;
    }

    .nav-social {
      display: flex;
      gap: 15px;
      align-items: center;
      padding-right: 30px;
    }

    .nav-social a {
      color: #f8f8f8;
      font-size: 1.3rem;
      transition: transform 0.3s, color 0.3s;
    }

    .nav-social a:hover {
      transform: scale(1.2);
      color: #C29B88;
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
      background-color: white;
      position: relative;
      z-index: 1001;
      transition: 0.5s;
    }

    .hamburger-menu div::before,
    .hamburger-menu div::after {
      content: '';
      position: absolute;
      width: inherit;
      height: inherit;
      background-color: white;
      border-radius: 3px;
      transition: 0.5s;
    }

    .hamburger-menu div::before {
      transform: translateY(-7px);
    }

    .hamburger-menu div::after {
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

    #check:checked ~ .hamburger-menu-container .hamburger-menu div::before {
      transform: rotate(-45deg);
    }

    #check:checked ~ .hamburger-menu-container .hamburger-menu div::after {
      transform: rotate(45deg);
    }

    @media screen and (max-width: 1040px) {
      body.no-scroll {
        overflow: hidden;
        height: 100vh;
      }

      .nav-social {
        display: none;
      }

      .hamburger-menu-container {
        display: flex;
      }

      #check {
        display: block;
      }

      .nav-links {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(10, 10, 10, 0.95);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translateY(0);
        transition: transform 0.6s ease-in-out;
        z-index: 900;
        opacity: 0;
        pointer-events: none;
      }

      #check:checked ~ .nav-links {
        top: 0;
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
      }

      .nav-links > a,
      .nav-links .dropdown-toggle {
        font-size: 1.4rem;
        padding: 10px;
        bottom: 10px;
      }

      .dropdown-menu {
        position: static;
        align-items: flex-start;
      }

      .dropdown-menu a{
        font-size: 1.2rem;
        overflow: hidden;
      }

      .dropdown:hover {
        display: block;
      }

      .dropdown.active .dropdown-menu {
        display: flex;
      }

      .dropdown-link {
        width: 100%;
      }

      .dropdown-link a {
        display: block;
        width: 100%;
        box-sizing: border-box;
        background-color: transparent;
        color: #fff;
        text-align: left;
      }
  }
  `;
  document.head.appendChild(style);

  // Nav fade in on welcome
  if (
    window.location.pathname.includes('index.html') ||
    window.location.pathname === '/' ||
    window.location.pathname === '/index'
  ) {
    nav.classList.add('hidden-nav');
    setTimeout(() => {
      nav.classList.remove('hidden-nav');
      nav.classList.add('visible-nav');
    }, 6000);
  } else {
    nav.classList.add('visible-nav');
  }

  // Show/hide nav on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    nav.style.top = currentScroll > lastScroll ? '-100px' : '0';
    lastScroll = currentScroll;
  });

  const checkbox = document.getElementById('check');

  // Prevent body scroll when menu is open
  checkbox.addEventListener('change', () => {
    if (checkbox.checked && window.innerWidth <= 1040) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  });

  // Optional: Re-enable scroll on resize if menu is open
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1040) {
      document.body.classList.remove('no-scroll');
    } else if (checkbox.checked) {
      document.body.classList.add('no-scroll');
    }
  });

  // Smooth transition with video playback
  const links = document.querySelectorAll('.nav-links a, .dropdown-menu a');
  const video = document.querySelector('.background-video');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // ✅ If link is Live CV, custom handler below will take care of it
      if (link.getAttribute("href") === "livecv.html") {
        return;
      }

      // ✅ If link has target="_blank", let browser handle it (new tab)
      if (link.target === '_blank') {
        return;
      }

      e.preventDefault();
      const targetUrl = link.getAttribute('href');

      if (video) {
        video.style.transition = 'opacity 0.5s ease';
        video.style.opacity = '1';
        video.currentTime = 0;
        video.play();

        video.onplaying = () => {
          setTimeout(() => {
            sessionStorage.setItem('videoTime', video.currentTime);
            window.location.href = targetUrl;
          }, 1000);
        };
      } else {
        window.location.href = targetUrl;
      }
    });
  });

  // Smooth fade-out before opening Live CV in new tab
  const liveCvLink = document.querySelector('.nav-links a[href="livecv.html"]');
  if (liveCvLink) {
    liveCvLink.addEventListener('click', function(e) {
      e.preventDefault();

      // Fade out body
      document.body.style.transition = "opacity 0.6s ease";
      document.body.style.opacity = "0";

      setTimeout(() => {
        window.open("livecv.html", "_blank");
        // Restore opacity in case user doesn’t leave this page
        document.body.style.opacity = "1";
      }, 600);
    });
  }
});
