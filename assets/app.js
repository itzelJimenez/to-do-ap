
var contenedorTareas = document.getElementById('nuevasTareas');
var tareaNueva = document.getElementById('tareaNueva');
var contador = 1;

function nuevaTarea(event){
 event.preventDefault();
var article = document.createElement('article');
var palomita = document.createElement('input');
palomita.type = "checkbox";
palomita.onclick = function(event){
	var checado = this.checked;
	var texto = this.nextSibling;
	if(checado){
		texto.className = "rayado"
	} else{
		texto.className = null;
	}
}
var etiqueta = document.createElement('label');
etiqueta.innerText= tareaNueva.value;
var boton = document.createElement('input');
boton.type = "submit"
boton.value = "x"
boton.onclick=function(){
	var articulo = this.parentElement;
	articulo.remove();
	//contenedorTareas.removeChild(article);
}
article.appendChild(palomita);
article.appendChild(etiqueta);
article.appendChild(boton);

contenedorTareas.appendChild(article);


//Agregar Id's
var id = "check" + contador;
palomita.id = id;
etiqueta.setAttribute("for", id);

contador++;
tareaNueva.value = "";
}

