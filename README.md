<h1 align="center">🏦 Banco do Brazil com Z — Sistema Bancário CLI com TypeScript</h1>

<p align="center">
Simulador de operações bancárias via linha de comando (CLI), desenvolvido com foco em lógica robusta, tipagem estrita e uma interface de terminal personalizada e intuitiva.
</p>

<p align="center">
Este projeto foi totalmente desenvolvido por mim, <strong>Jean Pedro</strong>.
</p>

<p align="center">
<img src="./img/apresentacao-banco.gif" alt="Demonstração Banco do Brazil" width="700px" style="border-radius: 10px; border: 2px solid #F7DF1E;">
</p>

## 🎯 Objetivo
Este projeto foi desenvolvido para **praticar Programação Orientada a Objetos (POO)** e manipulação de dados em **TypeScript**, simulando operações essenciais de um sistema bancário real dentro de um terminal CLI.

---

## 🚀 Sobre o Projeto
O **Banco do Brazil com Z** permite **gerenciar contas bancárias completas** com operações financeiras simuladas:

- **Saque**: Retirada de valores com validação de saldo.  
- **Depósito**: Adição de fundos à conta.  
- **Transferência**: Movimentação de valores entre contas cadastradas.  

O sistema utiliza **readline-sync** para capturar entradas do usuário e **cores ANSI** para criar uma interface colorida e intuitiva, melhorando a experiência do usuário (UX) no terminal.

---

## 🛠️ Tecnologias e Ferramentas

<p align="left">
<img src="https://skillicons.dev/icons?i=ts,nodejs,git,vscode" height="40px" />
</p>

- **TypeScript**: Tipagem estrita (`strict: true`) e configuração `noUncheckedIndexedAccess`.  
- **Node.js**: Ambiente de execução do back-end.  
- **Readline-sync**: Captura de dados do usuário de forma síncrona no terminal.  
- **ANSI Colors**: Sistema de cores customizado para feedbacks e menus.

---

## ⚙️ Funcionalidades Principais
- **CRUD de Contas**: Criar, listar, buscar (por número), atualizar e apagar contas.  
- **Operações Bancárias**: Saque, depósito e transferência com validações completas.  
- **Menu Interativo**: Navegação dinâmica com loop e "pressione enter para continuar".

---

## 💡 Diferenciais Técnicos
- **Modularização**: `src/util/Colors.ts` mantém o código organizado e reutilizável.  
- **Configuração Avançada**: `tsconfig.json` com `nodenext` e `esnext` para compatibilidade moderna.  
- **Tratamento de Inputs**: `questionInt` garante entradas numéricas válidas.  
- **Clean Code**: Loop `while(true)` com saída controlada via `process.exit()`.

---

## 📂 Estrutura de Pastas e Como Executar
```text
conta_bancaria/
├── src/
│   └── util/
│       └── Colors.ts
├── Menu.ts
├── package.json
├── tsconfig.json
└── .gitignore

# Como Executar

# 1. Clonar o repositório
git clone https://github.com/jjeanpedro03/conta_bancaria.git

# 2. Acessar o diretório do projeto
cd conta_bancaria

# 3. Instalar as dependências
npm install

# 4. Compilar o TypeScript (caso não use ts-node)
npx tsc

# 5. Iniciar a aplicação
node Menu.js
