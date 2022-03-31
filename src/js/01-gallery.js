// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";

const galleryEl = document.querySelector(".gallery")

function createGallery (galleryItems) {
    return galleryItems.map(({original, preview, description}) => {
        return `<a 
      class="gallery__item" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}"/>
    </a>`
    }).join("")
}
galleryEl.insertAdjacentHTML("afterbegin", createGallery (galleryItems)); 

const lightbox = new SimpleLightbox(".gallery a", { 
    captionsData: "alt",
    captionType: "attr",
    captionDelay: 250, 
});
console.log(galleryItems);



