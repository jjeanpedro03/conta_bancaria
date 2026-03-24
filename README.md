<h1 align="center">🏦 Banco do Brazil com Z — Sistema CLI de Gestão Bancária com TypeScript</h1>

<p align="center">
  O <strong>Banco do Brazil com Z</strong> é um sistema de gerenciamento de contas bancárias via linha de comando (CLI), com foco em segurança, usabilidade e eficiência no fluxo financeiro.
</p>

<p align="center">
  Este projeto foi totalmente desenvolvido por mim, <strong>Jean Pedro</strong>.
</p>

<p align="center">
  <img src="./img/apresentacao-conta-bancaria.gif" alt="Demonstração Banco do Brazil com Z" width="700px" style="border-radius: 10px; border: 2px solid #FFD700;">
</p>

## 🎯 Objetivo

Este projeto foi desenvolvido com o objetivo de consolidar conhecimentos em **TypeScript**, manipulação de dados e construção de interfaces de linha de comando interativas, simulando operações financeiras reais.

## 🚀 Sobre o Projeto

O **Banco do Brazil com Z** permite realizar todas as operações básicas de um banco, como:

- Criar, listar e consultar contas  
- Atualizar e apagar contas  
- Sacar e depositar valores  
- Transferir fundos entre contas  

Tudo isso com **validações de dados em tempo real** e uma interface CLI amigável e intuitiva.

## 🛠️ Tecnologias e Ferramentas

<p align="left">
  <img src="https://skillicons.dev/icons?i=ts,nodejs,git,vscode" height="40px" />
</p>

- **TypeScript:** Garantia de tipagem estrita e segurança do código  
- **Node.js:** Ambiente de execução da aplicação  
- **Readline-Sync:** Criação de menus interativos no terminal  
- **Cores no Terminal:** Biblioteca personalizada para destaque visual das opções e mensagens  

## ⚙️ Funcionalidades Principais

- 💳 **Criação de Contas:** Cadastro de clientes com dados básicos  
- 📄 **Consulta e Listagem:** Visualização de todas as contas ou busca por número  
- ✏️ **Atualização e Exclusão:** Modificação de dados ou remoção de contas existentes  
- 💰 **Movimentações Financeiras:** Saque, depósito e transferência entre contas  
- 🎨 **Interface Interativa:** Menu colorido e intuitivo para navegação rápida  

## 💡 Diferenciais Técnicos

- **Tipagem Estrita:** Uso de TypeScript para prevenir erros comuns  
- **Feedback Visual:** Sistema de cores para realçar menus e mensagens de sucesso/erro  
- **CLI Responsivo:** Operações assíncronas com `readline-sync` para não travar a interface  
- **Clean Code:** Separação clara entre lógica bancária, interface e utilitários  

## 📂 Estrutura de Pastas

```text
├── src/
│   ├── main.ts           # Arquivo principal da aplicação
│   ├── util/
│   │   └── Colors.ts    # Biblioteca de cores para o terminal
├── img/
│   └── apresentacao-conta-bancaria.gif
├── package.json
├── tsconfig.json
└── README.md
```

## 📂 Como Acessar e Executar

```text

Para rodar o projeto em sua máquina local, copie e cole todo este bloco no terminal:

# 1. Clonar o repositório
git clone https://github.com/jjeanpedro03/conta_bancaria.git

# 2. Acessar o diretório e instalar dependências
cd conta_bancaria && npm install

# 3. Compilar TypeScript (se necessário)
tsc

# 4. Executar a aplicação
npm start
