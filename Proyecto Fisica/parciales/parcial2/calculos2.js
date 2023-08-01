let carga_1
let carga_2
let distancia
let distancia2
let hipotenusa
let sectionResultado
let resultado_text
let resultado
let constanteDeC=9E9
let margenMenor
let margenMayor
let volumen
let campo

function iniciarCalculos() {  
    sectionResultado=document.getElementById('resultado-1-1-2')
    sectionResultado.style.display='none'
    cargasAleatorias()
}

function cargasAleatorias() {
    carga_1 = aleatorio(0, 999)*1E-5;
    carga_2 =aleatorio(0, 999);
    distancia= aleatorio(0,1000)*1E-8;
    distancia2= aleatorio(1,900)/10;
    let spanCarga1=document.getElementById('carga-1');
    let spanCarga2=document.getElementById('carga-2');
    let spanDistancia=document.getElementById('distancia-1');
    let spanDistancia2=document.getElementById('distancia-2');
    spanCarga1.innerHTML=carga_1.toExponential(2);
    spanCarga2.innerHTML=carga_2;
    spanDistancia.innerHTML=distancia.toExponential(2)
    spanDistancia2.innerHTML=distancia2.toFixed(1)
    operaciones()
}
function operaciones(){
    distancia2=distancia2*Math.PI/180
   campo=carga_2*Math.cos(distancia2)
   volumen=campo*distancia
   resultado=carga_1*volumen
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