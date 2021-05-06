const { type } = require('os');
const readline = require('readline');
var y = 0;
let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question(' escriba un número', function(respuesta){
    let numero = respuesta;
    var num_inver = numero.split("").reverse().join("");
    if (numero == num_inver) { //Si la palabra es igual a la palabra girada.
    console.log("el número '"+numero+"' SI es capicua");
    
    }
    else {
        console.log("el número '"+numero+"' NO es capicua: '"+num_inver+"'");
    
    }
    
    interfazCaptura.close();
});
