var persona = {
    nombre: 'eustaquia',
    edad:50,
    saludar: function(){
        console.log('hola caracola');
        console.log(this.nombre);
    }
};

console.log(persona.edad);
console.log(persona.nombre);
persona.saludar();


var jugador ={
    fuerza:1,
    incrementarFuerza: function(){
        this.fuerza += 1;
    },
    consultarFuerza:function(){
        console.log(this.fuerza);
    }
}

jugador.consultarFuerza();
jugador.incrementarFuerza();
jugador.incrementarFuerza();
jugador.consultarFuerza();