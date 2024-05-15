//Definicion de la clase Animal 
class animal{
    constructor(especie, nombre, edad, dieta){
    this.especie = especie; //propiedad: especie del animal
    this.nombre = nombre; //propiedad: nombre del animal
    this.edad = edad; //propiedad: edad del animal
    this.dieta = dieta; //propiedad: dieta del animal
    }
    //Metodo para que el animal emita un sonido
    emitirSonido(){
        console.log(`${this.nombre} Hace un sonido. `); //muestra un mensaje en la consola
    }
}

//array para almacenar los animales en el zoologico
const zooAnimales= [];

//Evento para escuchar el envio del formulario
document.getElementById('formulario').addEventListener('submit',function(e){
    e.preventDefault(); //prevenir el comportamiento por defecto del formulario
    //obtener los valores del formulario para crear un nuevo animal
    const especie=document.getElementById('especie').value; //especie del animal
    const nombre=document.getElementById('nombre').value; //nombre del animal
    const edad=document.getElementById('edad').value; //edad del animal
    const dieta=document.getElementById('dieta').value; //dieta del animal

    //crear una nueva instancia de la clase animal con los valores obtenidos
    const nuevoAniamal= new animal(especie, nombre, edad, dieta);

    //agregar el nuevo animal al array zooAnimales
    zooAnimales.push(nuevoAniamal);

    //mostrar los animales en la pagina
    mostrarAnimales();

    //Resetear el formulario despues de enviarlo
    resetFormulario();
});
//Funcion para mostrar los animales en la pagina
function mostrarAnimales(){
    const resultadoDiv = document.getElementById('resultado'); //Obtener el elemento con el id "resultado"
    resultadoDiv.innerHTML = ''; //limpiar el contenido del elemento

    //iterar sobre el array zooAnimales y mostrar cada animal 
    zooAnimales.forEach (animal=>{
        const animalDiv = document.createElement('div');//Crear un nuevo elemento div para cada animal 
        // agregar HTML al div con los detalles del animal y un boton para emitir sonido
        animalDiv.innerHTML = `
        <p>Especie: ${animal.especie}</p>
        <p>Nombre: ${animal.nombre}</p>
        <p>Edad: ${animal.edad}</p>
        <p>Dieta: ${animal.dieta}</p>
        <button onclick= "${animal.emitirSonido()}">Emitir Sonido</button>
        <hr>
        `;
        resultadoDiv.appendChild('formulario').reset(); //utilizar el metodo reset() del formulario 
    })
    
};