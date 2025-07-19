document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Menu Toggle
  const toggleBtn = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebarMenu');
  const overlay = document.getElementById('menuOverlay');
  const closeBtn = document.getElementById('closeSidebar');
  const carouselElement = document.querySelector('#homepageCarousel');
  const carousel = new bootstrap.Carousel(carouselElement);

  // Open sidebar
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('show');
    overlay.classList.add('show');
    document.body.classList.add('freeze-scroll');
    carousel.pause(); // Pause carousel when menu opens
  });

  // Close sidebar
  const closeMenu = () => {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    document.body.classList.remove('freeze-scroll');
    carousel.cycle(); // Resume carousel when menu closes
  };

  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.offcanvas-menu .nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Counter Animation
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = Math.ceil(target / 100);
      if (current < target) {
        counter.innerText = Math.min(current + increment, target);
        setTimeout(updateCounter, 30);
      }
    };
    updateCounter();
  });

  // Dynamic Footer Year
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});




// Show button when user scrolls down
window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Scroll to top when button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
