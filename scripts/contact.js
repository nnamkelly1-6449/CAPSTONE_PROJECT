const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  // Simple animation: button loading
  const btn = form.querySelector(".btn-submit");
  btn.innerText = "Sending...";
  btn.disabled = true;

  // Fake "send" delay
  setTimeout(() => {
    form.style.display = "none"; // hide form
    successMsg.style.display = "block"; // show success

    // Reset after 3 seconds
    setTimeout(() => {
      form.reset();
      form.style.display = "block";
      successMsg.style.display = "none";
      btn.innerText = "Send Message";
      btn.disabled = false;
    }, 3000);
  }, 1500);
});

// Input focus animation enhancement
document
  .querySelectorAll(".input-group input, .input-group textarea")
  .forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.style.transform = "scale(1.02)";
    });
    input.addEventListener("blur", () => {
      input.parentElement.style.transform = "scale(1)";
    });
  });
