$(document).on("ready",main); //llama la funcion main cuando se carga la pagina

function main(){ // se establece main como funcion
	$("#menu a").on("click", irA); // espera a que den click en menu para lamar la funcion irA
}
function irA(){ // se define como funcion irA()
	var seccion = $(this).attr("href"); //define la variable seccion con el valor del href clickeado
	//ANIMAR EL SCROLL ROLLING
	$("body, html").animate({ // se avisa que se va animar el desplazamiento 
		scrollTop: $(seccion).offset().top-130 // resta 130px hacia arriba 
	}, 800); //se indica que la animacion debe durar 800 milisegundos

	return false; // evita que se siga ejecutando la funcion.
}