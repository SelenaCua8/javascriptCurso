const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});


//FORM
window.addEventListener("load",function(){
	document.formulario.addEventListener("submit",validarFormulario);
	window.formulario.nombre.addEventListener("input",function(){
		 document.getElementById("errorNombre").innerHTML= "";
	})

});		

function validarFormulario(e){
	e = e || window.event;
	if(window.formulario.nombre.value==""){
		e.preventDefault();
		document.getElementById("errorNombre").innerHTML= "Debes rellenar el campo";
		document.getElementById("errorNombre").setAttribute("style","color:red;");
	}else{
		//podríamos escribir si quisiéramos document.formulario.submit() y forzaríamos el envío pero es innecesario porqué se hará igualmente.
                console.log("el formulario se ha enviado");
	}
}