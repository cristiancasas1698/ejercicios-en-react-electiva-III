


const { type } = require('os');
const readline = require('readline');
var y = 0;
let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question(' escriba un número entero sin puntos,comas: ', function(respuesta){
   
    respuesta.split('').forEach(respuesta => y += parseInt(respuesta));
   console.log(`la suma  es: ${y}`);

    interfazCaptura.close();
});