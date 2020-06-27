// FUnction declaration 
// Function declaration

function saludar(nombre) { // Default value to nombre variable in the old way if this variable not recieve a value.
    if (typeof nombre === 'undefined') { nombre='Visitante'}
    return `Hola ${nombre}`

}

function saludar(nombre = 'Visitante') { // Default value to nombre variable in the new way if this variable not recieve a value.
    return `Hola ${nombre}`; 
}


console.log(saludar())


// Function expression 

const suma =  function(a = 3 , b = 10){
    return a + b;
}

console.log(suma(4));
console.log(suma(10, 23 ));


// IIFE 
(function (tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
})('Javascript');