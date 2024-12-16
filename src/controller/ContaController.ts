import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
    
    //Coleção Array que vai armazenar os objetos Conta
    private listaConta = new Array<Conta>();

    //Controlas os numeros das contas
    public numero: number = 0;


    procurarPorTitular(titular: string): void {
        //Filtragem dos dados
        let buscaPorTitular = this.listaConta.filter(conta => 
            conta.titular.toUpperCase().includes(titular.toUpperCase())
        );

        //Lista de dados
        buscaPorTitular.forEach( conta => conta.visualizar() );

    }

    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null) {
            console.log("\nConta encontrada: ");
            buscaConta.visualizar();
        } else {
            console.log("\nConta nao encontrada!")
        }

    }

    listarTodas(): void {
        for(let conta of this.listaConta) {
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaConta.push(conta);
        console.log("A conta foi cadastrada com sucesso!");
    }

    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !== null) {
            this.listaConta[this.listaConta.indexOf(buscaConta)] = conta;
            console.log("A conta foi atualizada com sucesso!");
        } else {
            console.log("\nConta nao encontrada!")
        }
    }

    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null) {
            this.listaConta.slice(this.listaConta.indexOf(buscaConta), 1);
            console.log("A conta foi deletada com sucesso!");
        } else {
            console.log("\nConta nao encontrada!")
        }
    }

    sacar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null) {
            if(buscaConta.sacar(valor) === true)
                console.log("O saque foi efetuado com sucesso!");
            
        } else {
            console.log("\nConta nao encontrada!")
        }
    }

    depositar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null) {
            buscaConta.depositar(valor);
            console.log("O deposito foi efetuado com sucesso!");
            
        } else {
            console.log("\nConta nao encontrada!")
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const ContaOrigem = this.buscarNoArray(numeroOrigem);
        const ContaDestino = this.buscarNoArray(numeroDestino);
        
        if(ContaOrigem !== null && ContaDestino !== null) {
            if(ContaOrigem.sacar(valor) === true) {
                ContaDestino.depositar(valor);
                console.log("A transferencia foi efetuada com sucesso!");
            }else{
                console.log("\nConta de origem e/ou de destino nao foi encontrada!");
            }

        }
    }

    //métodos auxiliares
    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for(let conta of this.listaConta){
            if(conta.numero === numero)
                return conta;
        }
        return null;
    }
    
}