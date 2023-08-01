let carga_1
let carga_2
let masa
let distancia
let distancia2
let distancia3
let longitud
let altura
let hipotenusa
let sectionResultado
let resultado_text
let resultado
let constanteDeC=9E9
let margenMenor
let margenMayor
let area
let a 
let b
let c
let tiempo

function iniciarCalculos() {  
    sectionResultado=document.getElementById('resultado-1-1-2')
    sectionResultado.style.display='none'
    cargasAleatorias()
}

function cargasAleatorias() {
    carga_1 = aleatorio(0, 999)/10;
    carga_2 = aleatorio(0, 999)*1E-5;
    masa= aleatorio(0, 300);
    distancia= -aleatorio(0,500)/100;
    distancia2= aleatorio(0,500)/100;
    distancia3= aleatorio(0,500)/10;
    let spanCarga1=document.getElementById('carga-1');
    let spanCarga2=document.getElementById('carga-2');
    let spanMasa=document.getElementById('masa');
    let spanDistancia=document.getElementById('distancia-1');
    let spanDistancia2=document.getElementById('distancia-2');
    let spanDistancia3=document.getElementById('distancia-3');
    spanCarga1.innerHTML=carga_1.toFixed(2);
    spanCarga2.innerHTML=carga_2.toExponential(2);
    spanMasa.innerHTML=masa.toFixed(0);
    spanDistancia.innerHTML=distancia.toFixed(2)
    spanDistancia2.innerHTML=distancia2.toFixed(2)
    spanDistancia3.innerHTML=distancia3.toFixed(2)
    operaciones()
}
function operaciones(){
    masa=masa/1000
   area=(carga_2*carga_1)/masa
   a=area
   distancia=Math.abs(distancia)
   b=Math.sqrt((distancia*distancia)+(distancia2*distancia2))
   c=distancia3/100
   tiempo=(-b + (Math.sqrt((b*b)-(4*a*c))))/(2*a)
   resultado=b+(a*tiempo)
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