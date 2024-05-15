// Definicion de la clase triangulo
class Triangulo {
    //constructor que inicializa la base y la altura
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    //metodo que calcula el area del triangulo
    calcularArea(){
        return (this.base * this.altura) / 2;
    }
}

//Evento click del boton calcular area
document.getElementById('calcularBtn').addEventListener('click', function(){
    //obtengo el valor de la base y la altura ingresados
    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);

    //Crear una instancia de la clase triangulo con los valores ingresados
    var triangulito = new Triangulo(base, altura);
    //obtener el area del triangulo llamado al metodo calcularArea()
    var area = triangulito.calcularArea();
    //Mostrar el resultado del area en el elemento con el id "areaResultado"
    var areaResultado = document.getElementById("areaResultado")
    areaResultado.innerHTML=area
})