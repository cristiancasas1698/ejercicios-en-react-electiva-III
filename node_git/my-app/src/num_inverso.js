const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question(' escriba un número entero: ', function(respuesta){

     let numero = Number(respuesta.toString().split('').reverse().join(''))
   console.log(`su numero invertido es: ${numero}`);

    interfazCaptura.close();
});