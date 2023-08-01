let carga_1
let carga_2
let distancia
let altura
let hipotenusa
let sectionResultado
let resultado_text
let resultado
let constanteDeC=9E9
let margenMenor
let margenMayor
let x1a4
let y1a4
let fuerza

function iniciarCalculos() {  
    sectionResultado=document.getElementById('resultado-1-1-2')
    sectionResultado.style.display='none'
    cargasAleatorias()
}

function cargasAleatorias() {
    carga_1 = -aleatorio(0, 999) * 1E-8;
    carga_2 = aleatorio(0, 999) * 1E-5;
    distancia= aleatorio(0,500)/100;
    altura=distancia/2;
    hipotenusa=Math.sqrt((altura*altura)+(distancia*distancia));
    let spanCarga1=document.getElementById('carga-1')
    let spanCarga2=document.getElementById('carga-2')
    let spanDistancia=document.getElementById('distancia')
    spanCarga1.innerHTML=carga_1.toExponential(2);
    spanCarga2.innerHTML=carga_2.toExponential(2);
    spanDistancia.innerHTML=distancia.toFixed(2)
    operaciones()
}
function operaciones(){
 
    
    x1a4=distancia/hipotenusa;
    y1a4=altura/hipotenusa;
    x1a4=constanteDeC*((carga_1*carga_2)/(hipotenusa*hipotenusa))*x1a4;
    y1a4=constanteDeC*((carga_1*carga_2)/(hipotenusa*hipotenusa))*y1a4;
    x1a4=x1a4*2;
    y1a4=y1a4-y1a4;
    fuerza=Math.sqrt(Math.abs(x1a4));

   resultado=((fuerza*(distancia*distancia))/(constanteDeC*carga_2))
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