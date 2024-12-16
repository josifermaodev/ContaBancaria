import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente"
import { ContaPoupanca } from "./src/model/ContaPoupanca"
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    //Criando um objeto da classe ContaController
    const contas = new ContaController();


    //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));
 
    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));

    let continuar = true;
    while (continuar){
        console.log(colors.bg.black, colors.fg.magenta)
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("                NewBank & Associados                 ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Lista de contas cadastradas          ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log(colors.reset);

        console.log("Digite a operacao desejada: ");
        opcao = readlinesync.questionInt();

        switch (opcao){
            case 1:
                console.log(colors.fg.magentastrong,"\nCriar uma Conta\n", colors.reset);
                
                console.log("Digite o numero da Agência: ")
                agencia = readlinesync.questionInt('');

                console.log("Digite o nome do Titular: ")
                titular = readlinesync.question('');

                console.log("Escolha o tipo da Conta: ")
                tipo = readlinesync.keyInSelect(tipoContas, "", {cancel:false}) + 1;

                console.log("Digite o Saldo da Conta: ")
                saldo = readlinesync.questionFloat('');

                switch (tipo){
                    case 1:
                        console.log("Digite o Limite da Conta Corrente: ")
                        limite = readlinesync.questionFloat('');
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                    break;
                        
                    case 2:
                        console.log("Digite o dia de Aniversario da Poupanca: ")
                        aniversario = readlinesync.questionInt('');
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                    break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.magentastrong,"\nLista de contas cadastradas: ", colors.reset);
                
                contas.listarTodas();

                keyPress()
                break;

            case 3:
                console.log(colors.fg.magentastrong,"\nConsultar dados da Conta - Por numero\n", colors.reset);

                console.log("Digite o numero da Conta: ")
                numero = readlinesync.questionInt('')

                contas.procurarPorNumero(numero);

                keyPress()
                break;

            case 4:
                console.log(colors.fg.magentastrong,"\nAtualizar dados da Conta\n", colors.reset);

                console.log("Digite o numero da Conta: ")
                numero = readlinesync.questionInt('')

                let conta = contas.buscarNoArray(numero);

                if (conta !== null){
                    console.log("Digite o novo numero da Agência: ")
                    agencia = readlinesync.questionInt('');

                    console.log("Digite o novo nome do Titular: ")
                    titular = readlinesync.question('');


                    console.log("Digite o novo Saldo da Conta: ")
                    saldo = readlinesync.questionFloat('');

                    tipo = conta.tipo;

                    switch (tipo){
                        case 1:
                            console.log("Digite o novo Limite da Conta Corrente: ")
                            limite = readlinesync.questionFloat('');
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                        break;
                            
                        case 2:
                            console.log("Digite o novo dia de Aniversario da Poupanca: ")
                            aniversario = readlinesync.questionInt('');
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                        break;
                    }
                }else{
                    console.log("Conta nao encontrada!")
                }

                

                keyPress()
                break;

            case 5:
                console.log(colors.fg.magentastrong,"\nApagar uma Conta\n", colors.reset);

                console.log("Digite o numero da Conta: ");
                numero = readlinesync.questionInt('');

                contas.deletar(numero);

                keyPress()
                break;

            case 6:
                console.log(colors.fg.magentastrong,"\nSaque\n", colors.reset);

                keyPress()
                break;

            case 7:
                console.log(colors.fg.magentastrong,"\nDeposito\n", colors.reset);

                keyPress()
                break;

            case 8:
                console.log(colors.fg.magentastrong,"\nTransferencia\n", colors.reset);

                keyPress()
                break;

            case 0:
                sobre();
                continuar = false;

                break;

            default:
                console.log(colors.fg.magentastrong,"\nOpcao Invalida!\n", colors.reset);

                keyPress()
                break;
        }
    }
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

export function sobre(): void {
    console.log(colors.bg.black, colors.fg.magenta)
    console.log("\n       NewBank & Associados - O seu Futuro começa aqui!");
    console.log("\n     ===================================================");
    console.log("           Projeto Desenvolvido por: ");
    console.log("           Josiane Fermao - josianef@generation.org");
    console.log("           github.com/josifermaodev");
    console.log("     ====================================================");
    console.log(colors.reset);
}

main();