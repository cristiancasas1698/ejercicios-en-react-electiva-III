const { type } = require('os');
const readline = require('readline');
var y = 0;
let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question(' escriba un número entero: ', function(respuesta){
    let numero = respuesta;
    interfazCaptura.question(' escriba un dígito', function(digito){
        let numero = digito;  
        console.log(`el dígito "${digito}" ${respuesta.includes(digito)? 'está' : 'no está'} contenido en el número`);
    interfazCaptura.close();
});
});


