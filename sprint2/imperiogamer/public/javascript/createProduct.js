window.onload = function(){

    let form = document.querySelector('form.editProfile');
    
   
    let section = document.querySelector('input.section');
    let titulo = document.querySelector('input.titulo');

    
    let errors = []

    function inputRojo(elemento){
        elemento.classList.add("input-error");
    }

    function inputVerde(elemento){
        elemento.classList.add("input-exito");
    }

    /* -------- Validacion en vivo ---------- */
    section.addEventListener("blur",function(e){
        if(section.value){
            inputVerde(section)
        } else {
            section.classList.remove("input-exito");
            inputRojo(section)
            
        }
    });

    titulo.addEventListener("blur",function(e){
        if(titulo.value){
            inputVerde(titulo)
        } else {
            titulo.classList.remove("input-exito");
            inputRojo(titulo)
        }
    });

    dni.addEventListener("blur",function(e){
        if(dni.value){
            inputVerde(dni)
        } else {
            dni.classList.remove("input-exito");
            inputRojo(dni)
        }
    });

    tel.addEventListener("blur",function(e){
        if(tel.value){
            inputVerde(tel)
        } else {
            tel.classList.remove("input-exito");
            inputRojo(tel)
        }
    });

    direccion.addEventListener("blur",function(e){
        if(direccion.value){
            inputVerde(direccion)
        } else {
            direccion.classList.remove("input-exito");
            inputRojo(direccion)
        }
    });

    /*-------  Funciones del Sumbit ------- */
    function validfirstName(section){
        if (section === "" || section === null) {
            errors.push("El campo Nombre esta vacio");
        } 
    }

    function validLastName(last_name){
        if (last_name === "" || last_name === null) {
            errors.push("El campo Apellido esta vacio");
        } 
    }

    function validDni(dni){
        if (dni === "" || dni === null) {
            errors.push("El campo DNI esta vacio");
        } 
    }

    function validTel(tel){
        if (tel === "" || tel === null) {
            errors.push("El campo Telefono esta vacio");
        } 
    }

    function validDireccion(direccion){
        if (direccion === "" || direccion === null) {
            errors.push("El campo Direccion esta vacio");;
        } 
    }
    console.log(ulErrors)
    function crearUl(){
        
        ulErrors.innerHTML = "<ul class='lista'></ul>";
    }
      
    function crearLi(){
        let lista = document.querySelector("ul.lista");
        errors.forEach(function (element) {
        lista.innerHTML += `<li class="msg-error">${element}</li>`;
    });
        errors = [];
    }
    

    
   
    form.addEventListener("submit", function(e){
        validfirstName(section.value);
        validLastName(last_name.value);
        validDni(dni.value);
        validTel(tel.value);
        validDireccion(direccion.value);
       if(errors.length > 0){
         e.preventDefault()
         crearUl();
         crearLi();
       }    
      });
}