import galleryItems from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const modal = document.querySelector(".lightbox");
const modalImg = document.querySelector(".lightbox__image");

gallery.append(...createGallery());

function createGallery() {
  return galleryItems.map((image) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    const img = document.createElement("img");

    li.classList.add("gallery__item");

    link.classList.add("gallery__link");
    link.href = image.original;
    link.onclick = function() {
      return false;
    };

    img.classList.add("gallery__image", "data-source");
    img.src = image.preview;
    img.alt = image.description;
    img.dataset.source = image.original;

    link.append(img);
    li.append(link);
    return li;
  });
}

function showCover(e) {
  const target = e.target;

  if (target.tagName !== "IMG") return;

  modal.classList.add("is-open");

  modalImg.src = target.dataset.source;
}

function hideCover(e) {
  modalImg.src = "";
  modal.classList.remove("is-open");
}

function keysInput(e) {
  switch (e.code) {
    case "Escape":
      modalImg.src = "";
      modal.classList.remove("is-open");
      break;

    case "ArrowRight":
      break;

    case "ArrowLeft":
      break;
  }
}

gallery.addEventListener("click", showCover);
modal.addEventListener("click", hideCover);
document.addEventListener("keyup", keysInput);
