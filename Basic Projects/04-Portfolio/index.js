// script.js
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const subject = this.subject.value.trim();
    const message = this.message.value.trim();
  
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    alert("Thank you for contacting me, " + name + "!");
    this.reset();
  });
  
  const links = document.querySelectorAll(".nav-links a");
  window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });
    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
  