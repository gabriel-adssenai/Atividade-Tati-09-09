
const contaBancaria = {
    titular: "Maria Oliveira",
    saldo: 1000,

   
    depositar: function(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depositado: R$ ${valor}. Novo saldo: R$ ${this.saldo}`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    },

 
    sacar: function(valor) {
        if (valor > 0) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                console.log(`Sacado: R$ ${valor}. Novo saldo: R$ ${this.saldo}`);
            } else {
                console.log("Saldo insuficiente para o saque.");
            }
        } else {
            console.log("O valor do saque deve ser positivo.");
        }
    }
};


const cliente = {
    nome: "Carlos Silva",
    conta: contaBancaria
};


function mostrarSaldo(cliente) {
    console.log(`Cliente: ${cliente.nome}`);
    console.log(`Saldo da conta: R$ ${cliente.conta.saldo}`);
}


cliente.conta.depositar(500);   
cliente.conta.sacar(200);       
cliente.conta.sacar(1500);      


mostrarSaldo(cliente);
