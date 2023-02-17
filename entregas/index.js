const animales = [ {
    id: 1,
    nombre: "perro", 
    cantidad: 5,
    tipo: "callejeros",
},
{
    id: 2,
    nombre: "gato", 
    cantidad: 5,
    tipo: "callejeros",
},
{
    id: 3,
    nombre: "serpiente", 
    cantidad: 0,
    tipo: "exotico",
},
{
    id: 4,
    nombre: "loro", 
    cantidad: 5,
    tipo: "ave",
},
{
    id: 5,
    nombre: "lagarto", 
    cantidad: 6,
    tipo: "exotico",
}]

let nombres_animales = animales.map(animal => {
    return animal.nombre
})
alert("los animales que tenemos con frecuencia para adoptar son: " + " " + nombres_animales);

let mascota = prompt("ingrese la mascota que busca: ");


 
switch (mascota) {
  case "lagarto":
    document.write("Tenemos disponibilidad");
    break;
  case "perro":
    document.write("Tenemos disponibilidad");
    break;
  case "gato":
    document.write("Tenemos disponibilidad");
    break;
  case "serpiente":
    document.write("No tenemos disponibilidad");
    break;
  case "loro":
    document.write("Tenemos disponibilidad");
    break;
  default:
    document.write("No tengo la mascota que busca");
    break;
}




         