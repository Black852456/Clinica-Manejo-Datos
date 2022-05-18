var pacientes = document.querySelectorAll(".paciente");
var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("click", function(event) {
    //console.log(event.target);
    //.target => (SELECCIONA EL ELEMENTO MAS MINIMO AL QUE LE ESTA HACIENDO CLICK)
    //.parentNode => (SELECCIONA EL ELEMENTO PADRE QUE HALLA DETECTADO EL .TARGET)
    event.target.parentNode.remove();
});

/*

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        //console.log(paciente);
        this.remove();
    });
});

*/