
const pessoa = {
    nome: "Carlos Silva",
    idade: 29,
    solteiro: true,
    hobbies: ["futebol", "leitura", "cinema"]
};


function mostrarInfoPessoa(pessoa) {
    console.log("Informações da Pessoa:");
    console.log("Nome:", pessoa.nome, "- Tipo:", typeof pessoa.nome);
    console.log("Idade:", pessoa.idade, "- Tipo:", typeof pessoa.idade);
    console.log("Solteiro:", pessoa.solteiro, "- Tipo:", typeof pessoa.solteiro);
    console.log("Hobbies:", pessoa.hobbies, "- Tipo:", typeof pessoa.hobbies);
    
    
    console.log("Hobbies Listados:");
    pessoa.hobbies.forEach(hobby => {
        console.log(" -", hobby);
    });
}


mostrarInfoPessoa(pessoa);
