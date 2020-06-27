
// const persona = {
//     nombre: 'Miguel',
//     apellido: 'Juarez',
//     profesion: 'Diseñador de Exteriores',
//     email: 'un_email@mail.com',
//     edad: 20,
//     musica: ['Rock', 'Cumbia', 'POP'],
//     hogar:{
//         ciudad: "Mexico",
//         pais: "Mexico",
//         cp: 78425
//     },
//     año_nacimiento: function() {
//         return new Date().getFullYear() - this.edad
//     }
// }

// persona.musica.push('Norteña')
// console.log(persona.musica[2]);
// console.log(persona.hogar['pais '])    
// console.log(persona.hogar.cp)
// console.log(persona.fecha_nacimiento())

const autos = [
    {modelo: 'Mustang', motor:'8.0'},
    {modelo: 'Camaro', motor:'8.5'},
    {modelo: '350Z', motor:'3.5'}
]

for (let i = 0; i < autos.length; i++){
    console.log(`Modelo: ${autos[i].modelo} Motor: ${autos[i].motor}`)
}