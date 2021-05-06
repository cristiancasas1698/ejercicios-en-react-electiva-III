/* Crear un objeto vehiculo que contenga atributos como tamaño del tanque de combustible, kilometros por litro, 
radio de las llantas y el color; contendra las siguientes funciones:
1. con el radio de las llantas una funcionalidad del vehiculo calculara cuanto recorre con un giro de la llanta
2. una funcionalidad tanquear el vehiculo llenara el vehiculo con litros de combustible basado en un calculo randomico
3. otra funcionalidad encendera el vehiculo solo si este cuenta con minimo 2 litros de combustible y acelerar n veces 
de acuerdo con un calculo randomico
4. otra funcionalidad acelerara el vehiculo con base en un calculo randomico, siempre y cuando haya combustible, 
conforme avance debera consumir el combustible
5. otra funcionalidad apagara el vehiculo cuando el combustible se haya acabado.

Se necesita conocer cuando cuantos kilometros recorrio el vehiculo.

Entregables: 

Firma digital del equipo

Upload al git

Demostracion de la ejecucion con base en el programa realizado, grabar video o subir otro medio. */

console.log('************* EJERCICIO 22 ABRIL **************');
console.log('------------------------------------------');

const vehiculo =  {
    marca: 'toyota',
    tamanio_tanque: 50,
    kilometros_litros: 1,
    radio_llantas: 20,
    color: 'negro',
    estado: false,
    cantidad_combustible: 0,
    odometro: 0,
    encender(){ 
        if (this.cantidad_combustible >= 2) {
            this.estado = true;
            console.log('EL VEHICULO ESTA ENCENDIDO Y CUENTA CON LA SIGUIENTE CANTIDAD DE GASOLINA: ', this.cantidad_combustible);
            console.log('------------------------------------------');
        }else{
            console.log('EL VEHICULO NO SE PUEDE ENCENDER PORQUE NO CUENTA CON MINIMO 2 LITROS DE GASOLINA, GASOLINA ACTUAL: ', this.cantidad_combustible);
            console.log('------------------------------------------');
        }
    },
    apagar(){
        if (this.cantidad_combustible <= 0) {
            this.estado = false;
            console.log('EL VEHICULO HA AGOTADO TODA SU GASOLINA POR O CUAL SE VA APAGAR');
        }
    },
    llenar_tanque(){
        this.cantidad_combustible = Math.round(Math.random() * (50 - 1) + 1);
        console.log('SE HA TANQUEADO EL VEHICULO CON LA SIGUIENTE CANTIDAD DE GASOLINA: '+ this.cantidad_combustible);
        console.log('------------------------------------------');
    },
    acelerar(){
        while (this.cantidad_combustible > 0) {
            let kilometros_recorrido = Math.round(Math.random() * (10 - 1) + 1); //
            let combustible_consumido = this.cantidad_combustible - kilometros_recorrido;
              if (this.cantidad_combustible < kilometros_recorrido) {
                    console.log('SE HA AGOTADO LA GASOLINA DEBIDO A QUE EL VEHICULO TENIA CAPACIDAD PARA RECORRER: '+ this.cantidad_combustible + 'KM \n '+
                    'POR LO CUAL SE RECORRIO: ' + this.cantidad_combustible +'KM \n' +
                    'DE LOS '+ kilometros_recorrido +' KM QUE SE TENIAN PLANEADO \n');
                    console.log('------------------------------------------');
              }else if(this.cantidad_combustible == 0){
                console.log('EL TANQUE DEL VEHICULO NO TIENE GASOLINA');
              }else{
                console.log('SE VA RECORRER: '+ kilometros_recorrido + 'KM \n'+
                'Y EL TANQUE TIENE CAPACIDAD PARA RECORRER ' + this.cantidad_combustible + 'kM \n'+
                'AUN PUEDE RECORRER '+ combustible_consumido + 'KM');
                console.log('------------------------------------------');
              }


              this.cantidad_combustible -= kilometros_recorrido;
            //   console.log(this.cantidad_combustible);
            
        }


    }

    
};

let objeto = Object.create(vehiculo);

objeto.llenar_tanque();
objeto.encender();
objeto.acelerar();
objeto.apagar()

 
       
