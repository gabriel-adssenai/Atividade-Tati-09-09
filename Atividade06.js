
const anoAtual = new Date().getFullYear();


const livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    anoPublicacao: 1943,
    genero: "Ficção",
};


livro.idadePublicacao = anoAtual - livro.anoPublicacao;


const mostrarDetalhes = `Título: ${livro.titulo}\n` +
                        `Autor: ${livro.autor}\n` +
                        `Ano de Publicação: ${livro.anoPublicacao}\n` +
                        `Gênero: ${livro.genero}\n` +
                        `Idade de Publicação: ${livro.idadePublicacao} anos`;


console.log(mostrarDetalhes);
