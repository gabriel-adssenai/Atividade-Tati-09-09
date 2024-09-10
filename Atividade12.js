


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




const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES",
    seguroSocial: "123-45-6789",
    cpf: "123.456.789-00"
};


function exibirInformacoesPessoa(pessoa) {
    const cpfParcial = pessoa.cpf.substring(0, 4); 
    const carteiraIdentidadeParcial = pessoa.carteiraIdentidade.substring(0, 4); 
    
    console.log("\nRelatório de Pessoa:");
    console.log("Nome:", pessoa.nome);
    console.log("Data de Nascimento:", pessoa.dataNascimento);
    console.log("CPF (4 primeiros dígitos):", cpfParcial);
    console.log("Carteira de Identidade (4 primeiros dígitos):", carteiraIdentidadeParcial);
    console.log("Email:", pessoa.email);
    console.log("Telefone:", pessoa.telefone);
    console.log("Cidade:", pessoa.cidade);
    console.log("Estado:", pessoa.estado);
    console.log("Seguro Social:", pessoa.seguroSocial);
}


exibirInformacoesPessoa(pessoa);
