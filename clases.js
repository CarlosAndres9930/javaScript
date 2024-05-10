// class Person{
// name;
// constructor(name){
//     this.name=name;
// }

// introduceSelf(){
//     console.log(` Hola, soy ${this.name}`);
//     alert(` Hola, soy ${this.name}`);
// }

// }
// const Pepe=new Person('Grillo');
// Pepe.introduceSelf();

// class Animal{
//     Sleep(){
//         alert("Rrrrrr");
//     }
// }
// const Lupita=new Animal();
// Lupita.Sleep();

// class Animales{
//     constructor(nombre,especie){
//         this.nombre=nombre;
//         this.especie=especie;
//     }

//     cantar(){
//         return `${this.nombre} puede cantar y es ${this.especie}`
//     }

//     Bailar(){
//         return `${this.nombre} puede bailar y es ${this.especie}`
//     }

//     comer(){
//         return `${this.nombre} puede cantar y es ${this.especie}`
//     }

// }

// let Maximo=new Animales("Maximo Abelardo","Crioca");
// console.log(Maximo);
// console.log(Maximo.cantar);
// console.log(Maximo.Bailar);
// console.log(Maximo.comer);

// class factura {
//     constructor(numero, cliente, divisa, subtotal, iva) {
//         this.numero = numero;
//         this.cliente = cliente;
//         this.divisa = divisa;
//         this.subtotal = subtotal;
//         this.iva = iva;
//     }

//     get total() {
//         return this.subtotal + this.iva;
//     }
//     set nuevaDivisia(Valor) {
//         this.divisa = Valor;
//     }
// }
// // const factura1=new factura(201, "Tansportes SA", "Eur", 542, 113);
// // const factura2=new factura(202, "Mudanzas SA", "Dolar", 100, 21);
// // console.log("La factura "+factura1.numero+" esta en divisa "+factura1.divisa);
// // console.log("La factura "+factura2.numero+" esta en divisa "+factura2.divisa);
// // alert("La factura "+factura1.numero+" esta en divisa "+factura1.divisa);
// // alert("La factura "+factura2.numero+" esta en divisa "+factura2.divisa);
// let factura1 = new factura(201, "Transportes SA", "Eur", 100, 19);
// console.log("La factura " + factura1.numero + " tiene un total de " + factura1.total + " " + factura1.divisa);
// factura1.nuevaDivisia = "Yenes";
// console.log("La factura " + factura1.numero + " tiene un total de " + factura1.total + " " + factura1.divisa);

//Herencia
// class Animal {
//     constructor(habitat) {
//         this.habitat = habitat
//     }
//     comer = () => console.log("Ñam ñam ñam");
//     bailer = () => console.log(`Hola vivo en la ${this.habitat}`);
// }

// class Conejo extends Animal {
//     constructor(habitat, color) {
//         super(habitat)
//         this.color = color
//     }

// }

// const Conejito = new Conejo("Pradera", "Azul");
// Conejito.comer();
// Conejito.bailer();
// console.log(Conejito.habitat);
// console.log(`Hola vivo en ${Conejito.habitat} y soy de color ${Conejito.color}`);

// class Mamifero {
//     constructor(Nombre) {
//         this.Nombre = Nombre
//     }
// }

// class Leon extends Mamifero {
//     constructor(Nombre, Raza, edad) {
//         super(Nombre)
//         this.raza = Raza
//         this.edad = edad
//     }
//     comer = () => console.log("Ñam ñam ñam");
//     Pelear = () => console.log(`Hola tengo que pelear por mi comida y tengo ${this.edad}`);

// }
// const Leon1 = new Leon("mufasa", "Felino", "15");
// Leon1.comer();
// Leon1.Pelear();
// console.log(`Hola me llamo ${Leon1.Nombre} soy un ${Leon1.raza} y tengo ${Leon1.edad}`);

//Herencia de prototipos
// function Vehiculo(tipo) {
//     this.tipo = tipo;
// }

// Vehiculo.prototype.mover = function () {
//     console.log(`el ${this.tipo} se esta moviendo`);
// }
// function Auto() {
//     Vehiculo.call(this, 'Auto');
// }
// Auto.prototype = Object.create(Vehiculo.prototype);
// const miAuto = new Auto();
// miAuto.mover();//El Auto esta en movimiento

// function Vivienda(tipo) {
//     this.tipo = tipo;
// } Vivienda.prototype.abrir = function () {
//     console.log(`el ${this.tipo} se esta abriendo`);
// }
// function cerradura() {
//     Vivienda.call(this, 'Cerradura');
// }
// cerradura.prototype = Object.create(Vivienda.prototype);
// const cerradura1 = new cerradura();
// cerradura1.abrir();//Se esta abriendo la cerradura

//Sobre escritura de metodos o metodos sobre escritos
// Auto.prototype.mover = function () {
//     console.log('El auto ruge mientras acelera');
// }

// miAuto.mover();

// class Animal {
//     constructor(nombre) {
//         this.nombre = nombre
//     }
//     mover() {
//         console.log(`${this.nombre} se mueve `);
//     }
// }

// class Pez extends Animal {
//     mover() {
//         console.log(`${this.nombre} nada en el agua`)
//     }
// }

// class Gato extends Animal {
//     mover() {
//         console.log(`${this.nombre} corre tras una pelota `);
//     }
// }

// class Pajaro extends Animal {
//     mover() {
//         console.log(`${this.nombre} vuela en el cielo `);
//     }
// }

//crear instancias o objetos
// let Piolin = new Pajaro("Piolin");
// Piolin.mover();

// let Felix = new Gato("Feliz");
// Felix.mover();

// let Nemo = new Pez("Nemo");
// Nemo.mover();

class lenguajesProg {
    constructor(Nombre, Sintaxis) {
        this.Nombre = Nombre
        this.Sintaxis = Sintaxis
    }
    programar() {
        console.log(`${this.Nombre} para progamar usa una sintaxis ${this.Sintaxis}`)
    }

}

class Java extends lenguajesProg {
    programar() {
        console.log(`${this.Nombre} para progamar usa una sintaxis ${this.Sintaxis}`)
    }
}

class JavaScript extends lenguajesProg {
    programar() {
        console.log(`${this.Nombre} para progamar usa una sintaxis ${this.Sintaxis}`)
    }
}

class PHP extends lenguajesProg {
    programar() {
        console.log(`${this.Nombre} para progamar usa una sintaxis ${this.Sintaxis}`)
    }
}

class Python extends lenguajesProg {
    programar() {
        console.log(`${this.Nombre} para progamar usa una sintaxis ${this.Sintaxis}`)
    }
}

let Java1 = new Java("Java", "Complejo");
Java1.programar();
let JavaScript1 = new JavaScript("JavaScript", "Simple");
JavaScript1.programar();
let PHP1 = new PHP("PHP", "Complejo");
PHP1.programar();
let Python1 = new Python("Python", "Simple");
Python1.programar();