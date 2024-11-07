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