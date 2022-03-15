import createModal from "/createModal.js";

createModal();

//Global query Selectors
const modalableImages = document.querySelectorAll('[data-modal="true"]');
const modalContainer = document.querySelector(".modal-container");
const modalTrack = document.querySelector(".modal__img-container");

// all galleries shared
let transitionSpeed;
let galleries;

// for each gallery
let modalImages;
let modalIndicators;
let currentIndex;
let lastIndex;
let isMoving = false;

class Modal {
  constructor(modal) {
    this.modal = modal;
    this.attachEventListners();
  }

  openModal() {
    modalableImages.forEach((btn) => (btn.tabIndex = -1));
    this.modal.removeAttribute("hidden");
    this.modal.classList.add("active");
  }

  closeModal() {
    modalableImages.forEach((btn) => (btn.tabIndex = 0));
    this.modal.setAttribute("hidden", "true");
    this.modal.classList.remove("active");
  }

  attachEventListners() {
    this.modal.addEventListener("click", (e) => {
      e.target === e.currentTarget ||
      e.target.classList.contains("modal__close")
        ? this.closeModal()
        : null;
    });
  }
}

const modal = new Modal(modalContainer);

function updateGallery(galleryImages) {
  currentIndex = 1;
  lastIndex = galleryImages.length;
}

//event listeners
function attachOpenGalleryEvenListeners() {
  modalableImages.forEach((btn) => {
    btn.addEventListener("click", () => {
      // updateGallery(gallery);
      console.log(btn);
      modal.openModal();
    });
  });
}

attachOpenGalleryEvenListeners();

window.addEventListener("keyup", (e) => {
  if (e.key === "Escape" && modalContainer.classList.contains("active")) {
    modal.closeModal();
  }
});

// function updateGallery

export default async function initGallery(endpoint, options) {
  await fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      galleries = data;
      console.log(galleries);

      transitionSpeed = options?.speed || 250;
      attachOpenGalleryEvenListeners();
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation",
        error
      );
    });
}
