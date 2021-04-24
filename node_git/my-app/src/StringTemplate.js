console.log('*************String Template**************');

const apellido = "casas";
let Nombre = "Cristian Emmanuel";

let variable = 11;

let StringTemplate = `señor ${Nombre} ${apellido} su multiplicacion es: ${(variable * 2)}`;

console.log('señor', apellido , 'su multiplicacion es:', (variable * 2));

console.log(StringTemplate);

console.log('*************Funciones en javascript **************');
function ramdomico(param) {
    return `Numero random ${Math.round(Math.random()*100)} parametro >>>>>> ${param}`;
}
console.log(`esta es la funcion de javascript: ${ramdomico("hola")}`);


function ejemplo(param) {
    return `Numero random ${Math.round(Math.random()*100)} parametro >>>>>> ${param}`;
}


var arr = [ 'hola', 'esto', 'es', 'un array' ];
 
console.info( `My chain joined: ${ arr.join( ' ' ) }` );