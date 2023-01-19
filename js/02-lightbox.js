import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onGalleryItemClick);

const elementOfGalleryMarkup = galleryItems
  .map(
    (image) =>
      `<a class="gallery__item" href="${image.original}" ><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}" /></a>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", elementOfGalleryMarkup);

function onGalleryItemClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: "250",
    alertError: "false",
  });
}
