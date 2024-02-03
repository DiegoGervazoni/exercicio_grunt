document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const valorUm = document.getElementById("valorUm");
  const valorDois = document.getElementById("valorDois");

  function validarFormulario(valorUm, valorDois) {
    return Number(valorDois) > Number(valorUm);
  }

  function limparFormulario() {
    valorUm.value = "";
    valorDois.value = "";
  }

  const mensagens = {
    sucesso: (valorUm, valorDois) =>
      `Valor Aceito! O valor ${valorDois} é maior que o valor ${valorUm}`,
    igual: (valorUm, valorDois) =>
      `Não aceito. O Valor ${valorDois} é igual ao valor ${valorUm}`,
    maior: (valorUm, valorDois) =>
      `Não aceito. Valor ${valorUm} é maior que o valor ${valorDois}`,
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let mensagem;

    if (validarFormulario(valorUm.value, valorDois.value)) {
      mensagem = mensagens.sucesso(valorUm.value, valorDois.value);
    } else if (valorUm.value === valorDois.value) {
      mensagem = mensagens.igual(valorUm.value, valorDois.value);
    } else {
      mensagem = mensagens.maior(valorUm.value, valorDois.value);
    }

    alert(mensagem);
    limparFormulario();
  });

  console.log(form);
});
