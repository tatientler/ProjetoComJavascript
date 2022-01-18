import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js"
import { ContaSalario } from "./Conta/ContaSalario.js"

const cliente1 = new Cliente("Ricardo", 11122233300)

const cliente2 = new Cliente("Alice", 22233344400)

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001)
contaCorrenteRicardo.depositar(500)
const valorSacado = contaCorrenteRicardo.sacar(50)

/*
contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(100)

const valorSacado = contaCorrenteRicardo.sacar(50)

contaCorrenteRicardo.transferir(200, conta2)

const conta2 = new ContaCorrente(102, cliente2)

console.log(contaCorrenteRicardo)
console.log(conta2)

console.log(conta2.saldo)
console.log(contaCorrenteRicardo.cliente)
console.log(ContaCorrente.numeroDeContas)
*/

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
contaPoupanca.sacar(10)

console.log(contaPoupanca)
console.log(contaCorrenteRicardo)

/* Teste de erro criado
const conta = new Conta(0, cliente1, 1001) 
console.log(conta)  
*/

const contaSalario = new ContaSalario(cliente1)
contaSalario.depositar(200)
contaSalario.sacar(20)
console.log(contaSalario)