// Eliminar de Local Storage
// localStorage.clear();

let elemento = document;

elemento = elemento.all; // This return everything but in array form 
elemento = document.head; // get the element with HEAD Tag
elemento = document.body; // Get the HTML element with BODY Tag
elemento = document.domain;// Get the URL or the Domain
elemento = document.characterSet; 
elemento = document.forms; // Get an array which contains all elements with FORM tags;
elemento = elemento[0];
elemento = elemento.id; // Get the id of the element
elemento = document.forms[0].className; // Get the classes for this FORM element;
elemento = document.forms[0].classList; // Get a LIST of classes of this FORM element;
elemento = document.images; // Get a list of all images in the document;

elemento = document.scripts; // Get the numbers of scripts in the document
let images = document.images;
let images_array = Array.from(images);
// console.log(images)
// console.log(images_array);

images_array.forEach(function(pic){
    console.log(pic);
});