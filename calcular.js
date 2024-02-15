
var notas;
var promedo;
var suma=0;

while (true ){ 

const nombre = prompt("ingrese su nombre")

if(nombre != '') {
   alert("Bienvenido " + nombre + " al contador de promedio final")
}


var nnotas = parseInt(prompt("Digite la cantidad de notas a promediar (solo hasta 10 notas)"))

if (nnotas >= 1 && nnotas <=10 ) {

    alert("Perfecto, continuemos");
    

for(i = 1; i <= nnotas; i++) {

    var notas = parseInt(prompt("Digite la nota " + i + " (Del 1 al 20)"));

    suma = suma + notas;
}

promedio = suma / nnotas;


if(promedio >= 10.5) {
    alert( "Felicidades " + nombre + " tu promedio es " + promedio + " de Aprobado")


} else {
    alert( "Mejor suerte la proxima vez " + nombre + " tu promedio es " + promedio + " de desaprobado")
}

break;


} else {
    alert("Ingrese una cantidad menor a 11");
    
    continue;
    
} 

}





