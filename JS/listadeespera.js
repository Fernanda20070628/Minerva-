//SORTEIO
//Cria a função de sortear livros
function sortearLivros() {
    //cria um vetor que contém todos os livros sorteados
    const sorteados = [];
    //cria a variável de total de livros
    const totalLivros = 18;
    //cria uma variável que contém todos os livros, criando uma coleção HTML
    const livros = document.querySelectorAll('.livro');

    //entra em cada div com livro e retira a classe active, para evitar lixo de memória e garantir que nenhum livro ficará sendo mostrado sem ser sorteado
    livros.forEach(livro => livro.classList.remove('active'));

    //cria um loop para sortear os 6 livros, que funciona de um jeito que até continuará enquanto o vetor não tiver as 6 psoições de livros preenchidas
    while (sorteados.length < 6) {
        //sorteia um número
        const sorteio = Math.floor(Math.random() * totalLivros);

        //verifica se o número sorteado não foi sorteado ainda
        if (!sorteados.includes(sorteio)) {
            //coloca o número sorteado dentro do array
            sorteados.push(sorteio);
            //pega o número sorteado e puxa o div correspondente
            const livro = document.getElementById(sorteio);
            //adiciona a classe active para a div 
            livro.classList.add('active');
        }
    }
}
//carrega a função toda vez que o site é carregado
sortearLivros();
