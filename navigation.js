window.addEventListener('DOMContentLoaded', () => {
  // ✅ Do not load navigation on the CV page
  if (window.location.pathname.includes("livecv.html")) return;

  // ✅ Prevent double init if script ever included twice
  if (window.__mainNavInit) return;
  window.__mainNavInit = true;

  /* =========================================================
     1) BUILD NAV HTML
     ========================================================= */
  const nav = document.createElement('nav');
  nav.className = 'main-nav';
  nav.innerHTML = `
    <div class="nav-logo">
      <a href="index.html" class="nav-brand">
        <img src="assets/logo/logo_white.png" alt="Brand logo">
        <span class="brand-name">
          <span class="line-1">Tomas Dulkys</span>
          <span class="line-2">Visuals</span>
        </span>
      </a>
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
        <a class="dropdown-toggle" href="projects.html">Projects</a>
        <div class="dropdown-menu">
          <li class="dropdown-link"><a href="business-plan-report.html">Tomas Dulkys Visuals — Business Plan Report</a></li>
          <li class="dropdown-link"><a href="oiseth-hotel-renovation.html">Placement Project A — Øiseth Hotel Renovation</a></li>
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
      <a href="contact.html">Contact</a>
      <a href="livecv.html">Live CV</a>
    </div>
    <div class="nav-social">
      <a href="https://www.instagram.com/tomasdulkys/" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/tomasdulkys/" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i></a>
    </div>
  `;

  /* =========================================================
     2) MOUNT NAV SAFELY (FIX FOR “SCALED NAV ON BUSINESS PAGE”)
     ========================================================= */

  // Detect if the page is inside a transformed/scaled ancestor (common cause of “fixed looks smaller”)
  function pageHasTransformScaling() {
    // Check body + html and one likely wrapper (main) – cheap but effective
    const nodes = [document.documentElement, document.body, document.querySelector('main')].filter(Boolean);
    return nodes.some(el => {
      const cs = getComputedStyle(el);
      return (cs.transform && cs.transform !== 'none') || (cs.zoom && cs.zoom !== '1');
    });
  }

  // Create a fixed portal only if needed (so we don’t break your layout on normal pages)
  let portal = null;
  if (pageHasTransformScaling()) {
    portal = document.createElement('div');
    portal.id = 'nav-portal';
    document.documentElement.appendChild(portal);
    portal.appendChild(nav);
  } else {
    document.body.prepend(nav);
  }

  /* =========================================================
     3) NAV CSS (YOUR ORIGINAL, UNCHANGED)
     + tiny portal CSS (only affects portal)
     ========================================================= */

  const style = document.createElement('style');
  style.textContent = `
   /* ============================
      NAV PORTAL (ONLY WHEN USED)
      If page has transform scaling, this keeps nav truly viewport-fixed.
   ============================ */
   #nav-portal{
     position: fixed;
     inset: 0;
     z-index: 999999;
     pointer-events: none; /* allow clicks only on nav */
   }
   #nav-portal .main-nav{
     pointer-events: auto;
     position: absolute; /* we control top via JS */
     top: 0;
     left: 0;
     width: 100%;
   }

   /* ============================
      BASE NAVBAR LAYOUT
   ============================ */
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
     z-index: 1000;
     box-sizing: border-box;
     transition: top 0.3s, opacity 2s ease-in-out;
     font-family: 'Roboto', sans-serif;
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

   /* LOGO IMAGE */
   .nav-brand img {
     height: 38px;
     width: auto;
     display: block;
   }

   .nav-brand {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     text-decoration: none;
   }

   /* TEXT UNDER LOGO */
   .brand-name {
     margin-top: -4px;
     font-size: 13px;
     font-weight: 300;
     color: #ffffff;
     letter-spacing: 0.06em;
     line-height: 1.05;
     text-align: center;
     opacity: 0;
     max-height: 0;
     overflow: hidden;
     transform: translateY(4px);
     transition: opacity 0.25s ease, max-height 0.25s ease, transform 0.25s ease;
   }

   .brand-name .line-2 {
     display: block;
     font-weight: 500;
     letter-spacing: 0.5em;
     margin-right: -0.60em;
   }

   .nav-brand:hover .brand-name,
   .nav-brand:focus-visible .brand-name,
   .nav-brand:active .brand-name {
     opacity: 1;
     max-height: 40px;
     transform: translateY(0);
   }

   @media (min-width: 768px) {
     .nav-logo img {
       height: 78px;
     }
   }

   /* ============================
      NAV LINKS & DROPDOWN
   ============================ */

   .nav-links {
     display: flex;
     gap: 40px;
     align-items: center;
   }

   .dropdown {
     display: flex;
     align-items: center;
   }

   .main-nav .nav-links > a,
   .main-nav .nav-links .dropdown-toggle {
     position: relative;
     color: #ffffff;
     text-decoration: none;
     font-family: 'Roboto', sans-serif;
     font-size: 16px;
     font-weight: 500;
     padding-bottom: 5px;
     transition: color 0.3s;
     text-shadow: none;
     -webkit-text-stroke: 0;
     text-rendering: geometricPrecision;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
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
     top: 100%;
     left: 50%;
     transform: translateX(-50%);
     background-color: rgba(0, 0, 0, 0.8);
     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
     padding: 15px 0 10px;
     min-width: 260px;
     display: none;
     flex-direction: column;
     z-index: 999;
     border-radius: 4px;
     max-height: min(60vh, 480px);
     overflow-y: auto;
     scrollbar-width: thin;
     scrollbar-color: #C29B88 transparent;
   }

   .dropdown:hover .dropdown-menu {
     display: flex;
   }

   .dropdown-menu::-webkit-scrollbar { width: 5px; }
   .dropdown-menu::-webkit-scrollbar-thumb {
     background: rgba(255,255,255,0.25);
     border-radius: 999px;
     transition: background 0.25s ease;
   }
   .dropdown-menu:hover::-webkit-scrollbar-thumb {
     background: rgba(255,255,255,0.45);
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
     font-family: 'Roboto', sans-serif;
     font-weight: 500;
   }

   /* ============================
      SOCIAL ICONS
   ============================ */

   .nav-social {
     display: flex;
     gap: 15px;
     align-items: center;
     padding-right: 20px;
   }

   .nav-social a {
     color: #ffffff;
     font-size: 1.3rem;
     transition: transform 0.3s, color 0.3s;
   }

   .nav-social a i,
   .nav-social a i::before {
     color: inherit;
     text-shadow: none;
     -webkit-text-stroke: 0;
   }

   /* ============================
      HAMBURGER
   ============================ */

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
     background-color: #ffffff;
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
     background-color: #ffffff;
     border-radius: 3px;
     transition: 0.5s;
   }

   .hamburger-menu div::before { transform: translateY(-7px); }
   .hamburger-menu div::after { transform: translateY(7px); }

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

   #check:checked ~ .hamburger-menu-container .hamburger-menu div { background-color: transparent; }
   #check:checked ~ .hamburger-menu-container .hamburger-menu div::before { transform: rotate(-45deg); }
   #check:checked ~ .hamburger-menu-container .hamburger-menu div::after { transform: rotate(45deg); }

   /* ============================
      MOBILE
   ============================ */

   @media screen and (max-width: 1040px) {
     body.no-scroll { overflow: hidden; height: 100vh; }

     .main-nav { padding: 0 24px; }
     .nav-social { display: none; }
     .nav-brand { align-items: flex-start; }
     .hamburger-menu-container { display: flex; }
     #check { display: block; }

     .nav-links {
       position: fixed;
       top: 0; left: 0;
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
       left: auto;
       transform: none;
       max-height: none;
       overflow-y: visible;
       min-width: 100%;
       align-items: flex-start;
       box-shadow: none;
       background-color: transparent;
       padding: 0;
     }

     .dropdown-menu a { font-size: 1.2rem; overflow: hidden; }
     .dropdown:hover { display: block; }
     .dropdown.active .dropdown-menu { display: flex; }
     .dropdown-link { width: 100%; }

     .dropdown-link a {
       display: block;
       width: 100%;
       box-sizing: border-box;
       background-color: transparent;
       color: #fff;
       text-align: left;
     }
   }

   /* ============================
      THEMES (BASE COLORS ONLY)
   ============================ */

   .main-nav.nav--light .nav-links > a,
   .main-nav.nav--light .nav-links .dropdown-toggle {
     color: #111111;
     font-weight: 600;
   }

   .main-nav.nav--light .nav-social a { color: #111111; }
   .main-nav.nav--light .brand-name { color: #111111; }

   .main-nav.nav--light .hamburger-menu div,
   .main-nav.nav--light .hamburger-menu div::before,
   .main-nav.nav--light .hamburger-menu div::after {
     background-color: #111111;
   }

   .main-nav.nav--light .dropdown-menu { background-color: rgba(255, 255, 255, 0.96); }
   .main-nav.nav--light .dropdown-link a { color: #111111; }

   /* ============================
      HOVER – SAME IN BOTH THEMES
   ============================ */

   .main-nav .nav-links > a:hover,
   .main-nav .nav-links .dropdown-toggle:hover {
     color: #C29B88 !important;
   }

   .main-nav .nav-links > a:hover::after,
   .main-nav .nav-links .dropdown-toggle:hover::after {
     width: 100%;
   }

   .dropdown-link a:hover {
     background-color: #222;
     color: #C29B88 !important;
   }

   .main-nav .nav-social a:hover {
     transform: scale(1.2);
     color: #C29B88 !important;
   }

   .main-nav .nav-social a:hover i,
   .main-nav .nav-social a:hover i::before {
     color: #C29B88 !important;
     text-shadow: none !important;
     -webkit-text-stroke: 0 !important;
   }
  `;
  document.head.appendChild(style);

  /* =========================================================
     4) HIDE LIVE CV LINK ON SOME PAGES (YOUR ORIGINAL)
     ========================================================= */
  const currentPage = window.location.pathname.split('/').pop();
  const liveCvNavLink = nav.querySelector('.nav-links a[href="livecv.html"]');
  const hideCvOn = ['index.html', 'about.html', 'contact.html', ''];
  if (liveCvNavLink && hideCvOn.includes(currentPage)) {
    liveCvNavLink.remove();
  }

  /* =========================================================
     5) THEME + LOGO SWITCH (YOUR ORIGINAL)
     ========================================================= */
  const logoImg = nav.querySelector('.nav-brand img');
  const BLACK_LOGO = "assets/logo/logo_black.png";
  const WHITE_LOGO = "assets/logo/logo_white.png";

  function setNavTheme(theme) {
    if (theme === "dark") {
      nav.classList.add("nav--light");
      if (logoImg) logoImg.src = BLACK_LOGO;
    } else {
      nav.classList.remove("nav--light");
      if (logoImg) logoImg.src = WHITE_LOGO;
    }
  }

  const isBrandPage =
    window.location.pathname.includes("business-plan-report.html") ||
    window.location.pathname.includes("oiseth-hotel-renovation.html");

  const themeSections = isBrandPage
    ? Array.from(document.querySelectorAll("[data-nav-theme]"))
    : [];

  function updateNavThemeOnScroll() {
    if (!themeSections.length) return;

    const viewportCenter = window.innerHeight / 2;
    let activeTheme = themeSections[0].dataset.navTheme || "dark";

    themeSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= viewportCenter) {
        activeTheme = section.dataset.navTheme || activeTheme;
      }
    });

    setNavTheme(activeTheme);
  }

  updateNavThemeOnScroll();
  window.addEventListener("scroll", updateNavThemeOnScroll, { passive: true });
  window.addEventListener("resize", updateNavThemeOnScroll);

  /* =========================================================
     6) NAV FADE IN ON WELCOME (YOUR ORIGINAL)
     ========================================================= */
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

  /* =========================================================
     7) SHOW/HIDE NAV ON SCROLL (YOUR ORIGINAL)
     Works for body-mounted OR portal-mounted nav.
     ========================================================= */
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    nav.style.top = currentScroll > lastScroll ? '-100px' : '0';
    lastScroll = currentScroll;
  });

  /* =========================================================
     8) MOBILE CHECKBOX TOGGLE (YOUR ORIGINAL)
     ========================================================= */
  const checkbox = document.getElementById('check');

  checkbox.addEventListener('change', () => {
    const isMobile = window.innerWidth <= 1040;

    if (checkbox.checked && isMobile) {
      document.body.classList.add('no-scroll');
      nav.classList.remove('nav--light');
      if (logoImg) logoImg.src = WHITE_LOGO;
    } else {
      document.body.classList.remove('no-scroll');
      updateNavThemeOnScroll();
    }
  });

  /* =========================================================
     9) VIDEO TRANSITION NAVIGATION (YOUR ORIGINAL)
     ========================================================= */
  const links = document.querySelectorAll('.nav-links a, .dropdown-menu a');
  const video = document.querySelector('.background-video');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute("href") === "livecv.html") return;
      if (link.target === '_blank') return;

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

  /* =========================================================
     10) LIVE CV OPEN IN NEW TAB WITH FADE (YOUR ORIGINAL)
     ========================================================= */
  const liveCvLink2 = document.querySelector('.nav-links a[href="livecv.html"]');
  if (liveCvLink2) {
    liveCvLink2.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.style.transition = "opacity 0.6s ease";
      document.body.style.opacity = "0";

      setTimeout(() => {
        window.open("livecv.html", "_blank");
        document.body.style.opacity = "1";
      }, 600);
    });
  }
});
