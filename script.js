const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links li");

const headWrapper = document.querySelector(".head-wrapper");
const header = document.querySelector("header");
const spacer = document.querySelector(".spacer");
const title = document.querySelector(".title");
const artworks = document.querySelector(".artworks-link");
const about = document.querySelector(".about-link");
const contacts = document.querySelector(".contacts-link");
const moreArtworks = document.querySelector(".more-artworks");
const moreContent = document.querySelectorAll(".more-content");

const heroOptions = {
  rootMargin: "0px 0px 0px 0px",
};

const toggleMenu = function () {
  navLinks.classList.toggle("nav-links-active");
  burgerMenu.classList.toggle("active");
};

burgerMenu.addEventListener("click", () => {
  // toggle nav
  toggleMenu();
});

artworks.addEventListener("click", () => {
  toggleMenu();
});
about.addEventListener("click", () => {
  toggleMenu();
});
contacts.addEventListener("click", () => {
  toggleMenu();
});

moreArtworks.addEventListener("click", () => {
  moreContent.forEach((entry) => {
    entry.style.display = "block";
  });

  moreArtworks.style.display = "none";
});

const heroObserver = new IntersectionObserver(function (entries, heroObserver) {
  entries.forEach((entry) => {
    headWrapper.classList.toggle("scrolled", !entry.isIntersecting);
  });
}, heroOptions);

heroObserver.observe(spacer);
