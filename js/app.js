window.addEventListener("load",function(){
	var boton = document.getElementById("boton");
	var spanAñadir = document.getElementById("añade");
	var input = document.getElementById("input");
	var formulario = document.getElementById("formulario");
    var contenedor = document.getElementById("contenedor");
    var subContenedor = document.getElementById("sub-contenedor");

	spanAñadir.addEventListener("click",imprimirFormulario);

    function imprimirFormulario(){
        
        formulario.classList.remove("aparecer");
        spanAñadir.remove();
        input.focus();
    };
});
