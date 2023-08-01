let sectionPaginaInicial
let sectionPaginaParciales
let sectionParciales

function iniciarPagina(){
    let botonInicio = document.getElementById('boton-inicia')
    botonInicio.addEventListener('click',seleccionarParcial)

    sectionPaginaParciales=document.getElementById('seleccionar-parcial')
    sectionPaginaParciales.style.display='none'

    sectionParciales=document.getElementById('parciales')
    sectionParciales.style.display='none'
}

function seleccionarParcial(){
    sectionPaginaInicial=document.getElementById('pagina-principal')
    sectionPaginaInicial.style.display='none'
    sectionPaginaParciales.style.display='flex'
    sectionParciales.style.display='flex'
}
window.addEventListener('load', iniciarPagina)

