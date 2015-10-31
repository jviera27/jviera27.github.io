// function lanzaalerta(){
// 	alert("fadlkfdlkflñasdkflñasdkfñ");
// }
// lanzaalerta();

//ejercicio 1

var comentarioUsuario = document.getElementById("val1").value
var palabraReservada = document.getElementById("val2").value

//se calcula el reemplazo
var resultado = comentarioUsuario.replace(new RegExp("/"+palabraReservada+"/g"));

document.getElementById("resultado").value = resultado;[

function censurar(){
	var comentarioUsuario=document.ge("val1").value
	var palabras=["primo","hijo","papa","enojo"]
	var resultado=comentarioUsuario;

	for(var i=0; i<palabras.length; i++){
		resultado=resultado.replace(new RegExp(palabras[i],"g"),"****");
	}
	document.getElementById("resultado")

	//aca 
}