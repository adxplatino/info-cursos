function vmodal(e){
var video = ["/",
"https://player.vimeo.com/video/392892134?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392893056?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392898626?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392900221?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392901497?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392904146?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392905334?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392906674?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392907832?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392909060?title=0&byline=0&portrait=0&sidedock=0"];
  
var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "CURSO DE INGLES GRATIS</br>LECCIÓN " + [e];

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div class='iframe-container'><iframe id='modalVideo' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><center><div id='adsContenedor'></div></center></br>";

}
function cerrarmodal(){
  $("#modalVideo").attr('src', '');
}
