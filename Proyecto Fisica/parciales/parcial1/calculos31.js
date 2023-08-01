let sectionResultado;
let resultado_text;
let resultado = 0;

function iniciarCalculos() {
  sectionResultado = document.getElementById("resultado-1-1-2");
  sectionResultado.style.display = "none";
  operaciones();
}

function verificarRespuestas() {
  resultado = 0; // Reinicia el valor de resultado antes de calcularlo.
  resultado_text = document.getElementById("resultado");
  let r1 = document.getElementById("respuesta-1").value;
  let r2 = document.getElementById("respuesta-2").value;
  let r3 = document.getElementById("respuesta-3").value;
  let r4 = document.getElementById("respuesta-4").value;
  let r5 = document.getElementById("respuesta-5").value;

  resultado += parseInt(r1);
  resultado += parseInt(r2);
  resultado += parseInt(r3);
  resultado += parseInt(r4);
  resultado += parseInt(r5);
}

function operaciones() {
  let botonVerificar = document.getElementById("boton-verificar");
  botonVerificar.addEventListener("click", crearMensaje);
}

function crearMensaje() {
  verificarRespuestas(); // Verifica las respuestas antes de mostrar el mensaje.
  sectionResultado.style.display = "flex";

  if (resultado == 5) {
    resultado_text.innerHTML = "Felicidades, todas tus respuestas fueron correctas🎉👌";
  } else {
    resultado_text.innerHTML = "Que lastima, alguna de tus respuestas fue erronea🙁😢";
  }
}

window.addEventListener("load", iniciarCalculos);
