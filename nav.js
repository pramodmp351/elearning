document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("azcNavbar");
  const hamburger = document.getElementById("azcHamburger");
  const mobileMenu = document.getElementById("azcMobileMenu");
  const closeBtn = document.getElementById("azcClose");
  const buttons = document.querySelectorAll(".azcBtn");

  // Scroll Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("azcScrolled");
    } else {
      navbar.classList.remove("azcScrolled");
    }
  });

  // Mobile Menu Toggle
  const toggleMenu = () => {
    mobileMenu.classList.toggle("azcOpen");
    document.body.style.overflow = mobileMenu.classList.contains("azcOpen")
      ? "hidden"
      : "auto";
  };

  hamburger.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);

  // Close menu on link click
  document.querySelectorAll(".azcMobileItem").forEach((item) => {
    item.addEventListener("click", toggleMenu);
  });

  // Ripple Effect for Buttons
  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      let x = e.clientX - e.target.getBoundingClientRect().left;
      let y = e.clientY - e.target.getBoundingClientRect().top;

      let ripple = document.createElement("span");
      ripple.className = "azcRipple";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Active Link Highlight Logic
  const navItems = document.querySelectorAll(".azcNavItem");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((nav) => (nav.style.color = "var(--azcPrimary)"));
      this.style.color = "#000";
    });
  });
});
