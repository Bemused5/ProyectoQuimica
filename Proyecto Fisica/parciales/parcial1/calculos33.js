let carga_1
let distancia
let distancia2
let hipotenusa
let sectionResultado
let resultado_text
let resultado
let constanteDeC=9E9
let margenMenor
let margenMayor
let area

function iniciarCalculos() {  
    sectionResultado=document.getElementById('resultado-1-1-2')
    sectionResultado.style.display='none'
    cargasAleatorias()
}

function cargasAleatorias() {
    carga_1 = aleatorio(0, 999);
    distancia= aleatorio(0,1000)/1000;
    distancia2= aleatorio(1,900)/10;
    let spanCarga1=document.getElementById('carga-1');
    let spanDistancia=document.getElementById('distancia-1');
    let spanDistancia2=document.getElementById('distancia-2');
    spanCarga1.innerHTML=carga_1;
    spanDistancia.innerHTML=distancia.toFixed(3)
    spanDistancia2.innerHTML=distancia2.toFixed(1)
    operaciones()
}
function operaciones(){
   distancia2=90-distancia2
   distancia=distancia/2
   area=Math.PI*(distancia*distancia)
   resultado=carga_1*distancia2*area
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