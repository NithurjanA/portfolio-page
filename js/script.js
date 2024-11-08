document.addEventListener("DOMContentLoaded", () => {
    /* Menu */
    const menu = document.querySelector("nav");
    document.getElementById("menu").addEventListener("click", () => {
      menu.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  
    document.getElementById("close").addEventListener("click", () => {
      menu.style.display = "none";
      document.body.style.overflow = "auto";
    });
  
    const menuLinks = document.querySelectorAll("nav a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.style.display = "none";
        document.body.style.overflow = "auto";
      });
    });

    /* Percentages */
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll(".skill").forEach((skill) => {
          const percentage = parseInt(skill.getAttribute("data-percentage"));
          const percentageText = skill.querySelector(".percentage-text");
          const percentageFill = skill.querySelector(".percentage-fill");
          let count = 0;
          const counter = setInterval(() => {
            count = Math.min(count + 1, percentage);
            percentageText.textContent = `${count}%`;
            percentageFill.style.width = `${count}%`;
            if (count >= percentage) clearInterval(counter);
          }, 25);
        });
        observer.disconnect();
      }
    },
    { rootMargin: "0px 0px -200px 0px" }
  );
  observer.observe(document.querySelector(".skills"));
});