const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar', 'LOL']

pendientes.forEach(function(pendiente, index){
    console.log(`${index+1} ${pendiente}`)
});


// Map for travel an array of objects

const carrito = [
    {id:1, producto:'Libro'},
    {id:2, producto:'Camisa'},
    {id:3, producto:'Libro'},
    {id:4, producto:'Guitarra'},
];

// We generate an array from object values
const nombre_producto = carrito.map(function(carrito){
    return carrito.producto;
});

console.log(nombre_producto);

// Another way of travel in an object is with a FOR LOOP

const automovil = {
    modelo: 'Camaro',
    motor: 6.8,
    anhio: 2006,
    marca: 'Chevrolet'
}
for (let caracteristica in automovil) {
    console.log(`${caracteristica} : ${automovil[caracteristica]}`);
}
