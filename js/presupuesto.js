/*
-------------------------------------
            API-Presupuesto
-------------------------------------
*/

//Constantes
const componentStates = {
  screen: false,
  btnHome: false,
  btnPower: false,
};
const lst_Danios = [];

document.addEventListener("DOMContentLoaded", function () {
  const modeloSelect = document.getElementById("modelo");
  const otroModeloDiv = document.getElementById("otroModeloDiv");
  const otroModeloInput = document.getElementById("otroModelo");

  modeloSelect.addEventListener("change", function () {
    if (modeloSelect.value === "otros") {
      otroModeloDiv.style.display = "block";
    } else {
      otroModeloDiv.style.display = "none";
    }
  });

  const formularioDaños = document.getElementById("formularioDaños");
  formularioDaños.addEventListener("submit", function (event) {
    event.preventDefault();

    const modeloSeleccionado = modeloSelect.value;
    const otroModelo = otroModeloInput.value;
    const detalles = document.getElementById("detalles").value;

    // Aquí puedes realizar el envío de la información a través de una API o realizar otras acciones necesarias.
    console.log("Modelo seleccionado:", modeloSeleccionado);
    console.log("Otro modelo:", otroModelo);
    console.log("Detalles:", detalles);

    // Puedes mostrar un mensaje de confirmación aquí.
    alert("Reporte enviado con éxito.");
  });
});

// #region Fabric

/*
-------------------------------------
            Fabric
-------------------------------------
*/

//Partes.
const PartesDaniadas = {
  Pantalla: "Pantalla",
  BotonHome: "Botón Home",
  BotonPower: "Botón Power"
};

const canvas = new fabric.Canvas("canvas", {
  selection: false, // Deshabilitar la selección de objetos
});

// Cargar una imagen celular png
fabric.Image.fromURL(
  "assets/img/presupuesto-img/celular-presupuesto-auto.png",
  function (img) {
    // Ajustar el tamaño de la imagen si es necesario
    img.scaleToWidth(200);
    img.scaleToHeight(400);

    //Deshabilitar la interacción con la imagen
    img.selectable = false;
    img.evented = false;

    // Agregar la imagen al lienzo
    canvas.add(img);
  }
);

/*
----------------SCREEN---------------------
*/
const screen = new fabric.Rect({
  left: 13,
  top: 56,
  width: 158,
  height: 286,
  fill: "gray",
  selectable: true, // Habilitar la selección del objeto
  evented: true, // Permitir eventos
  hoverCursor: "pointer", // Cambiar el cursor al pasar el mouse
  lockMovementX: true, // Bloquear el movimiento horizontal
  lockMovementY: true, // Bloquear el movimiento vertical
  lockRotation: true, // Bloquear la rotación
  lockScalingX: true, // Bloquear el escalado horizontal
  lockScalingY: true, // Bloquear el escalado vertical
  hasControls: false, // Deshabilitar los manipuladores de control
  hasBorders: false, // Deshabilitar los bordes de selección
  hasRotatingPoint: false, // Deshabilitar el punto de rotación
});

// Agregar la forma al lienzo
canvas.add(screen);

// Manejar el evento de clic en la pantalla
screen.on("mousedown", function () {
  if (!componentStates.screen) {
    // Cambiar la opacidad del color azul al hacer clic
    const blueColor = new fabric.Color("blue");
    const colorWithOpacity = blueColor.setAlpha(0.75); // Opacidad al 50%

    this.set("fill", colorWithOpacity.toRgba()); // Aplicar el nuevo color con opacidad
    canvas.requestRenderAll();
    componentStates.screen = true;
  } else {
    this.set("fill", "gray"); // Restaurar el color original
    CrearAreaScreen(this);
    componentStates.screen = false;
  }

  
  cargarNombreParte(PartesDaniadas.Pantalla);
  canvas.requestRenderAll();
});

// #region Funcion-Copia

function CrearAreaScreen(nombreBTN) {
  canvas.remove(nombreBTN);

  const screen = new fabric.Rect({
    left: 13,
    top: 56,
    width: 158,
    height: 286,
    fill: "gray",
    selectable: true,
    evented: true,
    hoverCursor: "pointer",
    lockMovementX: true,
    lockMovementY: true,
    lockRotation: true,
    lockScalingX: true,
    lockScalingY: true,
    hasControls: false,
    hasBorders: false,
    hasRotatingPoint: false
  });

  canvas.add(screen);
  canvas.sendToBack(screen);

  screen.on("mousedown", function () {
    if (!componentStates.screen) {
      // Cambiar la opacidad del color azul al hacer clic
      const blueColor = new fabric.Color("blue");
      const colorWithOpacity = blueColor.setAlpha(0.75); // Opacidad al 50%

      this.set("fill", colorWithOpacity.toRgba()); // Aplicar el nuevo color con opacidad
      canvas.requestRenderAll();
      componentStates.screen = true;
    } else {
      CrearAreaScreen(this);
      componentStates.screen = false;
    }

    cargarNombreParte(PartesDaniadas.Pantalla);
    canvas.requestRenderAll();
  });
}

// #endregion

/*
----------------Boton Home---------------------
*/

const btnHome = new fabric.Circle({
  left: 75,
  top: 352.2,
  radius: 16.7,
  fill: "pink",
  selectable: true,
  evented: true,
  hoverCursor: "pointer",
  lockMovementX: true,
  lockMovementY: true,
  lockRotation: true,
  lockScalingX: true,
  lockScalingY: true,
  hasControls: false,
  hasBorders: false,
  hasRotatingPoint: false,
});

// Agregar la forma al lienzo
canvas.add(btnHome);

// Manejar el evento de clic en la pantalla
btnHome.on("mousedown", function () {
  if (!componentStates.btnHome) {
    // Cambiar la opacidad del color azul al hacer clic
    const blueColor = new fabric.Color("blue");
    const colorWithOpacity = blueColor.setAlpha(0.75); // Opacidad

    this.set("fill", colorWithOpacity.toRgba()); // Aplicar el nuevo color con opacidad
    canvas.requestRenderAll();
    componentStates.btnHome = true;
  } else {
    CrearAreaBtnHome(this);
    componentStates.btnHome = false;
  }

  cargarNombreParte(PartesDaniadas.BotonHome);
  canvas.requestRenderAll();
});

// #region Funcion-Copia

function CrearAreaBtnHome(nombreBTN) {
  canvas.remove(nombreBTN);

  const btnHome = new fabric.Circle({
    left: 75,
    top: 352.2,
    radius: 16.7,
    fill: "pink",
    selectable: true,
    evented: true,
    hoverCursor: "pointer",
    lockMovementX: true,
    lockMovementY: true,
    lockRotation: true,
    lockScalingX: true,
    lockScalingY: true,
    hasControls: false,
    hasBorders: false,
    hasRotatingPoint: false,
  });

  canvas.add(btnHome);
  canvas.sendToBack(btnHome);

  btnHome.on("mousedown", function () {
    if (!componentStates.btnHome) {
      // Cambiar la opacidad del color azul al hacer clic
      const blueColor = new fabric.Color("blue");
      const colorWithOpacity = blueColor.setAlpha(0.75); // Opacidad

      this.set("fill", colorWithOpacity.toRgba()); // Aplicar el nuevo color con opacidad
      canvas.requestRenderAll();
      componentStates.btnHome = true;
    } else {
      CrearAreaBtnHome(this);
      componentStates.btnHome = false;
    }

    
    cargarNombreParte(PartesDaniadas.BotonHome);
    canvas.requestRenderAll();
  });
}

// #endregion

/*
----------------Boton Power---------------------
*/

const btnPower = new fabric.Rect({
  left: 183,
  top: 65.9,
  width: 5,
  height: 27,
  fill: "green",
  selectable: true,
  evented: true,
  hoverCursor: "pointer",
  lockMovementX: true,
  lockMovementY: true,
  lockRotation: true,
  lockScalingX: true,
  lockScalingY: true,
  hasControls: false,
  hasBorders: false,
  hasRotatingPoint: false,
});

// Agregar la forma al lienzo
canvas.add(btnPower);
canvas.sendToBack(btnPower);

// Manejar el evento de clic en la pantalla
btnPower.on("mousedown", function () {
  if (!componentStates.btnPower) {
    // Cambiar la opacidad del color azul al hacer clic
    const blueColor = new fabric.Color("blue");
    const colorWithOpacity = blueColor.setAlpha(0.75); // Opacidad

    this.set("fill", colorWithOpacity.toRgba()); // Aplicar el nuevo color con opacidad
    canvas.sendToBack(btnPower);
    canvas.requestRenderAll();
    componentStates.btnPower = true;
  } else {
    this.set("fill", "green"); // Restaurar el color original
    CrearAreaBtnPower(this);
    componentStates.btnPower = false;
  }

  cargarNombreParte(PartesDaniadas.BotonPower);
  canvas.requestRenderAll();
});

//#region Funcion-Copia

function CrearAreaBtnPower(nombreBTN) {
  canvas.remove(nombreBTN);

  const btnPower = new fabric.Rect({
    left: 183,
    top: 65.9,
    width: 5,
    height: 27,
    fill: "green",
    selectable: true,
    evented: true,
    hoverCursor: "pointer",
    lockMovementX: true,
    lockMovementY: true,
    lockRotation: true,
    lockScalingX: true,
    lockScalingY: true,
    hasControls: false,
    hasBorders: false,
    hasRotatingPoint: false,
  });

  canvas.add(btnPower);
  canvas.sendToBack(btnPower);

  btnPower.on("mousedown", function () {
    if (!componentStates.btnPower) {
      // Cambiar la opacidad del color azul al hacer clic
      const blueColor = new fabric.Color("blue");
      const colorWithOpacity = blueColor.setAlpha(0.75); // Opacidad

      this.set("fill", colorWithOpacity.toRgba()); // Aplicar el nuevo color con opacidad
      canvas.sendToBack(btnPower);
      canvas.requestRenderAll();
      componentStates.btnPower = true;
    } else {
      CrearAreaBtnPower(this);
      componentStates.btnPower = false;
    }

    cargarNombreParte(PartesDaniadas.BotonPower);
    canvas.requestRenderAll();
  });
}

//#endregion

/*
----------------Funciones de carga en formulario---------------------
*/
function cargarNombreParte(nombreParte) {
  var checkEx = false;

  for (let index = 0; index < lst_Danios.length; index++) {
      if(nombreParte === lst_Danios[index])
      {
        checkEx = true;
        lst_Danios.splice(index, 1);
        break;
      }
  }

  if(checkEx === false){
    const nombreParteInput = document.getElementById("lst_danios");

    lst_Danios.push(nombreParte);
    console.log(lst_Danios);
  }

  actualizarInputListaDanios();
}

function actualizarInputListaDanios() {
  const nombreParteInput = document.getElementById("lst_danios");
  nombreParteInput.value = lst_Danios.join(", ");
}


// #endregion

/*
----------------Presupuesto Manual-&-Auto ---------------------
*/

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("presupuesto-tec").style.display = "none";
  document.getElementById("presupuesto-auto").style.display = "none";
  document.getElementById("presupuesto-auto-canvas").style.display = "none";

  document
    .getElementById("botonPresu-Autogenerado")
    .addEventListener("click", function () {
      document.getElementById("presupuesto-auto").style.display = "block";
      document.getElementById("presupuesto-tec").style.display = "none";
      document.getElementById("presupuesto-auto-canvas").style.display =
        "block";
    });

  document
    .getElementById("botonPresu-Manual")
    .addEventListener("click", function () {
      document.getElementById("presupuesto-auto").style.display = "none";
      document.getElementById("presupuesto-tec").style.display = "block";
      document.getElementById("presupuesto-auto-canvas").style.display = "none";
    });
});


