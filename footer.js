document.addEventListener("DOMContentLoaded", () => {
  const subscribeBtn = document.getElementById("dvgSubscribeBtn");
  const emailInput = document.getElementById("dvgEmailInput");

  // Newsletter Simulation
  // subscribeBtn.addEventListener("click", () => {
  //   const email = emailInput.value.trim();
  //   if (email && email.includes("@")) {
  //     subscribeBtn.textContent = "THANKS!";
  //     subscribeBtn.style.background = "#28a745";
  //     emailInput.value = "";
  //     setTimeout(() => {
  //       subscribeBtn.textContent = "GO";
  //       subscribeBtn.style.background = "var(--dvgPrimary)";
  //     }, 3000);
  //   } else {
  //     emailInput.style.borderColor = "#ff4d4d";
  //     setTimeout(
  //       () => (emailInput.style.borderColor = "transparent"),
  //       2000,
  //     );
  //   }
  // });

  // Intersection Observer for Scroll Animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("dvgAnimate");
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".dvgAnimate")
    .forEach((el) => observer.observe(el));
});
