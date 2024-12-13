import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente"
import { ContaPoupanca } from "./src/model/ContaPoupanca"

export function main() {

    let opcao: number;

    //Contas Correntes
    const cc1 = new ContaCorrente(3, 789, 1, "Andressa", 100000, 1000)
    cc1.visualizar();
    //saque conta corrente
    cc1.sacar(100500)
    cc1.visualizar()
    //depósito conta corrente
    cc1.depositar(2000)
    cc1.visualizar()

    console.log('')

    //Conta Poupança
    const cp1 = new ContaPoupanca(3, 789, 2, "Josiane", 10000, 23)
    cp1.visualizar();

    cp1.sacar(2300);
    cp1.visualizar();

    cp1.depositar(2000)
    cp1.visualizar()

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

                break;
            case 2:
                console.log(colors.fg.magentastrong,"\nLista de contas cadastradas\n", colors.reset);

                break;

            case 3:
                console.log(colors.fg.magentastrong,"\nConsultar dados da Conta\n", colors.reset);

                break;

            case 4:
                console.log(colors.fg.magentastrong,"\nAtualizar dados da Conta\n", colors.reset);

                break;

            case 5:
                console.log(colors.fg.magentastrong,"\nApagar uma Conta\n", colors.reset);

                break;

            case 6:
                console.log(colors.fg.magentastrong,"\nSaque\n", colors.reset);

                break;

            case 7:
                console.log(colors.fg.magentastrong,"\nDeposito\n", colors.reset);

                break;

            case 8:
                console.log(colors.fg.magentastrong,"\nTransferencia\n", colors.reset);

                break;

            case 0:
                sobre();
                continuar = false;
                break;

            default:
                console.log(colors.fg.magentastrong,"\nOpcao Invalida!\n", colors.reset);

                break;
        }
    }
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