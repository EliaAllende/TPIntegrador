

//valor de ticket constante
const valorTickets = 200;

//porcentajes de descuento 
let entradaEstudiante = 80;
let entradaTrainee    = 50;
let entradaJunior     = 15;

// Elements by ID
let nombre          = document.getElementById("inputNombre");
let apellido        = document.getElementById("inputApellido");
let mail            = document.getElementById("inputEmail");
let cantidadTickets = document.getElementById("inputCantidad");
let categoria       = document.getElementById("inputCategoria");

// quitar estilo de error a los elementos del form
function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

// Cálculo total
function total_a_pagar() {

    //Verificación y eliminación de posibles errores
    quitarClaseError();

  
    if (nombre.value === "") {
        alert("Ingrese su nombre");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        alert("Ingrese su apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Ingrese su email");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(mail.value)) {
        alert("Ingrese un correo electrónico válido");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

  
    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        alert("Ingrese correctamente cantidad de tickets");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

    
    if (categoria.value == "") {
        alert("Seleccione una categoría");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    // Cálculo del total
    let totalValorTickets = (cantidadTickets.value) * valorTickets;

    // Aplico descuentos según categoría
    if (categoria.value == 0) {
        totalValorTickets = totalValorTickets ;
    }
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (entradaEstudiante / 100 * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (entradaTrainee / 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (entradaJunior / 100 * totalValorTickets);
    }

    // Relaciono con el HTML
    importeTotal.innerHTML = totalValorTickets;
}

// Botón Resumen 
btnResumen.addEventListener("click", total_a_pagar);

// Botón Borrar 
function reset_total_a_pagar() {
    quitarClaseError();
    importeTotal.innerHTML = "";
}
btnBorrar.addEventListener("click", reset_total_a_pagar);