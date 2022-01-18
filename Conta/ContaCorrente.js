import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0
    constructor(cliente, agencia){
        super(0, cliente, agencia)     //Referência para a classe Conta
        ContaCorrente.numeroDeContas +=1
    }

    //Sobrescrevendo o comportamento sacar da classe Conta
    sacar(valor){
        let taxa = 1.1
        return this._sacar(valor, taxa)  //Posso usar o this por ser extensão da classe Conta
    }
}
