
const pessoas = [
    {
        nome: "Ana Paula Silva",
        idade: 25,
        cidade: "São Paulo"
    },
    {
        nome: "João Pedro Santos",
        idade: 30,
        cidade: "Rio de Janeiro"
    },
    {
        nome: "Mariana Oliveira",
        idade: 22,
        cidade: "Belo Horizonte"
    },
    {
        nome: "Lucas Pereira",
        idade: 28,
        cidade: "Porto Alegre"
    },
    {
        nome: "Carla Almeida",
        idade: 35,
        cidade: "Curitiba"
    }
];


console.log("Lista de Pessoas:");
pessoas.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
});
