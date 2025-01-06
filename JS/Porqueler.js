// Seleciona o botão e a lista de sugestões
const button = document.getElementById('toggle-button');
const sugestoes = document.getElementById('sugestoes');

// Adiciona um evento de clique no botão
button.addEventListener('click', () => {
  // Alterna a classe 'hidden' na lista de sugestões
  sugestoes.classList.toggle('hidden');

  // Altera o texto do botão dinamicamente
  if (sugestoes.classList.contains('hidden')) {
    button.textContent = 'Mostrar Sugestões';
    button.style.backgroundColor = '#0C1E33'; // Cor padrão
  } else {
    button.textContent = 'Ocultar Sugestões';
    button.style.backgroundColor = '#0C1E33'; // Cor quando visível
  }
});
