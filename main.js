// About section
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".show-on-scroll");

  elements.forEach(function (el) {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
});
