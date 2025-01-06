//botão e sugestão 
const button = document.getElementById('toggle-button');
const sugestoes = document.getElementById('sugestoes');

// click click no botão 
button.addEventListener('click', () => {
  // alterna o hidden da classe 
  sugestoes.classList.toggle('hidden');

  // muda texto 
  if (sugestoes.classList.contains('hidden')) {
    button.textContent = 'Mostrar Sugestões';
    button.style.backgroundColor = '#0C1E33'; // Cor padrão
  } else {
    button.textContent = 'Ocultar Sugestões';
    button.style.backgroundColor = '#0C1E33'; // Cor quando visível
  }
});
