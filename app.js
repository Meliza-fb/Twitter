function add() {
	var text = document.getElementsByName("texto")[0].value; //[0]rescata el value de texto//

	if (text == "") {
		alert ("Ingrese un comentario");
	} else {


	var comentario = document.createElement("div");
	var cont = document.getElementById("timeLine"); // div vacio de html//
	var letras = document.createElement("p");
	var nodoTexto = document.createTextNode(text);


		letras.appendChild(nodoTexto);


		comentario.appendChild(letras);
		cont.appendChild(comentario);
	}
}

function contar() { //no logre hacer funcionar el contador :(
	var max = "140";
    var text = document.getElementsByName("texto").value;
    var longitud= text.length;
     if(longitud <= max) {
          document.getElementById("contador").value = max-longitud;
     } else {
          document.getElementsByName("texto").value = text.substr(0, max);
     }
}

//esto es lo que intente hace pero no funcionaba :(
/*var text =document.getElementsByName("texto")[0]
	text2.onkeydown = function() {
	var max = "140";
	var textNuevo = text.value;
	var longitud = textNuevo.length;
	var contadorCaracteres = document.getElementById("contador");
	var boton = document.getElementsByName("btn")[0];

		 contadorCaracteres.innerHTML = max - longitud;
		 if (longitud > max) {
			 boton.disabled = true;
		 } else if (longitud < max) {
			 boton.disabled = false;
		 }
	 }*/
