import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0
    agencia;
    _cliente;

    set cliente(novoValor){          //Assessor
        if(novoValor instanceof Cliente){
            this._cliente = novoValor          //Bloqueio para que a variável cliente seja informada no index
        }
    }

    get cliente(){          //Assessor
        return this._cliente
    }

    // #saldo = 0
    _saldo = 0;

    get saldo(){
        return this._saldo
    }

    constructor(agencia, cliente){
        this.agencia = agencia
        this.cliente = cliente
        ContaCorrente.numeroDeContas +=1
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -=valor
            return valor
        }
    }

    depositar(valor){
        if(valor <= 0){
            return  // early return
        }
        this._saldo += valor
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}
