//Programa de Temperatura. 
console.log("==PROGRAMA TEMPERATURA==")

//Variables constantes para formula en temperatura. 
const k = 273.15;
const f = 32;
const f2 = 1.8;

//Variables.
let farenheit = 0;
let kelvin = 0;
intentos = 0;

//While para que continuee pidiendo si hay error.
while(intentos < 3){

    let datoCelsius = prompt("Ingresa la temperatura en ºC: ") //Pedir el dato en consola.
    let celsius = Number(datoCelsius); //Convertir el dato a #, para usar en las formulas. 

if (!isNaN (celsius) && datoCelsius.trim() !== ""){ //Validación: es un número y no esta vacio el prompt
    console.log("Celsius: " + celsius + " ºc");
    kelvin = celsius + 273.15; //ºc - ºK
    console.log("Kelvin: " + kelvin + " ºk")
    farenheit = (celsius * f2) + f; //ºc - ºF
    console.log("Farenheit: " + farenheit + " ºf");

    break; //Romper el ciclo si se cumple todo. 

} else {
    intentos ++; //contador de intentos. 
    console.log("El dato ingresado no es valido, Ingresa un número");
} //else
}//while

if (intentos === 3){
    console.log("Se agotarón los intentos permitidos :c")
}

console.log("=== FIN DEL PROGRAMA =="); //Aios