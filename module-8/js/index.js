import galleryItems from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const modal = document.querySelector(".lightbox");
const modalContent = document.querySelector(".lightbox__content");
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
  const { target } = e;

  if (target.tagName !== "IMG") return;

  modal.classList.add("is-open");

  modalImg.src = target.dataset.source;
  e.preventDefault();
}

function removeClass() {
  modalImg.src = "";
  modal.classList.remove("is-open");
}

function hideCoverBtn(e) {
  const btn = e.target.closest("button");
  if (btn) {
    removeClass();
  }
}

function hideCover(e) {
  if (e.target === modalContent) {
    removeClass();
  }
}

function keysInput(e) {
  const galleryItemsHref = galleryItems.map((el) => el.original);
  const currentHref = galleryItemsHref.findIndex((el) => el === modalImg.src);
  const nextPicture = galleryItemsHref[currentHref + 1];
  const prevPicture = galleryItemsHref[currentHref - 1];

  switch (e.code) {
    case "Escape":
      modalImg.src = "";
      modal.classList.remove("is-open");

      break;

    case "ArrowRight":
      if (nextPicture) {
        modalImg.src = nextPicture;
      }
      break;

    case "ArrowLeft":
      if (prevPicture) {
        modalImg.src = prevPicture;
      }

      break;

    default:
      break;
  }
}

gallery.addEventListener("click", showCover);

modal.addEventListener("click", hideCover);
modal.addEventListener("click", hideCoverBtn);

document.addEventListener("keyup", keysInput);
