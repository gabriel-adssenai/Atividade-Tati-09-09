
const calculadora = {
    
    soma: function(a, b) {
        return a + b;
    },
    
    
    subtracao: function(a, b) {
        return a - b;
    },
    
    
    multiplicacao: function(a, b) {
        return a * b;
    },
    
   
    divisao: function(a, b) {
        if (b === 0) {
            return "Erro: Divisão por zero";
        }
        return a / b;
    },
    
   
    calcularMedia: function(array) {
        if (array.length === 0) return "Array vazio";
        const somaTotal = array.reduce((acc, val) => acc + val, 0);
        return somaTotal / array.length;
    }
};


console.log("Soma de 10 e 5:", calculadora.soma(10, 5));
console.log("Subtração de 10 e 5:", calculadora.subtracao(10, 5));
console.log("Multiplicação de 10 e 5:", calculadora.multiplicacao(10, 5));
console.log("Divisão de 10 por 5:", calculadora.divisao(10, 5));
console.log("Divisão de 10 por 0:", calculadora.divisao(10, 0));


const numeros = [10, 20, 30, 40, 50];
console.log("Média dos números [10, 20, 30, 40, 50]:", calculadora.calcularMedia(numeros));
