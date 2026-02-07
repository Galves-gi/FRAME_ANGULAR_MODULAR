# Frame — Arquitetura Modular em Angular 17

Aplicação frontend desenvolvida em **Angular v17**, estruturada com **arquitetura modular por feature**, seguindo boas práticas de mercado e organização voltada para **escalabilidade**, **manutenção** e **reuso de código**.

O projeto simula um **feed de fotos**, permitindo visualizar, criar, editar, comentar e excluir registros, com clara separação de responsabilidades entre módulos.

---

![Angular](https://img.shields.io/badge/Angular-17-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![RxJS](https://img.shields.io/badge/RxJS-purple?style=for-the-badge)
![Reactive Forms](https://img.shields.io/badge/Forms-Reactive-green?style=for-the-badge)
![Architecture](https://img.shields.io/badge/Architecture-Modular-black?style=for-the-badge)
![Status](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

---
![Imagem de capa](assets/img-readme/capa.png)
---

## 📚 Índice

- [Visão Geral](#-visão-geral)
- [Introdução](#-introdução)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
  - [Core Module](#-core-module)
  - [Shared Module](#-shared-module)
  - [Feature Modules](#-feature-modules)
- [Rotas da Aplicação](#-rotas-da-aplicação)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar o Projeto](#-como-executar-o-projeto)

---

## 📌 Visão Geral

O sistema foi projetado para demonstrar como estruturar aplicações Angular modernas com foco em organização e crescimento sustentável.

### Principais funcionalidades

- 📷 Feed de fotos (listagem principal)
- ➕ Compartilhamento de nova foto via formulário
- 📝 Página de detalhe da foto:
  - Visualização de dados
  - Edição de título, texto e imagem
  - Comentários
  - Exclusão de foto
- 🔎 Pesquisa global de fotos via cabeçalho
- 🧩 Organização modular por feature
- 🚀 Lazy loading de rotas

---

## 🧠 Introdução

Este projeto foi criado para aplicar conceitos de **arquitetura modular Angular**, simulando um cenário real de aplicação escalável.

### Objetivos

- Demonstrar separação clara de responsabilidades
- Organizar features de forma independente
- Facilitar manutenção e evolução do sistema
- Aplicar boas práticas modernas do Angular

O sistema reproduz o fluxo de um feed social simples, onde o usuário pode interagir com fotos de forma completa.

---

## 🏗 Arquitetura do Projeto

A aplicação segue o padrão **Modular por Feature**, dividido em três camadas principais:

---

### 🔵 Core Module

Responsável pela infraestrutura global da aplicação.

Inclui:

- Serviços globais (API)
- Configurações compartilhadas
- Inicializações centrais

É importado **uma única vez** no `AppModule`.

---

### 🟢 Shared Module

Contém recursos reutilizáveis entre diferentes features.

Inclui:

- Componentes visuais globais
- Interfaces (models)
- Utilitários compartilhados

📌 Não possui regras de negócio.

---

### 🟣 Feature Modules

Cada funcionalidade possui seu próprio módulo isolado.

Organização:
- Pages
- Services específicos
- Routing próprio
- Componentes internos

Essa separação permite evolução independente de cada parte do sistema.

---

## 🧭 Rotas da Aplicação

| Rota | Descrição |
|------|----------|
| `/` | Feed de fotos |
| `/share` | Compartilhar nova foto |
| `/datail/:id` | Detalhe da foto |

As rotas são carregadas utilizando **Lazy Loading**, reduzindo o tempo inicial de carregamento.

---

## ⚙ Funcionalidades

### 📷 Feed de Fotos
Exibe todas as fotos cadastradas com visualização rápida e navegação para detalhes.
---
![Imagem de capa](./assets/img-readme/capa.png)

### ➕ Compartilhar Foto
Formulário reativo para envio de novas fotos.
---
![Imagem da pagina compartilhar](./assets/img-readme/compartilhar.png)

### 📝 Detalhe da Foto
Permite:

- Visualizar dados completos
- Editar conteúdo
- Inserir comentários
- Excluir registros
---
![Imagem da pagina detalhe](./assets/img-readme/detalhe.png)

### 🔎 Pesquisa Global
Busca integrada ao cabeçalho compartilhado.
---
![Imagem da busca](./assets/img-readme/busca.png)

---

## 🛠 Tecnologias Utilizadas

| Categoria | Tecnologia | Propósito |
|----------|------------|----------|
| Frontend | Angular 17 | Estrutura principal da aplicação |
| Linguagem | TypeScript | Tipagem forte e organização |
| Biblioteca | RxJS | Programação reativa |
| Roteamento | Angular Router | Navegação entre módulos |
| Formulários | Reactive Forms | Validação e controle de dados |
| Interface | HTML5 / CSS3 | Estrutura e estilo |

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão LTS)
- Angular CLI

### Instalação

```bash
npm install
```
### Executar a aplicação

```bash
ng serve
```
### Acessar no navegador

http://localhost:4200

---
Desenvolvido por **Galves-gi**  
Criado em **2026**
