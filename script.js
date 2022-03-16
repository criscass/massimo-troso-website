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

// Lightbox for opening modal of single pictures
const artworkImages = document.querySelectorAll(".artwork-img");
const lightbox = document.createElement("div");

lightbox.id = "lightbox";

artworkImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    // const img = document.createElement("img");

    lightbox.insertAdjacentHTML(
      "beforeend",

      `
      <svg width="24" height="24"  viewBox="0 0 24 24">
          <path
            stroke="rgb(212, 212, 212)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M17.25 6.75L6.75 17.25"
          ></path>
          <path
            stroke="rgb(212, 212, 212)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M6.75 6.75L17.25 17.25"
          ></path>
        </svg>
      <img src=${image.src} alt="#" />
      
      `
    );

    // img.src = image.src;

    // while (lightbox.firstChild) {
    //   lightbox.removeChild(lightbox.firstChild);
    // }
    // lightbox.appendChild(img);
  });
});

// create closing x button

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;

  lightbox.classList.remove("active");
  document.querySelector("#lightbox img").remove();
  document.querySelector("#lightbox svg").remove();
});

document.body.appendChild(lightbox);

// end of Ligthbox

const heroOptions = {
  rootMargin: "0px 0px 0px 0px",
};

const toggleMenu = function () {
  navLinks.classList.toggle("nav-links-active");
  burgerMenu.classList.toggle("active");
};

function toogleMoreArtwork() {
  moreContent.forEach((entry) => {
    entry.style.display = "block";
  });

  moreArtworks.style.display = "none";
}

moreArtworks.addEventListener("click", () => {
  toogleMoreArtwork();
});

burgerMenu.addEventListener("click", () => {
  // toggle nav
  toggleMenu();
});

artworks.addEventListener("click", () => {
  toogleMoreArtwork();
  toggleMenu();
});
about.addEventListener("click", () => {
  toggleMenu();
});
contacts.addEventListener("click", () => {
  toggleMenu();
});

const heroObserver = new IntersectionObserver(function (entries, heroObserver) {
  entries.forEach((entry) => {
    headWrapper.classList.toggle("scrolled", !entry.isIntersecting);
  });
}, heroOptions);

heroObserver.observe(spacer);
