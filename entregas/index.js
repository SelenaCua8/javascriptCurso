
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("ingrese su apellido: ");


alert("Bienvenido" + " " + nombre + " " + apellido);



let dia = prompt("elegi el día que queres saber tus horarios: ");


if (dia) {
    switch (dia)
    {
    case "Lunes":
        alert("Hoy trabajas de 9.00am hasta 17.00pm presencial");
        break;
        case "Martes":
        alert("Hoy trabajas de 9.00am hasta 17.00pm presencial");
        break;
        case "Miercoles":
        alert("Hoy trabajas de 9.00am hasta 17.00pm virtual");
        break;
        case "Jueves":
        alert("Hoy trabajas de 9.00am hasta 15.00pm virtual");
        break;
        case "Viernes":
        alert("Hoy trabajas de 9.00am hasta 16.00pm presencial y a las 18.00pm tenes turno en el doctor");
        break;
        case "Sabado":
        alert("Hoy no trabajas, tenes día libre");
        break;
        case "Domingo":
        alert("Hoy almorzas en lo de tus abuelos");
        break;
        default:
            alert("error")
            break;
    
         } }


         document.write("Agenda de " +  " " + nombre + " " + apellido);
         document.write('<br>');
         document.write("El día que elegiste fue " + " " + dia);
         