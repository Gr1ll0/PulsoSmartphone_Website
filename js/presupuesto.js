const canvas = new fabric.Canvas('canvas', {
    selection: false // Deshabilitar la selección de objetos
});

// Cargar una imagen celular png
fabric.Image.fromURL('assets/img/celular.png', function (img) {
    // Ajustar el tamaño de la imagen si es necesario
    img.scaleToWidth(200);
    img.scaleToHeight(400);

    //Deshabilitar la interacción con la imagen
    img.selectable = false;
    img.evented = false;

    // Agregar la imagen al lienzo
    canvas.add(img);
});

/*
----------------SCREEN---------------------
*/
const screen = new fabric.Rect({
    left: 13,
    top: 56,
    width: 164,
    height: 286,
    fill: 'gray',
    selectable: true, // Habilitar la selección del objeto
    evented: true, // Permitir eventos
    hoverCursor: 'pointer', // Cambiar el cursor al pasar el mouse
    lockMovementX: true, // Bloquear el movimiento horizontal
    lockMovementY: true, // Bloquear el movimiento vertical
    lockRotation: true, // Bloquear la rotación
    lockScalingX: true, // Bloquear el escalado horizontal
    lockScalingY: true, // Bloquear el escalado vertical
    hasControls: false, // Deshabilitar los manipuladores de control
    hasBorders: false, // Deshabilitar los bordes de selección
    hasRotatingPoint: false // Deshabilitar el punto de rotación
});

// Agregar la forma al lienzo
canvas.add(screen);

// Manejar el evento de clic en la pantalla
screen.on('mousedown', function () {
    // Cambiar la opacidad del color azul al hacer clic
    const blueColor = new fabric.Color('blue');
    const colorWithOpacity = blueColor.setAlpha(0.75); // Opacidad al 50%

    this.set('fill', colorWithOpacity.toRgba()); // Aplicar el nuevo color con opacidad
    canvas.requestRenderAll();
    cargarNombreParte('Pantalla'); // Llamar a una función para cargar el nombre de la parte en el formulario
});

/*
----------------Funciones de carga de partes---------------------
*/


/*
----------------Funciones de carga de partes---------------------
*/
function cargarNombreParte(nombreParte) {
    const formulario = document.getElementById('formulario');
    const nombreParteInput = document.getElementById('nombreParte');

    nombreParteInput.value = nombreParte;
}