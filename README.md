# 📱 Ignite Feed

Uma rede social moderna desenvolvida em **React 18** com **TypeScript**, apresentando um feed dinâmico de posts com sistema de comentários e interações em tempo real.

![Ignite Feed em ação]([(https://imgur.com/a/OMqKtF2)]

---

## ✨ Sobre o Projeto

O **Ignite Feed** é uma aplicação web que simula o funcionamento de uma rede social contemporânea. Oferece uma experiência interativa onde usuários podem visualizar posts, adicionar comentários e interagir com o conteúdo através de um feed limpo e responsivo.

Este projeto foi desenvolvido como parte do programa **Ignite** da Rocketseat, focando em consolidar conhecimentos de React, TypeScript e práticas modernas de desenvolvimento frontend.

---

## 🎯 Funcionalidades

✅ **Feed de Posts** - Visualize uma lista de posts com informações de autor, data e conteúdo
✅ **Sistema de Comentários** - Adicione novos comentários aos posts
✅ **Like em Comentários** - Curta comentários para mostrar interesse
✅ **Deleção de Comentários** - Remova seus próprios comentários
✅ **Avatar de Usuário** - Identifique usuários através de avatares
✅ **Formatação de Data** - Datas formatadas em português com horário relativo
✅ **Design Responsivo** - Interface adaptada para diferentes tamanhos de tela
✅ **Layout Moderno** - UI limpa e intuitiva com componentes bem organizados

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **React** | ^18.2.0 | Biblioteca de UI com componentes funcionais |
| **React DOM** | ^18.2.0 | Integração do React com o DOM |
| **TypeScript** | ^5.2.2 | Tipagem estática para JavaScript |
| **Vite** | ^5.2.0 | Build tool e dev server ultrarrápido |
| **CSS Modules** | - | Estilização scoped e modular |
| **Phosphor Icons** | ^1.4.1 | Ícones modernos e de alta qualidade |
| **date-fns** | ^2.28.0 | Biblioteca para manipulação de datas |
| **ESLint** | ^8.57.0 | Linter para qualidade de código |

---

## 📂 Estrutura do Projeto

```
Ignite-Feed/
├── src/
│   ├── assets/
│   │   ├── 2.png                 # Imagem de prévia do projeto
│   │   └── Ignite simbol.svg     # Logo do Ignite
│   ├── components/
│   │   ├── Avatar.tsx            # Componente de avatar de usuário
│   │   ├── Avatar.module.css     # Estilos do Avatar
│   │   ├── Comment.tsx           # Componente de comentário
│   │   ├── Comment.module.css    # Estilos do Comment
│   │   ├── Header.tsx            # Cabeçalho da aplicação
│   │   ├── Header.module.css     # Estilos do Header
│   │   ├── Post.tsx              # Componente principal de post
│   │   ├── Post.module.css       # Estilos do Post
│   │   ├── Sidebar.tsx           # Barra lateral
│   │   └── Sidebar.module.css    # Estilos do Sidebar
│   ├── App.tsx                   # Componente raiz da aplicação
│   ├── App.module.css            # Estilos globais do App
│   ├── global.css                # Estilos globais
│   ├── main.tsx                  # Ponto de entrada
│   └── vite-env.d.ts             # Tipos do Vite
├── index.html                    # HTML principal
├── package.json                  # Dependências e scripts
├── tsconfig.json                 # Configuração TypeScript
├── tsconfig.node.json            # Configuração TypeScript para Vite
├── vite.config.ts                # Configuração do Vite
└── README.md                     # Este arquivo
```

---

## 🚀 Como Executar

### Pré-requisitos

- **Node.js** 16.x ou superior
- **npm** ou **yarn** instalado

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/OtavioRochaDeveloper/Ignite-Feed.git
   cd Ignite-Feed
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação:**
   Abra seu navegador e acesse `http://localhost:5173`

---

## 📦 Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Verificar código com ESLint
npm run lint

# Preview da build de produção
npm run preview
```

---

## 🧩 Componentes Principais

### **Header**
Cabeçalho principal da aplicação com branding e identidade visual do Ignite.

### **Sidebar**
Barra lateral com perfil do usuário e informações adicionais.

### **Post**
Componente responsável por exibir posts no feed com:
- Informações do autor
- Conteúdo formatado (parágrafos e links)
- Data de publicação formatada
- Sistema de comentários

### **Comment**
Componente de comentário individual com:
- Avatar do comentarista
- Conteúdo do comentário
- Sistema de likes
- Botão para deletar comentário

### **Avatar**
Componente reutilizável para exibir avatares dos usuários com suporte a border opcional.

---

## 🎨 Recursos Destacados

### Formatação de Datas
A aplicação utiliza a biblioteca `date-fns` com localização em português brasileiro para formatar datas de forma amigável:
- Formato completo: "3 de maio de 2024 às 22:55h"
- Formato relativo: "há 2 dias"

### Validação e Feedback
- Validação de comentários vazios
- Feedback visual ao adicionar/deletar comentários
- Sistema de likes com contador

### TypeScript
Tipagem completa com interfaces bem definidas:
```typescript
interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}
```

---

## 💡 O que Aprender

Este projeto é perfeito para consolidar conhecimentos em:

- ✅ React Hooks (useState, useCallback)
- ✅ Componentes funcionais reutilizáveis
- ✅ TypeScript em React
- ✅ CSS Modules para estilização scoped
- ✅ Props e composição de componentes
- ✅ Event handling e manipulação de state
- ✅ Formatação de datas com date-fns
- ✅ Build com Vite para melhor performance

---

## 🔧 Customizações

### Adicionar novos posts
Edite o array `posts` em `src/App.tsx` adicionando novos objetos com a estrutura:

```typescript
{
  id: 3,
  author: {
    avatarUrl: 'https://github.com/usuario.png',
    name: 'Seu Nome',
    role: 'Sua Profissão'
  },
  content: [
    { type: 'paragraph', content: 'Seu texto aqui' },
    { type: 'link', content: 'seu-link.com' },
  ],
  publishedAt: new Date('2024-05-03 22:55:00'),
}
```

### Modificar estilos
Os estilos estão organizados em CSS Modules dentro de `src/components/`. Cada componente possui seu próprio arquivo `.module.css`.

---

## 📄 Licença

Este projeto está sob a licença MIT. Você é livre para usar, modificar e distribuir este projeto.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Para sugerir melhorias ou reportar bugs:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📞 Contato

Desenvolvido por **Otavio Custódio**

- GitHub: [@OtavioRochaDeveloper](https://github.com/OtavioRochaDeveloper)
- Portfólio: [otavio.design](https://otavio.design)

---

## 🏆 Agradecimentos

- [Rocketseat](https://www.rocketseat.com.br/) - Programa Ignite
- [React](https://react.dev/) - Biblioteca
- [Vite](https://vitejs.dev/) - Build tool
- [Phosphor Icons](https://phosphoricons.com/) - Ícones

---

**Desenvolvido com ❤️ durante o Ignite Rocketseat**

