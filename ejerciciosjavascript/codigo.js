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


//23 
/* Crea un array que contenga el nombre de cinco colores escritos como strings.
Guarda en una variable el tercer elemento del array del ejercicio anterior. Recuerda que se cuenta desde el 0.
Accede desde un console.log() a la posición 0 del string de la posición 0 del array del ejercicio 24. */

/* let colores = ["rojo", "azul", "verde", "dorado", "celeste"];
let tercer_color = colores[3];
console.log(tercer_color); */

//EJERCICIO 24
/* Crea un bucle for que ejecute la frase "El número es: 'i'". Donde 'i' que sea el número de la vuelta (1,2,3...).
 Este bucle se ejecutará cinco veces, del valor 0 al 4. */

 /* for (i=0; i < 5; i++)
 {
    alert(i);
 } */

//EJERCICIO 25

/* Crea un bucle while con la condición de inicio en 10. Que la condición de salida sea menor o igual a 30 y 
que solo se ejecute hasta que la condición de inicio valga 20 (imprime estos valores en el documento con un document.write(),
 el valor 20 debe ser imprimido también). */

/*  let i = 10;
while (i <= 30) {
document.write("El valor del bucle es: " + i + "<br>");
	if (i == 20){
		document.write("Se rompió la ejecución del bucle.");
		break;
	}
	i++;
}
 */

//EJERCICIO 26 HACER A LA NOCHE

/* Qué muestre el valor de la variable 20 veces exactamente. Pista: document.write().
Se deberá hacer obligatoriamente con decremento de 1 en la expresión final.
El valor del inicializador debe ser 10.
El valor de 0 se debe saltar.
El bucle tiene que tener un rango de 30 iteraciones aunque se iteren 21 y se muestren 20.
Se deberá mostrar al usuario un alert() antes de empezar el bucle que le avise de que este va a comenzar. 
También se informará al usuario de que el bucle ha terminado con un document.write().
El bucle solo será ejecutado si el usuario introduce la contraseña y usuario correctos
 (usuario: bucleAdmin contraseña: programacionFacil). Pista utiliza un prompt(). */






/*  let usuario = "bucleAdmin";
 let pass = "programacionFacil";
 let introduceUsuario;
 let introducePass;
 
 introduceUsuario = prompt("Introduce el nombre de un usuario autorizado para ejecutar el bucle.");
 introducePass = prompt("Introduce una contraseña.");
 
 if (introduceUsuario != usuario || introducePass != pass) {
     alert("Error. Usuario y/o contraseña no válidos.");
 }
 
 else {
 alert("El bucle va a comenzar.");
 
 for(i=10;i>=-19;i--){
     if (i == 0) {
         continue;
     }
     document.write("El valor del bucle es: " + i + "<br>");
     if (i == -10) {
         break;
     }
 }
 
 document.write("El bucle ha finalizado.");
 } */


 //EJERCICIO 27

 /* Crea una función que opere un número al cuadrado (número multiplicado por si mismo). 
 Pista: en la función solo tienes que utilizar un parámetro.
Opcionalmente, puedes hacer una pruba en la consola, en el documento o en un alert() 
si quieres ver el valor del return, pero no es obligatorio. */

/* function cuadrado (numero1) {
    return numero1 * numero1;
}

let multiplicacion = cuadrado(10);
let multiplicacion2 = cuadrado(4);

alert("Los resultados son" + "" + multiplicacion + "y" + " " + multiplicacion2);
 */

//EJERCICIO 28 CREAR UNA CALCULADORA



// let operacion = prompt("¿Qué operación desea? 1-Sumar 2-Restar 3-Multiplicar 4-Dividir.");
// let operando1;
// let operando2;
// let resultado;

// //Impedir que pida los operandos en caso de error.
// if (operacion >= 1 && operacion <= 4) {
// 	operando1 = parseInt(prompt("Introduce el primer número:"));
// 	operando2 = parseInt(prompt("Introduce el segundo número:"));
// }

// function suma(numero1, numero2){
// 	return numero1 + numero2;
// }

// function resta(numero1, numero2){
// 	return numero1 - numero2;
// }

// function multiplicacion(numero1, numero2){
// 	return numero1 * numero2;
// }

// function division(numero1, numero2){
// 	return numero1 / numero2;
// }


// switch (operacion){
// 	case "1":
// 		resultado = suma(operando1,operando2);
// 		document.write("El valor de la suma es: " + resultado);
// 		break;

// 	case "2":
// 		resultado = resta(operando1,operando2);
// 		document.write("El valor de la resta es: " + resultado);
// 		break;

// 	case "3":
// 		resultado = multiplicacion(operando1,operando2);
// 		document.write("El valor de la multiplicación es: " + resultado);
// 		break;

// 	case "4":
// 		resultado = division(operando1,operando2);
// 		document.write("El valor de la división es: " + resultado);
// 		break;

// 	default:
// 		alert("La opción especificada no es correcta.");
// 		break;
// }

// EJERCICIO 29

/* Crea un objeto llamado vehiculo que contenga las siguientes propiedades:
marca
color
numeroRuedas
numeroPlazas
tipo
precio
Los valores asignados a estas propiedades son libres.
Con la propiedad tipo, me refiero a si es deportivo, todoterreno, etc. */

// let vehiculo = [
//     marca = "toyota",
//     color = "rojo",
//     numeroRuedas = 4,
//     numeroPlazas = 4,
//     tipo = "deportivo",
//     precio = 1000000,

// ]

// console.log (typeof(vehiculo));

//EJERCICIO 30

/* A partir del objeto del ejercicio anterior (nº68) del capítulo anterior, añade un método que 
muestre en un alert() la siguiente frase utilizando los valores de las propiedades:
El vehículo con marca ____ de color ____ tiene un coste de ____ $.

Los espacios de la frase deberán ser rellenados con los valores de tus propiedades.

Ejemplo: El vehículo con marca Opel de color negro tiene un coste de 2000 $. */

/* alert('El vehículo con marca ' + vehiculo.marca + ' de color ' + vehiculo.color + ' tiene un coste de ' + vehiculo.precio + ' $.') */

// EJERCICIO 31

// Añade al objeto usuario un tercer telefono.
// Modifica el nombre_completo de usuario por el tuyo. Los apellidos también.
// Del array idiomas, cambia el idioma italiano por el francés
//  Código JavaScript 


/* let usuario = {
	nombre_completo: ['Enrique', 'Barros', 'Fernández'],
	edad: 30,
	telefonos : {
		telefono1: '0467489304',
		telefono2: '0446395860'
		},
	pais_residencia: 'Australia',
	idiomas: ['Español', 'Catalán', 'Inglés', 'Portugués', 'Italiano'],
};

usuario.telefonos.telefono3 = "0489070688";


usuario.idiomas[4] = 'Francés';



usuario.nombre_completo = ['Nombre', 'apellido1', 'apellido2'];

console.log(usuario) */


//EJERCICIO 32 COMO ELIMINAR DEL USUARIO LA POSICION 2 DEL ARRAY

/* let usuario = {
	nombre_completo: ['Enrique', 'Barros', 'Fernández'],
	edad: 30,
	telefonos : {
		telefono1: '0467489304',
		telefono2: '0446395860'
		},
	pais_residencia: 'Australia',
	idiomas: ['Español', 'Catalán', 'Inglés', 'Portugués', 'Italiano'],
};

delete usuario.nombre_completo[2];

console.log(usuario.nombre_completo); */


//EJERCICIO 33

/* Mediante la función constructora de este capítulo, crea un tercer objeto con tus datos personales
 (si son reales, abstente de publicarlos en los comentarios por tu privacidad). */


 /* function Usuario(nombre, apellidos, edad, telefono, pais_residencia, idiomas) {
	this.nombre_completo = {
		'nombre' : nombre,
		'apellidos' : apellidos
	}
	this.edad = edad;
	this.telefono = telefono;
	this.pais_residencia = pais_residencia;
	this.idiomas = idiomas;
}

	// Métodos
	this.saludar = function() {
		alert('Hola, ' + this.nombre_completo.nombre + '.');
	}


let usuario1 = new Usuario(
	'Enrique',
	'Barros Fernández',
	30,
	'0467489304',
	'Australia',
	['español', 'catalán', 'inglés', 'portugués', 'italiano']
);

let usuario2 = new Usuario(
    "selena",
    "cuadra",
    23,
    "1126017576",
    "argentina",
    ["español", "ingles"],
);
 */
/*Se accede al namespace (propiedad - objeto) nombre_completo
dentro del namespace (objeto) usuario1*/
// console.log(usuario1.nombre_completo);

//Se accede a la propiedad nombre de nombre_completo de usuario1
// console.log(usuario1.nombre_completo.nombre);

//Se accede a la propiedad apellidos de nombre_completo de usuario1
// console.log(usuario1.nombre_completo.apellidos);

//Se accede a la propiedad edad del objeto usuario1
// console.log(usuario1.edad);

//Se accede a la propiedad telefono del objeto usuario1
// console.log(usuario1.telefono);

//Se accede a la propiedad telefono del objeto usuario1
// console.log(usuario1.pais_residencia);

//Se accede a la propiedad entera de idiomas
// console.log(usuario1.idiomas);

//Se accede a cada una de las posiciones del array de la propiedad idiomas
// console.log(usuario1.idiomas[0]);
// console.log(usuario1.idiomas[1]);
// console.log(usuario1.idiomas[2]);
// console.log(usuario1.idiomas[3]);
// console.log(usuario1.idiomas[4]);

/* usuario1.saludar();
usuario2.saludar(); */

//Función constructora Usuario
// function Usuario(nombre, apellidos, edad, telefono, pais_residencia, idiomas) {
// 	// Propiedades
// this.nombre_completo = {
// 		'nombre' : nombre,
// 		'apellidos' : apellidos
// 	}
// 	this.edad = edad;
// 	this.telefono = telefono;
// 	this.pais_residencia = pais_residencia;
// 	this.idiomas = idiomas;

// 	// Métodos
// 	this.saludar = function() {
// 		alert('Hola, ' + this.nombre_completo.nombre + '.');
// 	}
// }

//Instanciaciones de la clase Usuario
// let usuario1 = new Usuario(
// 	'Enrique',
// 	'Barros Fernández',
// 	30,
// 	'0467489304',
// 	'Australia',
// 	['español', 'catalán', 'inglés', 'portugués', 'italiano']
// );

// let usuario2 = new Usuario(
// 	'Andrea',
// 	'Gomila Venegas',
// 	24,
// 	'5565784356',
// 	'México',
// 	['español', 'portugués', 'inglés', 'chino', 'francés']
// );

/* Se definen nuevas propiedades para usuario1 que no están en
  la función constructora */
// usuario1.direccion = "937 Beer Trafficway";
// usuario1.aniversario = "29/09/1991";

// El nuevo objeto, gracias al método create() hereda todo de usuario1
/* let usuario3 = Object.create(usuario1);
console.log(usuario3); */

/* const arregloVacio = [];
console.log(arregloVacio);

const numeros = [1, 2, 3, 4, 5, 6, 7];
const nombres = ["juan", "camila", "sofia"];
console.log(nombres);

const valores = [true, false, true, true];
const variados = [1, "juan", false]; */

/* const nombres = ["camila", "juan", "sofia"];
console.log(nombres[1]); */

/*  const nombres = ["juan", "camila", "sofia"];

for (let  index = 0; index < noombres.length; index++){
    console.log(nombres[index]);}
 */
// nombres.push("lina"); //agrega al final del arreglo
// nombres.unshift("luz"); //agrega al principio del arreglo
// nombres.pop(); //elimina el ultimo elemento
// nombres.shift();//elimina el primer elemento
// nombres.splice(1, 2); // elimina dos elementos a partir de la posicion 1
// console.log(nombres);


/* const productos = [
    {id: 1, nombre: "pantalon", precio: 1000},
    {id: 2, nombre: "camisa", precio: 500},
    {id: 3, nombre: "zapato", precio: 700},
    {id: 4, nombre: "gorra", precio: 1750},
]; */

//recorriendo el arreglo

/* for (let index = 0; index < productos.length; index++){
    const element = productos[index];
    console.log(element.precio); 

}
 */


//EJERCICIO 34


//1 - Para el array de nombre 'capitales' escribe una instrucción que devuelva por la consola del navegador la longitud del vector.
var capitales = ["tarragona","lleida","girona","barcelona","sabadell","terrassa"];

//console.log(capitales.length);


//2 - Escribe en el documento web las posiciones primera, tercera, última

/* document.write("<br>");

document.write(capitales[0]);
document.write("<br>");
document.write(capitales[2]);
document.write("<br>");
//document.write(capitales[5]);
valorUltimaPosicion = capitales[capitales.length-1]//5
document.write(valorUltimaPosicion);
document.write("<br>"); */


//3 - Añade en última posición la ciudad de Badalona. (Como resultado el array pasará a tener longitud 7.)
/* capitales.push("badalona");
console.log(capitales); */


//4 - Escribe por pantalla el elemento que ocupa la segunda posición;
/* document.write(capitales[1]); */

    
//5 - Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Santa Coloma'.
/* document.write("y lo he sustituido por santa coloma");
	capitales[1] = "Santa Coloma";
	document.write("<br>");

 */
//6 - Escribe una rutina que intercambie los valores de las posiciones 3 y 4. ;

/* var fotocopia="";

fotocopia = capitales[2];
capitales[2] = capitales[3];
capitales[3] = fotocopia;
 */


//EJERCICIO 35

// var amigos  = ["pedro","maria","joan","pili"];
	
// 1- queremos que escriba "mis amigos son maria y joan. rellena los huecos."
/* document.write("mis amigos son"+ "<b>" + amigos[1] + " " + "</b>" + "  y <b>" + amigos[2]+"</b>"); */

// 2- ¿dónde está el fallo?
// var enemigos = ["scipion", "scorpio", "black"];

// 3- escribe en el documento web "scorpio es peor que black" de modo que scorpio esté en negrita y la letra sea de color rojo.

// document.write("<b>" + " " + enemigos[1] + " " + "</b>" + "es peor que" + " " +"<b>" + enemigos[2] + "</b>");

/* document.write("<b style='color:red;font-weight:bold;'>" + enemigos[1] + "</b>" + " es peor que " + enemigos[2]); */

// 4- escribe una instrucción que devuelva la longitud del array amigos sea cual sea el número de datos almacenados en su interior.

/* console.log(amigos.length); */

// 5- "aitana" es también tu amiga. Escribe una instrucción que la añada al final de la lista amigos 

/* amigos.push("aitana");
document.write(amigos); */

// 6 - "pedro" ha cambiado de nombre. ahora se llama "nacho". actualiza con una instrucción tu lista de amigos

/* amigos[0]="nacho";
amigos[amigos.length]="aitana"; */

// 7 - "tor" es ahora tu enemigo. añádelo con una instruccion al final de tu lista de enemigos.

/* enemigos.push("tor");
enemigos[enemigos.length] = "tor"; */


//EJERCICIO 36

//Escribe un script que escriba por pantalla el día, mes y año en el que nos encontramos.

/* var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
        
        escribeFecha();
        
        function escribeFecha(){
            var fecha = new Date();

            var dia = fecha.getDate();
            var mesNumero = fecha.getMonth();
            var mes = meses[mesNumero];
            var ano = fecha.getFullYear();

            document.write("Hoy es " + dia + " de " + mes + " de " + ano);
        }

 */

//EJERCICIO 37

//Escribe un script que escriba la hora exacta justo en el momento de cargar el documento web.
/* 
escribeHora();

function escribeHora(){
    var horario = new horarioActual();



    var hora = horario.getHour();
    var minutos = horario.getMinutes();
    var segundos = horario.getSeconds();

    document.write("La hora es" + hora + " " + "horas" + " " + minutos + " " + "minutos" + " " + segundos + " " + "segundos");
}
 */

/* var fecha = new Date();
        
        var hora = fecha.getHours();
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        
        if (hora<10){hora = "0" + hora};
        if (minutos<10){minutos = "0" + minutos};
        if (segundos<10){segundos = "0" + segundos};

        document.write("Son las " + hora + ":" + minutos + ":" + segundos )
          */

//EJERCICIO 38

/* Escribe un script que pregunte al usuario el color del caballo blanco de Santiago.

En caso de que el usuario no escriba nada la respuesta por defecto será siempre «cualquier otro color».

En el caso que el visitante acierte la respuesta finalizaran las ventanas emergentes y se escribirá un 
mensaje por pantalla con la respuesta que haya indicado el visitante. */
emergente();
        
        function emergente(){
            var respuesta = preguntar();
            var condicion = respuesta.toLowerCase() == "blanco";
            if (!condicion){
                emergente();
            }else{
                document.write("CORRECTO! El caballo BLANCO de Santiago es " + respuesta);    
            }    
        }
        
        function preguntar(){
            return window.prompt("De que color es el caballo BLANCO de Santiago?","rojo no es");
        }
