$(document).ready(function () {
    var datos = [
        { nombre: "Martín", edad: 30, ciudad: "San Salvador" },
        { nombre: "Jason", edad: 25, ciudad: "Manchester" },
        { nombre: "Hassan", edad: 35, ciudad: "El Cairo" },
        { nombre: "Choi", edad: 28, ciudad: "Seúl" },
        { nombre: "Luisa", edad: 32, ciudad: "San Francisco" }
    ];

    // Cargar los datos en la tabla
    function cargarDatosEnTabla() {
        var tablaBody = $("#tablaBody");

        for (var i = 0; i < datos.length; i++) {
            var fila = "<tr>" +
                "<td>" + datos[i].nombre + "</td>" +
                "<td>" + datos[i].edad + "</td>" +
                "<td>" + datos[i].ciudad + "</td>" +
                "</tr>";
            tablaBody.append(fila);
        }
    }

    // Llamar a la función para cargar los datos en la tabla
    cargarDatosEnTabla();
});