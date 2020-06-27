const ciudades = ['Londres', 'New York', 'Madril'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre');
datos.set('Profesion', 'Actor de Comedia');


//Entries Iterator

for(let ciudad of ciudades.entries()) {
    console.log(ciudad);
}

for (let orden of ordenes.entries()){
    console.log(orden);
}

for(let dato of datos.entries()) {
    console.log(dato);
}

// Values iterator

for (let ciudad of ciudades.values()) {
    console.log(ciudad);
}

// Keys iterator

for (let ciudad of ciudades.keys()) {
    console.log(ciudad);
}

// Iterators for Strings
 const mensaje = 'Aprendiendo Java Script';
 
 for(let letra of mensaje){
    console.log(letra)  
 }

 const enlaces = document.getElementsByTagName('a');

 for(let enlace of enlaces) {
     console.log(enlace.href)
 }