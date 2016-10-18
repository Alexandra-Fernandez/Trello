window.addEventListener("load",function(){
	var boton = document.getElementById("boton");
	var spanAñadir = document.getElementById("anade");
	var input = document.getElementById("input");
	var formulario = document.getElementById("formulario");
    var contenedor = document.getElementById("contenedor");
    var subContenedor = document.getElementById("subcontenedor");

	spanAñadir.addEventListener("click",imprimirFormulario);
    boton.addEventListener("click",imprimirNombreLista);

    function imprimirFormulario(){
        
        formulario.classList.remove("ocultar");
        spanAñadir.classList.add("ocultar");
        input.focus();
    };
    
    function imprimirNombreLista(e){
        e.preventDefault();
        
        
        var caja = document.createElement("div");
            caja.classList.add("caja");
        
        var nombreLista = document.createElement("div");
            nombreLista.classList.add("tituloLista");
            nombreLista.innerText = input.value;
        
        var crearTarjeta = document.createElement("div");
            crearTarjeta.classList.add("tarjeta");
        
        var tarjeta = document.createElement("a")
            tarjeta.setAttribute("href", "#");
            tarjeta.innerText = "Añadir una tarjeta";
        
            crearTarjeta.appendChild(tarjeta);
        
        subContenedor.appendChild(caja);
        caja.appendChild(nombreLista);
        caja.appendChild(crearTarjeta);
        
        //spanAñadir.classList.remove("aparecer");
        //contenedor.appendChild(subContenedor);
        
        
//        subContenedor.appendChild(nombreLista);
//        subContenedor.appendChild(crearTarjeta);
           
        input.value = ""; 
        
        divNuevo();
        
        crearTarjeta.addEventListener("click", function(e){
           e.preventDefault();
            
            crearTarjeta.style.display="none";
            
            var nuevoForm = document.createElement("div");
                nuevoForm.classList.add("nuevaTarjeta");
                subContenedor.appendChild(nuevoForm);
            
            var nuevoTextArea = document.createElement("textarea");
                nuevoTextArea.classList.add("textarea")
                nuevoForm.appendChild(nuevoTextArea);
            
            var nuevoBoton = document.createElement("button");
                nuevoBoton.classList.add("nuevoboton");
                nuevoBoton.innerText = "Guardar";
                nuevoForm.appendChild(nuevoBoton);
                caja.appendChild(nuevoForm);
                
            
            nuevoBoton.addEventListener("click", function(e){
                e.preventDefault();
                
                crearTarjeta.style.display="block";
                var newTarjeta = document.createElement("div");
                    newTarjeta.classList.add("tituloLista")
                    newTarjeta.innerText = nuevoTextArea.value;
                    nuevoForm.style.display="none";
                   
                    caja.appendChild(newTarjeta);
                    caja.appendChild(crearTarjeta);
            });
        });
    };
     function divNuevo(){
         
        var nuevoDiv = document.createElement("div");
        contenedor.appendChild(nuevoDiv);
        nuevoDiv.appendChild(formulario);
        nuevoDiv.style.display="inline-block";
    }
});
   