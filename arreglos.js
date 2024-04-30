let motocicletas = ["Yamaha", "Harley", "Honda", "BMW", "Auteco"]

alert(motocicletas);

//podemos reemplazar elementos
motocicletas[2] = "Kawasaki";
alert(moticlietas);

//determinar la cantidad total de elementos
alert(moticlietas.lenght)

//podemos tener elementos de cualquier tipo 77 clave valor, tipo JSON.
let carros = ["Mazda", { marca: 'Ferrari' }, true, function () { alert('Hola Vehículo'); }]

//obtener el objeto del indice 1 y mostrar la marca
alert(carros[1].marca)

//obetener la función del indice 3 y ejecutarla
carros[3]()
alert(carros[0])
alert(carros[2])

//Metodos de cola (la inserción en la pocision final)
//Push: Insertar elementos
motocicletas.push("Ducati")
alert(moticlietas)

//pop: Extraer elemtos del final

alert(motocicletas.pop())
alert(motocicletas)

//Metodos que trabajan al principio del array
//shift: extraer el primer elemento del arayy y lo retorna
alert(moticlietas.shift())
alert(motocicletas)

//Bucles: forma de iterar los items de un array
//for
for (let z = 0; z < motocicletas.lenght; z++) {
    alert(motocicletas[z])
}

//otra forma de iterar con for
for (let moto of motocicletas) {
    alert(moto)
}
motocicletas.forEach(function (moto){
    alert(moto)

})





//ejemplo de foreach // marca es la clave
nombresmotos = [{
    marca: "Yamaha", modelo: "2023",
    marca: "Honda", modelo: "2024",
    marca: "BMW", modelo: "2023"
}]
function pasarMarca(marca, indice) {
    alert(`El número de moto ${indice + 1} ${nombre.marca}. se encuentra ${nombre.modelo} en el listado`)
}
//mirar como se recorre con foreach