import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

let contas: ContaController = new ContaController();

let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
let titular: string;
const tiposContas = ['Conta Corrente', 'Conta Poupanca'];

    console.log("\nCriar Contas de Teste\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();

    while (true) {
        const amarelo = colors.bg.black + colors.fg.yellow;
        const reset = colors.reset;

        console.log(amarelo + "*****************************************************" + reset);
        console.log(amarelo + "                                                     " + reset);
        console.log(amarelo + "                BANCO DO BRAZIL COM Z                " + reset);
        console.log(amarelo + "                                                     " + reset);
        console.log(amarelo + "*****************************************************" + reset);
        console.log(amarelo + "                                                     " + reset);
        console.log(amarelo + "            1 - Criar Conta                          " + reset);
        console.log(amarelo + "            2 - Listar todas as Contas               " + reset);
        console.log(amarelo + "            3 - Buscar Conta por Numero              " + reset);
        console.log(amarelo + "            4 - Atualizar Dados da Conta             " + reset);
        console.log(amarelo + "            5 - Apagar Conta                         " + reset);
        console.log(amarelo + "            6 - Sacar                                " + reset);
        console.log(amarelo + "            7 - Depositar                            " + reset);
        console.log(amarelo + "            8 - Transferir valores entre Contas      " + reset);
        console.log(amarelo + "            9 - Sair                                 " + reset);
        console.log(amarelo + "                                                     " + reset);
        console.log(amarelo + "*****************************************************" + reset);

        console.log("\nEntre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(
                colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!",
            );
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(
                    colors.fg.whitestrong +
                        "\n\nCriar Conta\n\n" +
                        colors.reset,
                );

                console.log("Digite o Número da agência: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o Nome do Titular da conta: ");
                titular = readlinesync.question("");

                console.log("\nDigite o tipo da conta: ");
                tipo =
                    readlinesync.keyInSelect(tiposContas, "", {
                        cancel: false,
                    }) + 1;

                console.log("\nDigite o Saldo da conta (R$): ");
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta (R$): ");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(
                                contas.gerarNumero(),
                                agencia,
                                tipo,
                                titular,
                                saldo,
                                limite,
                            ),
                        );
                        break;

                    case 2:
                        console.log(
                            "Digite o Dia do aniversário da Conta Poupança: ",
                        );
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(
                            new ContaPoupanca(
                                contas.gerarNumero(),
                                agencia,
                                tipo,
                                titular,
                                saldo,
                                aniversario,
                            ),
                        );
                        break;
                }

                keyPress();
                break;
            case 2:
                console.log(
                    colors.fg.whitestrong +
                        "\n\nListar todas as Contas\n\n" +
                        colors.reset,
                );

                contas.listarTodas();

                keyPress();
                break;
            case 3:
                console.log(
                    colors.fg.whitestrong,
                    "\nConsultar dados da Conta - por número\n",
                    colors.reset,
                );
                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);

                keyPress();
                break;
            case 4:
                console.log(
                    colors.fg.whitestrong +
                        "\n\nAtualizar dados da Conta\n\n" +
                        colors.reset,
                );

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta !== null) {
                    console.log("Digite o Número da agência: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o Nome do Titular da conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("\nDigite o Saldo da conta (R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da Conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(
                                    conta.numero,
                                    agencia,
                                    tipo,
                                    titular,
                                    saldo,
                                    limite,
                                ),
                            );
                            break;

                        case 2:
                            console.log(
                                "Digite o Dia do aniversário da Conta Poupança: ",
                            );
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(
                                new ContaPoupanca(
                                    conta.numero,
                                    agencia,
                                    tipo,
                                    titular,
                                    saldo,
                                    aniversario,
                                ),
                            );
                            break;
                    }
                } else {
                    console.log(
                        colors.fg.redstrong,
                        "\nA Conta número: " + numero + " nao foi encontrada!",
                        colors.reset,
                    );
                }
                keyPress();
                break;
            case 5:
                console.log(
                    colors.fg.whitestrong +
                        "\n\nApagar a Conta\n\n" +
                        colors.reset,
                );

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);

                keyPress();
                break;

            case 6:
                console.log(
                    colors.fg.whitestrong + "\n\nSaque\n\n" + colors.reset,
                );

                console.log("Digite o Numero da conta: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o Valor do Saque (R$): ");
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);

                keyPress();
                break;

            case 7:
                console.log(
                    colors.fg.whitestrong + "\n\nDepósito\n\n" + colors.reset,
                );

                console.log("Digite o Numero da conta: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o Valor do Depósito (R$): ");
                valor = readlinesync.questionFloat("");

                contas.depositar(numero, valor);

                keyPress();
                break;
            case 8:
                console.log(
                    colors.fg.whitestrong +
                        "\n\nTransferência entre Contas\n\n" +
                        colors.reset,
                );

                console.log("Digite o Numero da Conta Origem: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o Numero da Conta de Destino: ");
                numeroDestino = readlinesync.questionInt("");

                console.log("Digite o Valor do  Depósito (R$): ");
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);
                
                keyPress();
                break;
            default:
                console.log(
                    colors.fg.redstrong + "\nOpção Inválida!\n" + colors.reset,
                );
                keyPress();
                break;
        }
    }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Jean Pedro - jjeanpedro20@gmail.com");
    console.log("https://github.com/jjeanpedro03");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
