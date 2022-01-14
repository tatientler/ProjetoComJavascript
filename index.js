import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233300)

const cliente2 = new Cliente("Alice", 22233344400)

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1)

contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(100)

const valorSacado = contaCorrenteRicardo.sacar(50)

const conta2 = new ContaCorrente(102, cliente2)

contaCorrenteRicardo.transferir(200, conta2)

console.log(contaCorrenteRicardo)
console.log(conta2)

console.log(conta2.saldo)
console.log(contaCorrenteRicardo.cliente)
console.log(ContaCorrente.numeroDeContas)
