//carrossel de slides do topo da página
//carrossel com botões na direita e na esquerda
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//validar o email e telefone
//validar campos de preenchimento obrigatório
//mensagem de erro acima ou abaixo dos campos do formulário
//precisa de js pra segunda pág? não foi informado na atividade.
function validaNome(){
  var nome = document.getElementById('nome_formulario');

  var erro_nome_formulario = document.querySelector('.msg-nome');
  erro_nome_formulario.style.display = 'none';

  if (nome_formulario.value==""){
    erro_nome_formulario.innerHTML = "Nome é obrigatório";
    erro_nome_formulario.style.display = 'block';
    nome_formulario.focus();
    return false;
  } else {
    return true;
  }
}

function validaEmail(){

  var email = document.getElementById('email');

  var erro_email = document.querySelector('.msg-email');
  erro_email.style.display = 'none';

  if (email.value=="" || email.value.indexOf('@')== -1 || email.value.indexOf('.')== -1){
    erro_email.innerHTML = "Preencha corretamente seu email";
    erro_email.style.display = 'block';
    email.focus();
    return false;
  } else {
    return true;
  }
}


function validaTelefone(){
  var telefone = document.getElementById('telefone');

  var erro_telefone = document.querySelector('.msg-telefone');
  erro_telefone.style.display = 'none';

  if (telefone.value=="" || telefone.value.indexOf('9')== -1 || telefone.length<11){
    erro_telefone.innerHTML = "Telefone é obrigatório";
    erro_telefone.style.display = 'block';
    telefone.focus();
    return false;
  } else {
    return true;
  }
}

function validar_formulario(form){

 if (validaNome() == false){
   return false;
 } else if (validaEmail() == false) {
   return false;
 } else if (validaTelefone() == false){
    return false;
 } else {
   return true;
 }

}

