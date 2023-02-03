/*EJERCICIO 1

Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:

En caso afirmativo el usuario responderá si
En caso contrario responderá no.
Si el usuario responde si se escribirá por el documento «irás a la cárcel».

Si el usuario responde no se escribirá por el documento web «irás a casa».

En cualquier caso en el documento web se escribirá «la documentación por favor».

 */
/* MI FORMA

let usuario = prompt("Usted es culpable?: ");

if (usuario =="si"){
    alert("usted es culpable")
}
else {alert("usted no es culpable")
} 
LA DEL PROFE
var culpable = window.prompt("¿eres culpable?"); // si, no

	if(culpable=="si"){
		document.write("irás a la cárcel");
	}else if(culpable=="no"){
		document.write("irás a casa");
	}else{
		document.write("la documentación por favor");
	}

*/
/*  EJERCICIO 2
Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuanto le costará en función del topping que elija.

El helado sin topping cuesta 1.90€.
El topping de oreo cuesta 1€.
El topping de KitKat cuesta 1.50€.
El topping de brownie cuesta 0.75€.
El topping de lacasitos cuesta 0.95€.
En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla «no tenemos este topping, lo sentimos. » y a continuación informar del precio del helado sin ningún topping.
Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).
 */
/* 
YO

let helado = prompt("Eliga el topping de helado que quiere: ");

if (helado == "sin topping"){
    alert("El helado cuesta 1.90e")
}
else if (helado == "oreo")
{alert("El helado cuesta 1e")}
else if (helado == "kit kat"){
    alert("El helado cuesta 1.50e")
}
else if(helado == "brownie"){
    alert("El helado cuesta 0.75e")
}
else if(helado == "lacasitos"){
    alert("El helado cuesta 0.95e")
}

else(alert("no tenemos ese topping, lo sentimos"));{
    prompt("Ingrese nuevamente el gusto de helado:")
}

EL PROFE 

var topping = window.prompt("qué topping quieres");
		var precio = 0.00;
		var helado = 1.90;
		var precioFinal = 0.00;

		if(topping=="oreo"){
			precio = 1;
		}else if(topping == "kitkat"){
			precio = 1.50;
		}else if(topping == "brownie"){
			precio = 0.75;
		}else  if(topping == "lacasitos"){
			precio = 0.95;
		}else{
			document.write("no tenemos este topping, lo sentimos. ");
			precio = 0;
		}

		precioFinal = helado + precio;
		document.write("el helado cuesta " + precioFinal + " €"); */

        /* EJERCIOS 3
        Pedir dos números y decir si non múltiplos o no */


       /*  let numero1 = parseInt(prompt("Ingrese numero: "));
        let numero2 = parseInt(prompt("Ingrese otro numero: "))



        if(numero1 % numero2 == 0 || numero2 % numero1 == 0){
            alert("son multiplos")
        }
        else {
            alert("no son multiplos")
        } */

/* 
EJERCICIO 4
Pedir dos números y decir cual es el mayor */

/* yo

let numero1 = parseInt(prompt("Ingrese un numero:  "));
let numero2 = parseInt(prompt("Ingrese otro numero:"));

if(numero1 > numero2){
    alert(numero1 + " " + "es mas grande que" + " " + numero2);

}

else if(numero1 < numero2){
    alert(numero2 + " " + "es mas grande que" + " " + numero1);
}

else{
    alert(numero1 + " " + "y" + " " + numero2 + " " + "son iguales")
};

Profe 
let numero1 = 24;
let numero2 = 34;

if( numero1 > numero2 ){
    console.log("El número mayor es el: ",numero1)
}else{
    console.log("El número mayor es el: ",numero2)
} */

/* EJERCICIO 5 
Pedir un número y decir si es un número negativo, si es positivo o cero */

/* let numero = parseInt(prompt("ingrese un numero: "));

if (numero >0) {
    alert("el numero es positivo")
}

else if (numero < 0){
    alert("EL numero es negativo")
}

else {alert("el numero es igual a cero")}

Profe 
let numero = 0

if(numero > 0){
    console.log("Es un número positivo");
}else if(numero < 0){
    console.log("Es un número negativo");
}else{
    console.log("Es el número cero (0)")
} */


/* Ejercicio #6
Pedir una calificación  de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien, Excelente */
/* 
let calificacion = parseInt(prompt("ingrese su nota: "));

if (calificacion <5){
    alert("su nota es insuficiente")
}
else if (calificacion >= 5 && calificacion <= 7){
    alert("su nota es suficiente")
}
else if (calificacion > 7 && calificacion <= 9){
    alert(" su nota es buena")
}

else{
    alert("su calificacion es excelente")
};

let calificacion = 11;

if( calificacion < 5 && calificacion >= 0 ){
    console.log("Calificación: Insuficiente");
}else if( calificacion === 5 ){
    console.log("Calificación: Suficiente");
}else if( calificacion > 5 && calificacion <= 8 ){
    console.log("Calificación: Bien");
}else if( calificacion > 8 && calificacion <= 10 ){
    console.log("Calificación: Excelente");
}else{
    console.log("Calificación no valida");
} */


/* Ejercicio #7
Pedir una hora, minuto y segundo y mostrar la hora en el segundo siguiente */



/* let hora = parseInt(prompt("ingrese hora: "));
let minuto = parseInt(prompt("ingrese minuto: "));
let segundo = parseInt(prompt("ingrese segundos: "));

segundo++

if(segundo >= 60){
    segundo = 0;
    minuto++;

    if(minuto >= 60){
        minuto = 0;
        hora++;

        //si la hora es mayor a 23 lo reiniciamos a 0;
        if(hora >= 24){
            hora = 0;
        }

    }
}
alert(`La hora es: ${hora}: ${minuto}: ${segundo}`);
NO LO PUDE HACER SOLA TUVE QUE MIRAR
 */

/* EJERCICIO 8

Juan tiene N dólares, David tiene la mitad de lo que posee Juan y 
José la mitad de lo que poseen Juan y David juntos.
 Mostrar el promedio de la cantidad de dinero que tienen entre los tres y redondearlo */

/*  yo
 let  juanDolares = 100;
 let davidDolares = 50;
 let joseDolares = 75;

 alert( (juanDolares + davidDolares + joseDolares) / 3) */
//profe 
//entrada
/* let juan = 47;
let david = juan / 2; 
let jose = (juan + david) / 2; */

//mostrando el promedio
//let promedio = Math.round((juan + david + jose) / 3);

//console.log(`El promedio de la suma de dólares de los tres juntos es de: ${promedio}`);
//respuesta: El promedio de la suma de dólares de los tres juntos es de: 35

/* Ejercicio #9
Pedir un String y mostrar true si tiene 5 caracteres o mas, caso contrario, mostrar false utilizar el operador ternario. */


/* 
let palabra = prompt("ingrese una palabra: ");

if (length.palabra > 5){
    console.log(true)
}

else{
    console.logo(false)
}  */

// profe

// let palabra = "Hola Mundo";

//lógica del problema
// let respuesta = palabra.length >= 5 ? true : false

//console.log(respuesta)
//respuesta: true

/* Ejercicio 10
Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números 
y mostrar true si el promedio es mayor a 5 caso contrario mostrar false, utilizar el operador ternario */
/* yo
let numero1 = parseInt(prompt("ingrese un numero entero del 1 al 10: "));
let numero2 = parseInt(prompt("ingrese otro numero entero del 1 al 10: "));
let numero3 = parseInt(prompt("ingrese eñ ultimo numero entero del 1 al 10: "));
let promedio = ((numero1 + numero1 + numero3) / 3);

if (promedio > 5){
    console.log(true);
}
else{
    console.log(false);
} */

//Profe 
//entrada 
//let numero1 = 4;
//let numero2 = 3;
//let numero3 = 6;

//lógica del problema
//let respuesta = (((numero1 + numero2 + numero3) / 3) > 5) ? true : false;

//console.log(respuesta)
//respuesta: true

/* ejercicio 11
Pedir una cadena de texto si al menos tiene una letra mayúscula mostrar false
 si todas son minúsculas mostrar true, utilizar el operador ternario. */
 //entrada 
//let texto = "hola mundo"

//lógica del problema
//let comparacion = texto;
//const respuesta = ( comparacion.toLowerCase() === texto ) ? true : false;


//console.log(respuesta)
//respuesta: true

//ejercicio 12
/* Crear un número aleatorio entre el 1 y 20, si es par mostrar true 
seguido el número si es impar mostrar  false seguido del número, utilizar el operador ternario. */

//entrada 
//let aleatorio = Math.ceil(Math.random() * 20);

//lógica del problema
//const respuesta = (aleatorio % 2 === 0) ? true : false

//console.log(`${respuesta} - ${aleatorio}`)
//respuesta: ? true - 14

//ejercicio 12
//Pide la edad y si es mayor de 18 años indica que ya puede conducir.

/* let edad =  parseInt(prompt(" ingrese su edad: "));

if (edad >= 18) {
    alert("usted es mayor de edad y puede conducir");

}

else {
    alert("usted es menor de edad y no puede conducir")
};

Profe 
var edad = prompt("Introduce tu edad"); */
//COMPRUEBA QUE LO INTRODUCIDO ES UN NÚMERO
/* if (Number(edad) == edad) {
	I ES MAYOR DE 18
	if (edad > 18) {
		IMPRIME EN PANTALLA EL MENSAJE
		document.write("Puedes conducir");
	}
} */
//SINÓ
/* else {
	MUESTRA UN MENSAJE
	alert("Introduce un numero válido");
} */

//ejercicio 13
/* Usando un bucle for escribir un script que pida un valor entero y muestre
 en pantalla una lista de números desde el 0 al valor tecleado. */  

 /* let numero = parseInt(prompt("ingrese un numero entero del 1 al 100: "));

 for (let i = 0; i == numero; i++){
    
        alert(i)


 }

 pendiente */

// let n = prompt("ingresa un numero: ");

// for(i = 0; i <= n; i++){
//     alert(i)
// };

//ejercicio 14 
// El problema elegido consiste en una estructura iterativa que escriba los números del 1 al 100.

//for

/* let i = 0;

for(i = 0; i <= 100; i++){
    document.write(i);
    document.write('<br>');
}
 */

// while

/* var j=0;
while(j<=100){
	document.write(j);
	document.write('<br>');
	j++;
}
 */

//ejercicio 15

// Ahora bien, imaginemos que queremos evaluar los casos del 1 al 100 mientras se cumpla que el i no es igual a 50.

// for

/* let i= 0;

for (i = 0; i <= 100 && i != 50; i++){
    document.write(i);
}
 */

//while

/* let n = 0;

while(n <= 100 && n !=50){
    document.write(n);
    document.write('<br>');
    n++;
}
 */


//ejercicio 16

/* 
Crea un bucle while que imprima "El número es: 'i'. Donde 'i' que sea el número de la vuelta (20,21,22...).
 Este bucle se ejecutará empezando por el número 20 hasta llegar al 70. Es decir, la primera vuelta debe imprimir
  El número es: 20 y la última El número es: 70 */

  /* let n = 20;
  while( n >=20 && n <=70){
    document.write(n);
    document.write('<br>');
    n++;
  } */

  // ejercicio 17 
// Ingrese un número y mostrar su potencia n^2, repetir este proceso hasta que se ingrese un número negativo
/* let num = Number(prompt("Ingrese un número: "));

let cuadrado = 0;
while( num > 0 ){
    cuadrado = Math.pow(num,2);
    console.log(`La potencia de ${num} es igual a ${cuadrado}`);
    
    //nueva entrada
    num = Number(prompt("Ingrese un número: "));
}
console.log('Fin del programa') */

//ejercicio 18
//Pedir un numero hasta que se ingrese un numero negativo, luego mostrar cuantos números se introdujeron



/* let n = parseInt(prompt("ingrese un numero: "));

while(n >= 0){
    document.window(n)
}
 */

//entrada
/* let num = Number(prompt("Ingrese un número: "));
let count = 0;
while( num > 0 ){ */
   // count++;
//nueva entrada
   /*  num = Number(prompt("Ingrese un número: "));
}

console.log(`Se introdujeron ${count} números`)
 */

// ejercicio 19
//Pedir un numero hasta que se ingrese el numero 0 o negativo, luego mostrar la suma de todos los números ingresados

/* let num = parseInt(prompt("ingrese un numero: "));
let count = 0;
while( num > 0){
    count++;
    num = parseInt(prompt("ingrese un número: "));
    document.write(`Se introdujeron ${count} números`)} */
// ejercicio 20

/* Crea un condicional switch con los días de la semana (lunes a domingo). En cada día, debes poner una frase que se muestre en un alert().
Pon un prompt() para que puedas introducir el día que quieras desde el navegador. En caso de que se escriba cualquier otra cosa, 
deberá estar contemplado con un alert() 
que te avise que no es correcto o cualquier cosa por el estilo. */

/* let dia = prompt("ingrese un dia de la semana: ");

switch (dia){
    case "domingo":
        alert("hoy es" + " " + dia)
        break;
    case "lunes":
        alert("hoy es" + " " + dia)
        break;
    case "martes":
         alert("hoy es" + " " + dia)
        break;

     case "miercoles":
         alert("hoy es" + " " + dia)
        break;

     case "jueves":
        alert("hoy es" + " " + dia)
         break;

    case "viernes":
         alert("hoy es" + " " + dia)
        break;
     case "sabado":
        alert("hoy es" + " " + dia)
         break;
     default:
        alert("hoy es" + " " + dia);
} */


// EJERCICIO 21
/* Crea una función que opere un número al cuadrado (número multiplicado por si mismo). 
Pista: en la función solo tienes que utilizar un parámetro.
Opcionalmente, puedes hacer una pruba en la consola, en el documento o en un alert() 
si quieres ver el valor del return, pero no es obligatorio. */




/* function cuadrado (numero){
    return numero * numero;
}


let numero = prompt("ingrese un numero" );
 numero = alert(cuadrado);

function cuadrado (numero) {
	return numero * numero;
}

let prueba = cuadrado(10);

console.log(prueba);*/

//ejercicio 22

// pedir datos, nombre, apellido, edad, fecha de nacimiento, dirección y mostrarlo en document.write
// hacer una calculadora
// dar turnos 
//pedir horarios disponible que tiene el y dar turno del gimnasio  





