function vmodal(e){
  
var leccion = ["/",              
"/p/contenido-curso-de-melamina-herramientas.html",
"/p/contenido-curso-de-melamina-planos.html",
"/p/contenido-curso-de-melamina-tecnicas.html",
"/p/contenido-curso-de-melamina-estrategia.html"];

function captcha(){

var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "https://www.google.com/recaptcha/api.js?hl=es";
document.getElementById('captchascript').appendChild(externalScript);
  
var inlineScript   = document.createElement("script");
inlineScript.type  = "text/javascript";  
document.getElementById('captchascript').appendChild(inlineScript); 
}

var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "Please check the captcha box to proceed to the destination page";

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div style='margin: 10px 0 10px 0;position: relative;'><div style='text-align: center;'><div class='g-recaptcha m-2' style='display: inline-block;' data-sitekey='6LcOpA0aAAAAAAFy1-uMmBz40geaohdAZBZvcNYs' data-callback='CaptchaChecked'></div></div></div> </br> <p style='text-align: center'>VER VIDEO LECCIÓN - ESTRATEGIA SECRETA - Curso Fabricar y Vender Muebles de Melamina Desde Casa.</p> <center><div id='adsContenedor'></div></center></br> <div style='text-align: center;'><a href="+leccion[e]+" class='btn btn-outline-primary btn-captcha m-2 disabled' id='enlacecaptcha' disabled='disabled'>Click here to continue</a></div></br><div id='captchascript'></div>";
captcha();
}
function CaptchaChecked() {
jQuery('#enlacecaptcha').removeClass('disabled').removeAttr('disabled');
}
