$(document).ready(function() {
    $('#inicioSesion').submit(function(e) {
        e.preventDefault(); // Investigar más

        // Variables
        var correoEjemplo = $('#correoEjemplo').val();
        var contraEjemplo = $('#ejemploContra').val();
        var verificador = $('#verificador').is(':checked');
        var correoValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;

        // Funcion para limpiar los campos
        function clear() {
            $('#correoEjemplo').val('');
            $('#ejemploContra').val('');
            $('#verificador').prop('checked', false);
        }

        // INICIAR SESION
        if (correoEjemplo === "" || contraEjemplo === "") {
            alert("Por favor, llene todos los campos");
            return;
        }else if (!correoEjemplo.match(correoValido)) {
            alert("El correo debe tener un formato válido.");
            return;
        } else if (contraEjemplo.length < 8){
            alert("La contraseña debe tener al menos 8 caracteres."); // Funciona :)
            return;
        } else if (verificador === false) {
            alert("Debe verificarse para continuar.");
            return;
        } else {
            alert("Bienvenido.");
            clear(); // Limpiar campos después de mostrar "Bienvenido."
        }
        // Vaciar las variables
        clear();
    });

    $('#registro').submit(function(e) {
        e.preventDefault();

        // Variables
        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var fechaNacimiento =newDate($('#fechaNacimiento').val());
        var correo = $('#correo').val();
        var contra = $('#contrasena').val();
        var verificador = $('#verificador').is(':checked');
        var correoValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;

        // Validar fecha de nacimiento
        // hay que hacer la funcion pero tengo mal humor y sueño, buenas noches.
        
        // Funcion para limpiar los campos
        function clear() {
            $('#nombre').val('');
            $('#correo').val('');
            $('#contra').val('');
            $('#verificador').prop('checked', false);
        }

        // REGISTRARSE
        if (nombre === "" || apellido === "" || correo === "" || contra === "" || fechaNacimiento === "") {
            alert("Por favor, llene todos los campos");
            return;
        } else if (!correo.match(correoValido)) {
            alert("El correo debe tener un formato válido.");
            return;
        } else if (contra.length < 8){
            alert("La contraseña debe tener al menos 8 caracteres."); // Funciona :)
            return;
        } else if (fechaNacimiento || fechaNacimiento === "") { // aqui va validacion para la fecha que sea mayor, tengo sueño
            alert("Por favor, seleccione su fecha de nacimiento.");
            return;
        } else if (verificador === false) {
            alert("Debe verificarse para continuar.");
            return;
        } else {
            alert("Registro exitoso.");
            clear(); // Limpiar campos después de mostrar "Registro exitoso."
        }
        // Vaciar las variables
        clear();
    })
});
