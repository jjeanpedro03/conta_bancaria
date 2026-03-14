import { Conta } from "../model/Conta";
import { colors } from "../util/Colors";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    public procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.visualizar();
        } else {
            console.log(
                colors.fg.red,
                "\nA Conta número: " + numero + " não foi encontrada!",
                colors.reset,
            );
        }
    }
    public listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    public cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        {
            console.log(
                colors.fg.green,
                "\nA COnta número: " +
                    conta.numero +
                    " foi criada com sucesso!",
                colors.reset,
            );
        }
    }
    public atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(
                colors.fg.green,
                "\nA Conta número: " +
                    conta.numero +
                    " foi atualizada com sucesso!",
                colors.reset,
            );
        } else {
            console.log(
                colors.fg.red,
                "\nA Conta número: " + conta.numero + " nao foi encontrada!",
                colors.reset,
            );
        }
    }
    public deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(
                colors.fg.green,
                "\nA Conta número: " + numero + " foi deletada com sucesso!",
                colors.reset,
            );
        } else {
            console.log(
                colors.fg.red,
                "\nA Conta número: " + numero + " nao foi encontrada!",
                colors.reset,
            );
        }
    }
    public sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta !== null) {
            if (conta.sacar(valor) === true) {
                console.log(
                    colors.fg.green,
                    "\nO Saque na Conta numero: " +
                        numero +
                        " foi efetuado com sucesso!",
                    colors.reset,
                );
            } else {
                // Caso tenha conta, mas não tenha saldo
                console.log(
                    colors.fg.red,
                    "\nSaldo Insuficiente!",
                    colors.reset,
                );
            }
        } else {
            // ESSA LINHA resolve o seu problema da conta 10:
            console.log(
                colors.fg.red,
                "\nA Conta numero: " + numero + " não foi encontrada!",
                colors.reset,
            );
        }
    }
    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta !== null) {
            conta.depositar(valor);
            console.log(
                colors.fg.green,
                "\nO Deposito na Conta numero: " +
                    numero +
                    " foi efetuado com sucesso!",
                colors.reset,
            );
        } else {
            console.log(
                colors.fg.red,
                "\nA Conta numero: " + numero + " nao foi encontrada!",
                colors.reset,
            );
        }
    }
    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let ContaOrigem = this.buscarNoArray(numeroOrigem);
        let ContaDestino = this.buscarNoArray(numeroDestino);

        if (ContaOrigem !== null && ContaDestino !== null) {
            if (ContaOrigem.sacar(valor) == true) {
                ContaDestino.depositar(valor);
                console.log(
                    colors.fg.green,
                    "\nA Transferência da Conta numero: " +
                        numeroOrigem +
                        " para a Conta numero: " +
                        numeroDestino +
                        " foi efetuada com sucesso!",
                    colors.reset,
                );
            }
        } else {
            console.log(
                colors.fg.red,
                "\nA Conta numero: " +
                    numeroOrigem +
                    " e/ou aConta numero: " +
                    numeroDestino +
                    " nao foi encontrada!",
            );
        };
    };

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }
}
