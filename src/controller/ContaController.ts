import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    //Coleção Array que vai armazenar os objetos Conta
    private listaConta = new Array<Conta>();

    //Controlas os numeros das contas
    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null) {
            console.log("\nConta encontrada: ");
            buscaConta.visualizar();
        } else {
            console.log("\nConta não encontrada!")
        }

    }

    listarTodas(): void {
        for(let conta of this.listaConta) {
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaConta.push(conta);
        console.log("A conta foi cadastrada com sucesso!")
    }

    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }

    deletar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
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