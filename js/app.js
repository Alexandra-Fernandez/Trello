window.addEventListener("load",function(){
	var boton = document.getElementById("boton");
	var spanAñadir = document.getElementById("añade");
	var input = document.getElementById("input");
	var formulario = document.getElementById("formulario");
    var contenedor = document.getElementById("contenedor");
    var subContenedor = document.getElementById("subcontenedor");

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
        
        var nuevasTarjetas = document.createElement("div");
        crearTajeta.insertBefore(nuevasTarjetas, crearTajeta.children[3]);
        
        
        divNuevo();
        
        crearTajeta.addEventListener("click",function(){
            
            crearTajeta.style.display="none";
            
            var nuevoForm = document.createElement("form");
                subContenedor.appendChild(nuevoForm);
            
            var nuevoTextArea = document.createElement("textarea");
                nuevoForm.appendChild(nuevoTextArea);
            
            var nuevoBoton = document.createElement("button");
                nuevoBoton.innerText = "Guardar";
                nuevoForm.appendChild(nuevoBoton);
            
            nuevoBoton.addEventListener("click",function(e){
                e.preventDefault();
                
                nuevoForm.style.display="none";
                
                var newTarjeta = document.createElement("span");
                    newTarjeta.innerText = nuevoTextArea.value;
                    newTarjeta.style.display="block";
                    nuevasTarjetas.appendChild(newTarjeta);
                    
                    subContenedor.appendChild(crearTajeta);
                    crearTajeta.style.display = "inline-block";
            });
        });
    };
    function divNuevo(){
        var nuevoDiv = document.createElement("div");
        contenedor.appendChild(nuevoDiv);
        nuevoDiv.appendChild(spanAñadir);
        nuevoDiv.appendChild(formulario);
        spanAñadir.classList.remove ("desaparecer");
    }
});
