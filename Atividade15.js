
const pessoa = {
    nome: "Carlos Silva",
    idade: 29,
    solteiro: true,
    hobbies: ["futebol", "leitura", "cinema"],
    endereco: {
        rua: "Avenida das Américas",
        cidade: "Rio de Janeiro",
        estado: "RJ"
    }
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
    
   
    console.log("Endereço:");
    console.log("Rua:", pessoa.endereco.rua, "- Tipo:", typeof pessoa.endereco.rua);
    console.log("Cidade:", pessoa.endereco.cidade, "- Tipo:", typeof pessoa.endereco.cidade);
    console.log("Estado:", pessoa.endereco.estado, "- Tipo:", typeof pessoa.endereco.estado);
}


mostrarInfoPessoa(pessoa);
