

  function calcularTotal() {
    // Obtener la cantidad de tickets
    var cantidadTickets = parseInt(document.getElementById("cantidad-tickets").value);

    // Obtener la categoría seleccionada
    var categoria = document.getElementById("categoria").value;

    // Calcular el total a pagar con descuento según la categoría
    var totalPagar = 0;
    if (categoria === "Estudiante") {
      totalPagar = cantidadTickets * 200 * 0,2; // Precio por ticket para estudiantes: $10
    } else if (categoria === "Trainee") {
      totalPagar = cantidadTickets * 200 * 0,5; // Precio por ticket para trainees: $20
    } else if (categoria === "Junior") {
      totalPagar = cantidadTickets * 200 * 0,85; // Precio por ticket para juniors: $30
    }

    // Mostrar el total a pagar en la sección correspondiente
    document.getElementById("total-pagar").textContent = "Total a Pagar: $" + totalPagar;
  }

