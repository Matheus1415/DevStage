# DevStage
## 📝 Sobre o Projeto

CodeCraft Summit 2025 é um evento online e gratuito para desenvolvedores e entusiastas da tecnologia que desejam se aprofundar nas tendências mais recentes em desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes. Com palestras inspiradoras, workshops práticos e desafios interativos, os participantes terão a oportunidade de aprender, compartilhar conhecimento e expandir sua rede de contatos.

Além disso, o evento oferece um sistema de indicações onde os inscritos podem compartilhar um link personalizado para convidar amigos e concorrer a prêmios exclusivos.

- Página Inicial : Destaques de informações e cadastro para o evento.
- Página de convite : Gerar um link para convite de novos usúario para o evento.

## 🖼️ Capturas de Tela

![Foto da Página Inicial](https://github.com/Matheus1415/DevStage/blob/main/home.png)
![Foto da Página convite](https://github.com/Matheus1415/DevStage/blob/main/invite.png)

## 🚀 Como Usar

1. Clone o repositório:

    ```bash
    git clone https://github.com/Matheus1415/DevStage-app.git
    ```

2. Instale as dependências:

    ```bash
    cd restaurant-app
    npm install
    ```

3.Entre na pasta Web:

    ```bash
    cd ./web
    ```
    
4.Este projeto foi iniciado com o comando:

    ```bash
    cd ./web
    ```
    
5. Estre na pasta server:

    ```bash
    cd ./server
    ```
    
6. Suba os containers do Docker (banco de dados, Redis, etc.)

    ```bash
    docker compose up -d
    ```
    
7. Execute as migrações do banco de dados:

    ```bash
    npm run db:migrate
    ```
    
8. Inicie o backend:

    ```bash
    npm run dev
    ```

## 📁 Estrutura do Projeto

```bash
server/
├── src/
│   ├── drizzle/               # Gerenciamento do banco de dados (ORM Drizzle)
│   │   ├── migrations/        # Arquivos de migração do banco de dados
│   │   │   └── 0000_public_nehzno.sql # Primeira migração
│   │   └── schema/            # Definição dos esquemas do banco de dados
│   │       └── index.ts
│   ├── functions/             # Funções auxiliares e de lógica do servidor
│   │   └── access-invite-link.ts # Lógica para acessar links de convite
│   ├── redis/                 # Configuração e gerenciamento do Redis
│   │   └── client.ts          # Cliente Redis para caching e otimizações
│   ├── routes/                # Definição das rotas da API
│   │   └── access-invite-link-route.ts # Rota para acessar links de convite
│   ├── server.ts              # Arquivo principal para iniciar o servidor (se aplicável)
│   ├── config.ts              # Configurações globais do servidor (se aplicável)
│   └── index.ts               # Ponto de entrada da API
web/
├── src/
│   ├── app/           # Páginas principais da aplicação.
│   │   └── page.tsx   # Página principal.
│   ├── assets/        # Imagens, ícones e outros recursos estáticos.
│   │   └── logo.svg   # Logo da aplicação.
│   ├── components/    # Componentes reutilizáveis da aplicação.
│   │   └── button.tsx # Componente de botão.
│   ├── http/         # Serviços de API e comunicação com o backend.
│   │   └── api.ts     # Configuração da API.
│   ├── interface/     # Definições de tipos e interfaces TypeScript.
│   │   └── buttonsProps.ts # Interface para os botões.
│   ├── styles/        # Arquivos de estilo (se houver).
│   ├── App.tsx        # Componente principal da aplicação.
│   └── index.tsx      # Ponto de entrada do React.
└── reportWebVitals.ts # Configurações de performance.
```

## ⚙️ Tecnologias Utilizadas

<p align="center"> 
    <img src="https://skillicons.dev/icons?i=react" alt="React" width="40" height="40"> 
    <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" width="40" height="40"> 
    <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" width="40" height="40"> 
    <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" width="40" height="40"> 
    <img src="https://skillicons.dev/icons?i=postcss" alt="PostCSS" width="40" height="40"> 
</p>

- Next.js: Framework React para construção de aplicações web rápidas e otimizadas.
- React: Biblioteca para criação de interfaces dinâmicas e reativas.
- TypeScript: Superset do JavaScript que adiciona tipagem estática, melhorando a confiabilidade do código.
- Tailwind CSS: Framework CSS utilitário para estilização rápida e responsiva.
- PostCSS: Ferramenta para transformar estilos com plugins modernos.
- React Hook Form: Biblioteca para manipulação eficiente de formulários.
- Zod: Validação de dados de formulários com segurança e tipagem.
- Lucide React: Biblioteca de ícones flexíveis para componentes React.
- Tailwind Merge: Auxilia na fusão de classes do Tailwind de forma eficiente.

