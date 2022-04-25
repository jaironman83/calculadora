//creacion de funciones
        //Declaracion

        function escribirNombre(){
            console.log('Hola a todos');
        }
        escribirNombre();

        // funciones anonimas
        
        var myFuncion = function(name ='no tengo nombre'){
            return `hola ${name}`
        }
        console.log(myFuncion('Pepito'));
        

        //funciones arrow 
        var superHeroe = (nombre) => {           
            return `hola ${nombre}`
        };
        console.log(superHeroe('arrow'));

        //Objetos
        var persona = {
            nombre: 'Juanillo',
            edad: 30
        };

        //Objetos 2
        function creadorPersonas(nombre,edad ){
            this.nombre = nombre;
            this.edad = edad;
        }

        var personita1 = new creadorPersonas('santi', 87);
        var per2 = new creadorPersonas('maruja', 23);

        console.log(personita1.nombre , personita1.edad);
        console.log(per2.edad);

        //Objetos 3
        var persona4 = new Object({
            nombre: 'pepe luis rodriguez',
            edad: 67,
            saluda: function(){
                console.log( `hola soy ${this.nombre}`);
            }
        });

       persona4.saluda();

       const gasto1 = 100;
       const gasto2 = 50;
       const presupuesto = 180;

       const result = (gasto1 +gasto2) > presupuesto 
                    ? console.log('Estoy arruinado') 
                    : console.log('Me voy a comprar un monton de juegos!!')


                
        var pepito = document.getElementById("parrafo1");
        pepito.style.color = 'red';
        console.log(pepito.textContent);

        var parrafos = document.getElementsByTagName("p");
        console.log(parrafos);

        var valor = 0;
        
        function subirValor(){
            valor += 1;
            var contador = document.getElementById("parrafo4");
            contador.innerHTML = valor;
            contador.style.backgroundColor='red'
            contador.style.color = 'white'

            var contador2 = document.getElementById("nombreuno");
            contador2.innerHTML = contador2.innerHTML + valor;
        }


        var cadena = '5';
        var numero = 5;

        //Se comprar el valor ('5' el igual a  5)
        const result2 = cadena == numero 
            ? console.log('Si, son iguales')
            : console.log('Pero que me estas contando')

        //Se comprar el tipo de la variable ( '5' no es igual a 5)
            const result3 = cadena === numero 
            ? console.log('Si, son iguales')
            : console.log('Pero que me estas contando')

            console.log('5' / 5);
            console.log(5+5);
            console.log('5'+'5');


           // window
            //navigator
            //windows.history.back
            //localStorage
            var vector = ['uno','dos','tres','cuatro']
            var id = document.querySelector('#idlista');
            for(var i = 0;i<vector.length; i+=1){
                var v = vector[i];
                
                var li = document.createElement('li');
                li.id = "nombre" + v
                li.textContent = v;
                id.appendChild(li);
            }

            setTimeout(function() {
                var elementoEliminar = document.getElementById("nombreuno");
                id.removeChild(elementoEliminar);
            }, 2000);
           