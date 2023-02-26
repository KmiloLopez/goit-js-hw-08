// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// Described in documentation;

import SimpleLightbox from "simplelightbox";
// Additional styles import

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(SimpleLightbox)

//from hw 07
const divRef = document.querySelector('.gallery')

function createGalleryM(items){
    return items
        .map(
            (item)=> `
            <a class="gallery__item" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    
                    alt="${item.description}"
                    />
                    </a>
                    </div>`
        )
        .join("")
}
const addgalleryM = createGalleryM(galleryItems)
divRef.innerHTML=addgalleryM
divRef.addEventListener('click',onImageClick)
function onImageClick(event){
    blockStardartAction(event)
    if(event.target.nodeName !== "IMG"){
        return;
    }
//from lightbox website
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

//
divRef.addEventListener("keydown", (event) => {
    if(event.code === "Escape"){
        instance.close();
    }
})
}
function blockStardartAction(event){
event.preventDefault()
}
