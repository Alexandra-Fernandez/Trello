window.addEventListener("load",function(){
    var contenedor = document.getElementById("contenedor");
    var subContenedor = document.getElementById("subcontenedor");
	var spanAñadir = document.getElementById("anade");
	var formulario = document.getElementById("formulario");
	var input = document.getElementById("input");
	var boton = document.getElementById("boton");

	spanAñadir.addEventListener("click",imprimirFormulario);
    boton.addEventListener("click",imprimirNombreLista);

    function imprimirFormulario(){
        
        formulario.classList.remove("ocultar");
        spanAñadir.classList.add("ocultar");
        input.focus();
    };
    
    function imprimirNombreLista(e){
        e.preventDefault();
        
        formulario.classList.add("ocultar");
        spanAñadir.classList.remove("ocultar");
        
        var caja = document.createElement("div");
        caja.classList.add("caja");
        
        var nombreLista = document.createElement("div");
        nombreLista.classList.add("tituloLista");
        nombreLista.innerText = input.value;
        
        var crearTarjeta = document.createElement("div");
        crearTarjeta.classList.add("tarjeta");
        
        var tarjeta = document.createElement("a");
        tarjeta.setAttribute("href", "#");
        tarjeta.innerText = "Añadir una tarjeta";
        
        crearTarjeta.appendChild(tarjeta);    
        var subContenedor = divNuevo();
        subContenedor.insertBefore( caja, subContenedor.lastElementChild);        
        caja.appendChild(nombreLista);        caja.appendChild(crearTarjeta);
        input.value = ""; 
        
        formulario.remove();
        spanAñadir.remove();
        subContenedor.parentElement.appendChild(formulario);
        subContenedor.parentElement.appendChild(spanAñadir);
        

        
        crearTarjeta.addEventListener("click", function(e){
           e.preventDefault();
            
            crearTarjeta.style.display="none";
            
            var nuevoForm = document.createElement("div");
                nuevoForm.classList.add("nuevaTarjeta");
                subContenedor.appendChild(nuevoForm);
            
            var nuevoTextArea = document.createElement("textarea");
                nuevoTextArea.classList.add("textarea")
                nuevoTextArea.setAttribute("rows", "3");
                nuevoTextArea.setAttribute("cols", "8");
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
                    newTarjeta.classList.add("subtitulo")
                    newTarjeta.innerText = nuevoTextArea.value;
                    nuevoForm.style.display="none";
                   
                    caja.appendChild(newTarjeta);
                    caja.appendChild(crearTarjeta);
                
                 //nombreLista.parentElement.insertBefore(nuevoTextArea,nombreLista.parentElement.children[1]);
            });
        });
    };
    
     function divNuevo(){
         
        var newContenedor = document.createElement("div");
        newContenedor.setAttribute("id","newContenedor")
//        newContenedor.appendChild(caja);
        newContenedor.classList.add("newContenedor");
        newContenedor.appendChild(spanAñadir);
        newContenedor.appendChild(formulario);
        spanAñadir.style.display="inline-bock";
        subContenedor.appendChild(newContenedor);
         
         return newContenedor;

        
    }
});
   