
const anoAtual = new Date().getFullYear();


const livro = {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1937,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1937 
};


livro.avaliacao = null;


console.log("Detalhes do livro:");
console.log("Título:", livro['titulo']);
console.log("Autor:", livro['autor']);
console.log("Ano de Publicação:", livro['anoPublicacao']);
console.log("Gênero:", livro['genero']);
console.log("Idade de Publicação:", livro['idadePublicacao'], "anos");
console.log("Avaliação:", livro['avaliacao']); 


if (livro['avaliacao'] === null) {
    livro['avaliacao'] = 4.5; 
    console.log("Nova avaliação atribuída:", livro['avaliacao']);
} else {
    console.log("O livro já possui uma avaliação.");
}
