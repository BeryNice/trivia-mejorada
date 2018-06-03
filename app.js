// Declaramos las variables
var username = document.getElementById("name");
var mensaje = document.getElementById("bienvenida");
var posicion = document.getElementById("bienvenida");
var score = 0;
var resultadoCorrecto = [];
var resultadoIncorrecto = [];

//Esta funcion se activa al cargar la  página  inicia solicitando el nombre y pregunta si quiere jugar
function	intro(){
	mensaje.innerHTML = "Bienvenid@ " + username.value;
	var reto = document.createElement("p");
	var confirma = document.createElement("button");
	var niega = document.createElement("button");
	reto.innerHTML = "¿Quieres comenzar con el reto?";
	confirma.innerHTML = "Sí";
	niega.innerHTML = "No";
	posicion.appendChild(reto);
	posicion.appendChild(confirma);
	posicion.appendChild(niega);
	niega.setAttribute("id","No");
	confirma.setAttribute("id","Sí");
	reto.setAttribute("id","hijo");
	niega.setAttribute("onclick","retirada();");
	confirma.setAttribute("onclick", "trivia();");
	}

function retirada(){
	//Esta funcion se activa al  dar clic en boton NO
	mensaje.innerHTML = "¡Hasta Pronto!";
}

function trivia(){
	//ESTA FUNCION SE ACTIVA AL SER CONVOCADA, COMO LA TRIVIA NECESITA ELEMENTOS DE HTML VARIAS VECES Y MODIFICARLO VARIAS VECES, LA FUNCION AYUDA A QUE AGRUPEMOS LAS SENTENCIAS Y LAS PODAMOS EJECUTAR VARIAS VECES, CUANDO SEA NECESARIO
		var parent = document.getElementById("bienvenida");
		var child = document.getElementById("hijo");
		var child2 = document.getElementById("Sí");
		var child3 = document.getElementById("No");
		parent.removeChild(child);
		parent.removeChild(child2);
		parent.removeChild(child3);
		document.getElementById("contenedor").style.visibility = "visible";
		document.getElementById("pregunta1").style.visibility = "visible";
		document.getElementById("resultados").style.visibility="hidden";
	}

function comprobar(){

	var posicionScore = document.getElementById("resultados");
	// Creamos los elementos
	var mostrar = document.createElement("div");
	var mostrar2 = document.createElement("div");
	var mostrar3 = document.createElement("div");
	var mostrar4 = document.createElement("div");
	// Asignamos id a los elementos
 mostrar.id ="aciertos";
 mostrar2.id ="errores"
 mostrar3.id ="correctos"
 mostrar4.id ="incorrectos"

	document.getElementById("resultados").style.visibility = "visible";

	if (document.getElementById("answer3").checked) {
		resultadoCorrecto[score] = "<p>Felicidades, eres parte de la 6ta Generación de Laboratoria </p>";
		score +=1;

	}
	else {
		resultadoIncorrecto[score] = "<p>Sigue intentando, tú formas parte de la 6ta Generación </p>";
	}
	if (document.getElementById("answer5").checked) {
		resultadoCorrecto[score] = "<p>Correcto, aprenderas JavaScript de pies a cabeza</p>";
		score +=1;

	}
	else {
		resultadoIncorrecto[score] = "<p>No has puesto mucha atención, Cuidado! Estas aprendiendo JS</p>";
	}
	if (document.getElementById("answer8").checked) {
		resultadoCorrecto[score] = "<p>¡10 Semanas son tiempo suficiente para aprender las bases que necesitas, Suerte!</p>";
		score +=1;

	}
	else {
		resultadoIncorrecto[score] = "<p>Son solo 10 semanas para que puedas aprender las bases necesarias.</p>";
	}

	mostrar.innerHTML = "Aciertos: " + score;
	mostrar2.innerHTML = "Errores: " + (3-score);
	posicionScore.appendChild(mostrar);
	posicionScore.appendChild(mostrar2);
	//mostrar3.appendChild(mostrar);
	//mostrar4.appendChild(mostrar2);
	mostrar3.innerHTML = resultadoCorrecto;
	mostrar4.innerHTML = resultadoIncorrecto;
	posicionScore.appendChild(mostrar3);
	posicionScore.appendChild(mostrar4);
	console.log(resultadoCorrecto);
	console.log(resultadoIncorrecto);
	console.log(score);
}
