console.log('************* Objetos**************');

const persona =  {
    nombre: 'cristian ',
    apellido1: 'casas',
    apellido2: 'pena',
    fecha_nacimiento: '1998-08-16',
    direccion: {
        viaPrincipal: 'calle',
        numeroVia: '2a',
        placa: '74-32',
        barrio: 'colinas del sur',
        location: 'sur',
        comuna: '18',
            casa:{
                cantidadPisos: '2',
                cantidadCuartos: '3',
                colorCasa: 'blanco',
                numeroPersona: '3',
                estrato: '3',
                   
            },
            servicios: {
                internet: 'incluido',
                agua: 'incluido',
                energia: 'incluido',
                gas: 'incluido',
                alcantarillado: 'incluido',
            }
        
    }
}

console.table(persona);
// console.info(persona);
console.log('************* CLONACION DE OBJETOS**************');

let otraPersona = {...persona}

otraPersona.nombre = 'emmanuel';
otraPersona.apellido1 = 'apellido1'
otraPersona.apellido2 = 'apellido2'
otraPersona.fecha_nacimiento = '1998-08-16'

console.table(otraPersona);

console.log('************* OBJETOS DINAMICOS **************');

const personaDinamica =  {
    nombre: 'cristian ',
    apellido1: 'casas',
    apellido2: 'pena',
    fecha_nacimiento: '1998-08-16',
    direccion: {
        viaPrincipal: 'calle',
        numeroVia: '2a',
        placa: '74-32',
        barrio: 'colinas del sur',
        location: 'sur',
        comuna: '18', 
    },
    NombreCompleto(){
        console.log(`mi nombre es ${this.nombre} ${this.apellido1} ${this.apellido2}` );
    },
    mostrarTabla(){
        console.table(this);
    }
}

let Obj = Object.create(personaDinamica);

Obj.nombre = 'emmanuel';
Obj.NombreCompleto();
// Obj.mostrarTabla();

console.log('************* OBJETOS DINAMICO2 **************');

var libro = {
    id: 123456789,
    titulo: 'programacion en javascript',
    anio: '2020',
    editorial: 'universal',
    autor:{
        nombre: 'cristian',
        apellido: 'casas',
        edad: '22',
        estudios: 'ingenieria en sistemas',

    },
    presentacion(){
        console.log(`mi nombre es ${this.autor['nombre']} autor del libro ${this.titulo}` );
    }
};

let objeto = Object.create(libro);

objeto.presentacion();