const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((element) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
document
  .querySelectorAll(".animation-on-scroll")
  .forEach((el) => observer.observe(el));
