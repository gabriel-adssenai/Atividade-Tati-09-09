
const anoAtual = new Date().getFullYear();


const livro = {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1937,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1937 
};


console.log("Detalhes do livro antes da alteração:");
console.log("Título:", livro['titulo']);
console.log("Autor:", livro['autor']);
console.log("Ano de Publicação:", livro['anoPublicacao']);
console.log("Gênero:", livro['genero']);
console.log("Idade de Publicação:", livro['idadePublicacao'], "anos");


livro['genero'] = "Aventura";


console.log("\nDetalhes do livro após a alteração:");
console.log("Título:", livro['titulo']);
console.log("Autor:", livro['autor']);
console.log("Ano de Publicação:", livro['anoPublicacao']);
console.log("Gênero:", livro['genero']);
console.log("Idade de Publicação:", livro['idadePublicacao'], "anos");
