function resaltarParte(event) {
    const parte = event.target.getAttribute('data-part');
    const imagenCelular = document.getElementById('imagen-celular');
    const formulario = document.getElementById('formulario');
    const parteRotaInput = document.getElementById('parte-rota');

    // Resaltar la parte seleccionada
    event.target.classList.add('area-resaltada-pantalla');

    // Cargar la información de la parte rota en el formulario
    parteRotaInput.value = parte;
}