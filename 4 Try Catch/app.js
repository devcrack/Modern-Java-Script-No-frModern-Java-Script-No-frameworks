try {
    // algo();
    obtener_clientes();
} 
catch (error) {
    console.log(console.error);
}
finally {
    console.log('Haya o no error el finally siempre se va a ejectura');
}


function obtener_clientes(){
    console.log('Descargando...');

    setTimeout(function(){
        console.log('Completo');
    }, 3000);
}
