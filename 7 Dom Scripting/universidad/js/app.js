// // Eliminar de Local Storage
// // localStorage.clear();

// let elemento = document;

// elemento = elemento.all; // This return everything but in array form 
// elemento = document.head; // get the element with HEAD Tag
// elemento = document.body; // Get the HTML element with BODY Tag
// elemento = document.domain;// Get the URL or the Domain
// elemento = document.characterSet; 
// elemento = document.forms; // Get an array which contains all elements with FORM tags;
// elemento = elemento[0];
// elemento = elemento.id; // Get the id of the element
// elemento = document.forms[0].className; // Get the classes for this FORM element;
// elemento = document.forms[0].classList; // Get a LIST of classes of this FORM element;
// elemento = document.images; // Get a list of all images in the document; 

// elemento = document.scripts; // Get the numbers of scripts in the document
// let images = document.images;
// let images_array = Array.from(images);
// // console.log(images)
// // console.log(images_array);

// images_array.forEach(function(pic){
// console.log(pic);
// });

//Query Selector
// With query selector you can use the syntatic elements used in CSS for select elements of your document
const encabezado = document.querySelector('#encabezado');

console.log(encabezado);

// Now we can apply some css properties all just using JavaScript;

encabezado.style.background = "#333";
encabezado.style.color = "#ffffff";
encabezado.textContent = "Cosas chingonas";

// Then with queryselector you can elements trough a css class

const otro_elemento = document.querySelector('.enlace'); // This only return the first element found it with .enlace class.
console.log(otro_elemento);

//If you want select all the elements with the same css class you need to use querySelectorAll


//Also you can select elements by HTML Tags

const elemento_2 = document.querySelector('h1');

// Query selecto using CSS 3 syntactic elements 

let enlace = document.querySelector('#principal');

// console.log(enlace);

// mixing querySelectors with getEelementsByClassName

const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');

// console.log(listaEnlaces);

// Changing properties with getElementByTagName. The tagName is the name of the HTML Tag.

const links = document.getElementsByTagName('a');
links[18].style.color = 'red';

let array_links = Array.from(links); // Create an array from query multiple selector

array_links.forEach(function(_link){
    console.log(_link.textContent);
});

// console.log(links);


// Selecting all elements with id principal and from there select all elements with tag 
// This return an array so, then from there we pick all the values of odd positions in the array
const links2 = document.querySelectorAll('#principal a:nth-child(odd)');

// Now we gonna change some properties of this set of elements 

links2.forEach(function(_link){
    _link.style.background = 'red';
})


