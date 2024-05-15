class trabajador {
    //definicion de la clase
    constructor(nombre, horasTrabajadas, tarifaHora) {
        //constructor que inicializa las propiedades del trabajador
        this.nombre = nombre
        this.horasTrabajadas = horasTrabajadas
        this.tarifaHora=tarifaHora
    
    }
    //metodo que calcula el salario del trabajador
    calcularSalario(){
        return this.horasTrabajadas * this.tarifaHora //Retorna el salario calculado
    }
}

//Evento para escuchar el envio del formulario
document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault() //Prevenir el comportamiento por defecto del formulario

    //Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value
    const horas = parseInt(document.getElementById('horas').value)
    const tarifa = parseInt(document.getElementById('tarifa').value)
    //Crear una instancia de la clase Trabajador con los valores ingresados
    const trabajador = new trabajador(nombre, horas, tarifa)
    //calcular el salario llamando al metodo calcularSalario()
    const salario = trabajador.calcularSalario()
    //Mostrar el resultado del salario
    mostrarResultado(nombre, salario)
})
//Funcion para mostrar el resultado del salario en el documento HTML
function mostrarResultado(nombre, salario){
    const resultadoDiv = document.getElementById('resultado')
    //Obtener elemento con el ID "Resultado"
    resultadoDiv.innerHTML = `<p>El salario de ${nombre} es de $${salario}</p>` 
    print (salario)
    //Mostrar el resultado en el documento HTML
}