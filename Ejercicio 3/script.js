$(document).ready(function () {
    // Cargar datos de usuarios desde usuarios.json
    $.getJSON('usuarios.json', function (data) {
        var listaUsuarios = $('#listaUsuarios');

        // Iterar sobre los datos y crear elementos de lista
        $.each(data, function (index, usuario) {
            var listItem = '<li class="list-group-item"><strong>Nombre:</strong> ' + usuario.nombre + '<br><strong>Email:</strong> ' + usuario.email + '<br><strong>País:</strong> ' + usuario.pais + '</li>';
            listaUsuarios.append(listItem);
        });
    });
});