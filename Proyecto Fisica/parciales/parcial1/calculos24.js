let carga_1
let distancia
let distancia2
let longitud
let altura
let hipotenusa
let sectionResultado
let resultado_text
let resultado
let constanteDeC=9E9
let margenMenor
let margenMayor
let campo
let fuerza
let i
let j

function iniciarCalculos() {  
    sectionResultado=document.getElementById('resultado-1-1-2')
    sectionResultado.style.display='none'
    cargasAleatorias()
}

function cargasAleatorias() {
    carga_1 = -aleatorio(0, 999) * 1E-11;
    distancia= aleatorio(0,300)/100;
    distancia2= distancia/2
    let spanCarga1=document.getElementById('carga-1');
    let spanDistancia=document.getElementById('distancia-1');
    spanCarga1.innerHTML=carga_1.toExponential(2);
    spanDistancia.innerHTML=distancia.toFixed(2)
    operaciones()
}
function operaciones(){
   longitud=Math.sqrt((distancia*distancia)-(distancia2*distancia2))
   j=longitud/distancia
   campo=constanteDeC*(carga_1/(distancia*distancia))
   j=campo*j
   j=j*2
   j=Math.abs(j)
   resultado=Math.sqrt((j*j))
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