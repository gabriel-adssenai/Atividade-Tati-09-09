
const estudante = {
    nome: "Ana Paula Silva",
    matricula: 123456,
    curso: "Engenharia de Software",
    materias: [
        "Matemática Discreta",
        "Algoritmos e Estruturas de Dados",
        "Banco de Dados",
        "Redes de Computadores"
    ]
};


console.log("Detalhes do Estudante:");
console.log("Nome:", estudante.nome);
console.log("Matrícula:", estudante.matricula);
console.log("Curso:", estudante.curso);
console.log("Matérias:");
estudante.materias.forEach(materia => console.log(" -", materia));
