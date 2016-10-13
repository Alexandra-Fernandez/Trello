window.addEventListener("load",function(){
	var boton = document.getElementById("boton");
	var spanAñadir = document.getElementById("añade");
	var input = document.getElementById("input");
	var formulario = document.getElementById("formulario");
    var contenedor = document.getElementById("contenedor");
    var subContenedor = document.getElementById("sub-contenedor");

	spanAñadir.addEventListener("click",imprimirFormulario);
    boton.addEventListener("click",imprimirNombreLista);

    function imprimirFormulario(){
        
        formulario.classList.remove("aparecer");
        spanAñadir.remove();
        input.focus();
    };
    
    function imprimirNombreLista(e){
        e.preventDefault();
        
        formulario.remove();
        
        var nombreLista = document.createElement("div");
            nombreLista.classList.add("titulo-lista");
            nombreLista.innerHTML = input.value;
        
        var crearTajeta = document.createElement("a");
            crearTajeta.setAttribute("href", "#");
            crearTajeta.classList.add("nueva-tarjeta");
            crearTajeta.innerText = "Añadir una tarjeta";
        
        subContenedor.appendChild(nombreLista);
        subContenedor.appendChild(crearTajeta);
        
        input.value = "";
    };
});
