let carga_1
let carga_2
let distancia
let sectionResultado
let resultado_text
let resultado
let constanteDeC=9E9
let margenMenor
let margenMayor

function iniciarCalculos() {  
    sectionResultado=document.getElementById('resultado-1-1-2')
    sectionResultado.style.display='none'
    cargasAleatorias()
}

function cargasAleatorias() {
    carga_1 = aleatorio(0, 999) * 1E-6;
    carga_2 = aleatorio(0, 999) * 1E-6;
    distancia= aleatorio(0,100)/100;
    let spanCarga1=document.getElementById('carga-1')
    let spanCarga2=document.getElementById('carga-2')
    let spanDistancia=document.getElementById('distancia')
    spanCarga1.innerHTML=carga_1.toExponential(2);
    spanCarga2.innerHTML=carga_2.toExponential(2);
    spanDistancia.innerHTML=distancia.toFixed(2)
    operaciones()
}
function operaciones(){
   resultado=constanteDeC*((carga_1*carga_2)/(distancia*distancia))
   margenMayor=resultado+(resultado*0.05)
   margenMenor=resultado-(resultado*0.05)
   let botonVerificar=document.getElementById('boton-verificar')
   botonVerificar.addEventListener('click',crearMensaje)
}

function crearMensaje(){
    sectionResultado.style.display='flex'
    resultadoUsuario=document.getElementById('usuario')
    resultado_text=document.getElementById('resultado')
    sectionResultado.style.display='flex'
    if (resultadoUsuario.value !== '' && parseFloat(resultadoUsuario.value) > margenMenor && parseFloat(resultadoUsuario.value) < margenMayor) {
        resultado_text.innerHTML = 'Felicidades, tu respuesta fue correcta🎉👌';
      } else {
        resultado_text.innerHTML = 'Que lastima, tu respuesta fue erronea🙁😢';
      }
      
    /*resultado_text.innerHTML=resultado*/
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min ) + min)
}
function aleatorioD(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarCalculos)