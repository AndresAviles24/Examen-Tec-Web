$(document).ready(function () {
    // Función para validar el formulario
    $("#registroForm").submit(function (event) {

        event.preventDefault();

        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var pais = $("#pais").val();

        // Validar nombre (al menos 3 caracteres)
        if (nombre.length < 3) {
            errorAlert("El nombre debe tener al menos 3 caracteres.");
            event.preventDefault(); // Evitar el envío del formulario
            return;
        }

        // Validar correo electrónico utilizando una expresión regular simple
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            errorAlert("Ingrese un correo electrónico válido.");
            event.preventDefault(); // Evitar el envío del formulario
            return;
        }

        // Validar que se haya seleccionado un país
        if (pais === "") {
            errorAlert("Seleccione su país.");
            event.preventDefault(); // Evitar el envío del formulario
            return;
        }

        // Si todos los datos son correctos, mostrar un mensaje
        successAlert();
    });
    function successAlert(){
        Swal.fire({
            icon: 'success',
            title: '¡Registro exitoso!',
          })
    }

    function errorAlert(errorName){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorName
          })
    }
});