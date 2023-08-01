let carga_1
let carga_2
let carga_3
let distancia
let hipotenusa
let sectionResultado
let resultado_text
let resultado   
let resultadox
let resultadoy
let constanteDeC=9E9
let margenMenor
let margenMayor

function iniciarCalculos() {  
    sectionResultado=document.getElementById('resultado-1-1-2')
    sectionResultado.style.display='none'
    cargasAleatorias()
}

function cargasAleatorias() {
    carga_1 = -aleatorio(0, 999) * 1E-8;
    carga_2 = aleatorio(0, 999) * 1E-8;
    carga_3 = aleatorio(0, 999) * 1E-5;
    distancia= aleatorio(0,200)/100;
    hipotenusa=Math.sqrt((distancia*distancia)+(distancia*distancia))
    let spanCarga1=document.getElementById('carga-1')
    let spanCarga2=document.getElementById('carga-2')
    let spanCarga3=document.getElementById('carga-3')
    let spanDistancia=document.getElementById('distancia')
    spanCarga1.innerHTML=carga_1.toExponential(2);
    spanCarga2.innerHTML=carga_2.toExponential(2);
    spanCarga3.innerHTML=carga_3.toExponential(2);
    spanDistancia.innerHTML=distancia.toFixed(2)
    operaciones()
}
function operaciones(){
   let x2a3
   let x1a3
   let y1a3
   let x2a3prev=distancia
   x2a3prev=x2a3prev/x2a3prev
   x2a3=constanteDeC*((carga_2*carga_3)/(distancia*distancia))*x2a3prev

   x1a3=distancia/hipotenusa
   y1a3=distancia/hipotenusa
   x1a3=constanteDeC*((carga_1*carga_3)/(hipotenusa*hipotenusa))*x1a3
   y1a3=constanteDeC*((carga_1*carga_3)/(hipotenusa*hipotenusa))*y1a3
   resultadox=x2a3+x1a3
   resultadoy=y1a3

   resultado=Math.sqrt((resultadox*resultadox)+(resultadoy*resultadoy))
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