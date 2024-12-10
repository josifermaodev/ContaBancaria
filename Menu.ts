import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    let continuar = true;

    while (continuar){
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
        console.log("                                                     ");

        console.log("Digite a operacao desejada: ");
        opcao = readlinesync.questionInt();

        switch (opcao) {
            case 1:
                console.log("\nCriar uma Conta\n");

                break;
            case 2:
                console.log("\nLista de contas cadastradas\n");

                break;

            case 3:
                console.log("\nConsultar dados da Conta\n");

                break;

            case 4:
                console.log("\nAtualizar dados da Conta\n");

                break;

            case 5:
                console.log("\nApagar uma Conta\n");

                break;

            case 6:
                console.log("\nSaque\n");

                break;

            case 7:
                console.log("\nDeposito\n");

                break;

            case 8:
                console.log("\nTransferencia\n");

                break;

            case 0:
                console.log("\nNewBank & Associados - O seu Futuro começa aqui!");
                sobre();
                continuar = false;
                break;

            default:
                console.log("\nOpcao Invalida!\n");

                break;
        }
    }
}

export function sobre(): void {
    console.log("\n===================================================");
    console.log("Projeto Desenvolvido por: ");
    console.log("Josiane Fermao - josianef@generation.org");
    console.log("github.com/josifermaodev");
    console.log("====================================================");
}

main();