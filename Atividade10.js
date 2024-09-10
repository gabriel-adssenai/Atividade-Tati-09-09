
const anoAtual = new Date().getFullYear();


const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954, 
    avaliacao: 4.5 
};


console.log("Detalhes do livro antes da exclusão da avaliação:");
console.log("Título:", livro['titulo']);
console.log("Autor:", livro['autor']);
console.log("Ano de Publicação:", livro['anoPublicacao']);
console.log("Gênero:", livro['genero']);
console.log("Idade de Publicação:", livro['idadePublicacao'], "anos");
console.log("Avaliação:", livro['avaliacao']); 


delete livro['avaliacao'];


console.log("\nDetalhes do livro após a exclusão da avaliação:");
console.log("Título:", livro['titulo']);
console.log("Autor:", livro['autor']);
console.log("Ano de Publicação:", livro['anoPublicacao']);
console.log("Gênero:", livro['genero']);
console.log("Idade de Publicação:", livro['idadePublicacao'], "anos");
console.log("Avaliação:", livro['avaliacao']); 
