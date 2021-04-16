console.log('alcance de varibles');

var variableglobal = 'variable de alcance global';
const variblesconstante = 'variables durante la ejecucion';
let variablelocal = 'ABC';
let variablenumerico = 123456;

console.log('variable de alcance global 1.' + variableglobal);
console.log('constante' + variblesconstante);

{
  variableglobal = 'otro valor';
  console.log('variable de alcance global 2.'+ variableglobal);
  let variablelocal = 'ABC';
}
if (true) {
  console.log('DENTRO DEL IF');
  let numerox = 11;
  let numeroy = 76;
  console.log('operacion de multipplicacion = ' + (numerox * numeroy));
}

console.log('----------------- SELECTOR ----------------');
let letkey = 2;
switch (letkey) {
  case 1:
    console.log('caso para 1');
    break;
  case 2:
    console.log('caso para 2');
    break;
  case 3:
      console.log('caso para 3');
      break;
  default:
    console.log('valor no determinado');
    break;
}

console.log('----------------- BUCLE ----------------');
let limiteBucle = 10;
let contador = 0;
console.log('---- BUCLE DO WHILE ----');
do {
  contador++;
  console.log('contador en :'+contador)
  
} while (contador < limiteBucle);


console.log('---- WHILE ----');
let condicion = true;
let contador2 = 0;
let suma = 0;

while (condicion) {
  let Random = Math.random() * 10;
  suma += Random;
  
  contador2++;
  console.log('cantidad de ejecuciones: '+ contador2);
  console.log('valor de la suma :'+ suma);

  if (suma > 100) {
    condicion = false;
    console.log('salida del bucle')
  }
}

console.log('---- BUCLES FOREACH ----');

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,200,400,500];

numeros.forEach(function(value) {
  if(value % 2 == 0){
    console.log('este numero es par: '+ value);
  }else{
    console.log('estes numero es impar: '+ value);
  }
});


console.log('numero random: '+ array);

let limitefor = 20;

for (let index = 0; index < limitefor; index++) {
  let randomform = Math.round(Math.random()*10);

  console.log('indice for: '+index);
  console.log('numero random: '+randomform);
  
}