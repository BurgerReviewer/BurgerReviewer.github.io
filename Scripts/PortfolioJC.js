function mostrarSeccion(seccionId) {
  var secciones = document.getElementsByClassName('Seccion');
  for (var i = 0; i < secciones.length; i++) {
    secciones[i].style.display = 'none';
  }
  document.getElementById(seccionId).style.display = 'block';
}

window.onload = function() {
    mostrarSeccion('SobreMi');
}

window.addEventListener('scroll', function(){
  var barra = document.getElementById('secciones');
  var TopRelativo = barra.getBoundingClientRect().top;

  if (TopRelativo <= 0) {
    barra.classList.add('scrolled');
  }
  else{
    barra.classList.remove('scrolled');
  }
});

var boton = document.getElementById('Modo');
var cuerpo = document.querySelector('body');
var titulo = document.querySelector('h1');
var subtitulo = document.querySelector('p');
var seccion = document.getElementById('secciones');
var fuentes = document.getElementsByClassName('Diseno_fuentes');
var cabecera = document.getElementsByClassName('Cabecera_color');
var portada = document.getElementsByClassName('Portada_contenedor_imagen_color');
var hover = document.getElementsByClassName('Color_de_fondo_secciones');
var secundario = document.getElementsByClassName('Color_de_fondo_secundario');
var textoPor = document.getElementsByClassName('Portada_contenedor_texto_color');
var correo = document.getElementsByClassName('Correo_imagen');
var insta = document.getElementsByClassName('IG_imagen');
var youtube = document.getElementsByClassName('YT_imagen');
var descarga =document.getElementsByClassName('Enlace_de_descarga');
var descarga2 =document.getElementsByClassName('Diseno_descarga');

boton.onclick = function(){
  boton.classList.toggle('active');
  cuerpo.classList.toggle('active');
  titulo.classList.toggle('active');
  subtitulo.classList.toggle('active');
  seccion.classList.toggle('active');
  
  for (var i = 0; i < fuentes.length; i++) {
    fuentes[i].classList.toggle('active');
  }
  for (var i = 0; i < cabecera.length; i++) {
    cabecera[i].classList.toggle('active');
  }
  for (var i = 0; i < portada.length; i++) {
    portada[i].classList.toggle('active');
  }
  for (var i = 0; i < hover.length; i++) {
    hover[i].classList.toggle('active');
  }
  for (var i = 0; i < secundario.length; i++) {
    secundario[i].classList.toggle('active');
  }
  for (var i = 0; i < textoPor.length; i++) {
    textoPor[i].classList.toggle('active');
  }
  for (var i = 0; i < correo.length; i++) {
    if (correo[i].src.includes('Imagenes/GmailColor.png')) {
      correo[i].setAttribute('src', 'Imagenes/Gmail2.png');
    }
    else{
      correo[i].setAttribute('src', 'Imagenes/GmailColor.png');
    }
  }
  for (var i = 0; i < insta.length; i++) {
    if (insta[i].src.includes('Imagenes/InstaColor.png')) {
      insta[i].setAttribute('src', 'Imagenes/Insta.png');
    }
    else{
      insta[i].setAttribute('src', 'Imagenes/InstaColor.png');
    }
  }
  for (var i = 0; i < youtube.length; i++) {
    if (youtube[i].src.includes('Imagenes/YoutubeColor.png')) {
      youtube[i].setAttribute('src', 'Imagenes/Youtube.png');
    }
    else{
      youtube[i].setAttribute('src', 'Imagenes/YoutubeColor.png');
    }
  }
  for (var i = 0; i < descarga.length; i++) {
    descarga[i].classList.toggle('active');
  }
  for (var i = 0; i < descarga2.length; i++) {
    descarga2[i].classList.toggle('active');
  }
}
