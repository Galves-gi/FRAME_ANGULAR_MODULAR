# Frame – arquitetura modular

Aplicação frontend desenvolvida em **Angular v17**, seguindo **arquitetura modular por feature**, boas práticas de mercado e organização pensada para projetos escaláveis.

O projeto simula um **feed de fotos**, permitindo visualizar, criar, editar, comentar e excluir fotos, com separação clara de responsabilidades entre módulos.

---

## Visão Geral

Funcionalidades principais:

- 📷 **Feed de fotos** (Home)
- ➕ **Compartilhar nova foto** (formulário)
- 📝 **Detalhe da foto**
  - Visualizar informações
  - Editar título, texto e imagem
  - Adicionar comentários
  - Excluir foto
- 🔎 **Pesquisa de fotos** via cabeçalho global
- 🧩 **Arquitetura modular por feature**
- 🚀 **Lazy loading de rotas**

---

## Arquitetura do Projeto

O projeto segue o padrão **Modular por Feature**, separando responsabilidades em três grandes camadas:

### 🔵 Core
Responsável pela infraestrutura da aplicação.

- Serviços globais (API)
- Configurações compartilhadas
- Importado apenas uma vez no `AppModule`
```
core/
├── services/
│ └── api.service.ts
└── core.module.ts
```
---

### 🟢 Shared
Componentes e recursos reutilizáveis.

- Componentes visuais globais
- Models (interfaces)
- Pipes e directives (se houver)
- 
```
shared/
├── components/
│ ├── header/
│ └── photo-card/
├── models/
└── shared.module.ts
```

📌 Não contém regra de negócio.

---

### 🟣 Features
Cada funcionalidade do sistema possui seu próprio módulo.
```
features/
├── feed/
├── share/
└── photo-detail/
```

Cada feature contém:
- Pages
- Services específicos
- Routing próprio
- Módulo isolado

---

## 🧭 Rotas da Aplicação

```
| Rota | Descrição |
|----|----|
| `/` | Feed de fotos |
| `/share` | Compartilhar nova foto |
| `/photo/:id` | Detalhe da foto |
```

As rotas será carregadas via **Lazy Loading**.

---

## 🛠️ Tecnologias Utilizadas

- Angular
- TypeScript
- RxJS
- Angular Router
- Reactive Forms
- HTML5 / CSS3

---

## ▶️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão LTS)
- Angular CLI

### Instalação

```bash
npm install
```
Iniciar o projeto:
```bash
ng serve
```
### Acesse:

http://localhost:4200

---

## 📦 Padrões e Boas Práticas

✔ Arquitetura modular por feature

✔ Lazy loading de módulos

✔ Tipagem forte com interfaces

✔ Componentes pequenos e reutilizáveis

✔ Serviços isolando comunicação com API

✔ Nenhum componente solto fora de módulos

👩‍💻 Autora
Galves-gi
Frontend Developer | Angular

📄 Licença
Este projeto é apenas para fins educacionais e demonstração de boas práticas.

---
