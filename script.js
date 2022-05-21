//validar o email 
//validar campos de preenchimento obrigatório
//mensagem de erro acima dos campos do formulário
//carrossel com botões na direita e na esquerda
//precisa de js pra segunda pág? não foi informado na atividade.

function validar_formulario(form){

  var invalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  
  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  var telefone = document.getElementById('telefone');

  var erro_nome = document.querySelector('.msg-nome');
  erro_nome.style.display = 'none';

  var erro_email = document.querySelector('.msg-email');
  erro_email.style.display = 'none';

  var erro_telefone = document.querySelector('.msg-telefone');
  erro_telefone.style.display = 'none';

  if (nome_formulario.value==""){
    erro_nome_formulario.innerHTML = "Nome é obrigatório";
    erro_nome_formulario.style.display = 'block';
    nome_formulario.focus();
    return false;
  }

  if (email.value==""){
    erro_email.innerHTML = "Email é obrigatório";
    erro_email.style.display = 'block';
    email.focus();
    return false;
  }

  if (invalid.test(email.value==false)){
    erro_email.innerHTML = "Email informado incorreto";
    erro_email.style.display = 'block';
    email.focus();
    return false;
  }

  if (telefone.value==""){
    erro_telefone.innerHTML = "Telefone é obrigatório";
    erro_telefone.style.display = 'block';
    telefone.focus();
    return false;
  }

  //if (invalidTelefone.test(telefone.value==false)){
   // erro_telefone.innerHTML = "Telefone informado incorreto";
   // erro_telefone.style.display = 'block';
   // telefone.focus();
   // return false;
 // }

  return false;
}




