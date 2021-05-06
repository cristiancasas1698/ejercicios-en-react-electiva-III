const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 const esPrimo = numero => {
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}

	return true;
}
interfazCaptura.question(' escriba un número entero: ', function(respuesta){
let number= [respuesta];

number.forEach(numero => {
	console.log("¿%d es primo? %s", numero, esPrimo(numero));
    interfazCaptura.close();
});
});