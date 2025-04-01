# 🍽️ Sovrano - Sistema de Reserva Online (Web)

## ✨ **Descrição do Projeto**

**Sovrano** é um sistema de reservas online desenvolvido com **Next.js**, **ShadCN**, **Lucide** e **Tailwind CSS** para proporcionar uma experiência sofisticada e eficiente aos clientes de restaurantes de alto padrão. A plataforma web permite que os usuários façam reservas de forma intuitiva e elegante, garantindo facilidade e segurança em cada interação.

🚧 **Este projeto ainda está em desenvolvimento.** Algumas funcionalidades podem estar incompletas ou sujeitas a mudanças.

---

## 🚀 **Tecnologias Utilizadas**

- **Next.js** - Framework React para criação de aplicações rápidas e escaláveis.
- **ShadCN** - Componentes acessíveis e estilizados para UI.
- **Lucide** - Ícones modernos e flexíveis.
- **Tailwind CSS** - Estilização rápida e responsiva.
- **Prisma** - ORM para gerenciamento do banco de dados.
- **NextAuth.js** - Autenticação segura.

---

## 📌 **Funcionalidades**

### 1. **Cadastro e Autenticação Segura 🔐**
Os usuários podem criar uma conta e acessar o sistema com total segurança, garantindo a privacidade de seus dados.

- **Registro e login via e-mail e senha**
- **Autenticação segura com NextAuth.js**
- **Criptografia de senhas** para proteção dos dados

### 2. **Sistema de Reservas Inteligente 📅**
A plataforma permite que os clientes façam, editem e cancelem reservas de forma prática e rápida.

- **Seleção da data e horário disponível**
- **Escolha do número de pessoas**
- **Status atualizado da reserva:** Confirmada, Pendente ou Cancelada
- **Notificações sobre mudanças no status da reserva**

### 3. **Interface Moderna e Responsiva 🎨**
O design sofisticado e minimalista do Sovrano garante uma experiência fluida e agradável para qualquer dispositivo.

- **UI responsiva e acessível** com ShadCN
- **Ícones elegantes do Lucide** para melhor usabilidade
- **Estilização aprimorada com Tailwind CSS**

### 4. **Administração das Reservas 🏢**
Os administradores do restaurante podem gerenciar as reservas com facilidade, visualizando a ocupação das mesas e ajustando a disponibilidade em tempo real.

- **Visualização interativa do salão**
- **Controle total das reservas e capacidade**
- **Atualização em tempo real do status de cada reserva**

---

## 🎯 **Objetivo do Projeto**

O **Sovrano** busca proporcionar uma experiência premium para clientes e restaurantes, oferecendo um sistema de reservas intuitivo, seguro e eficiente. A plataforma é ideal para estabelecimentos que prezam pela sofisticação e organização.

---

## 📦 **Como Instalar e Rodar o Projeto**

### 1️⃣ **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/sovrano-web.git
```

### 2️⃣ **Instale as dependências**
```bash
cd sovrano-web
npm install
```

### 3️⃣ **Configure as variáveis de ambiente**
Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes configurações:
```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/sovrano
NEXTAUTH_SECRET=sua_chave_secreta
NEXTAUTH_URL=http://localhost:3000
```

### 4️⃣ **Execute o projeto**
```bash
npm run dev
```

O sistema estará disponível em `http://localhost:3000`.

---

## 🛠️ **Como Contribuir**

1. **Faça um fork** do projeto.
2. Crie uma **branch** com a sua feature: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Adicionando nova funcionalidade'`.
4. Faça um push para a branch: `git push origin minha-feature`.
5. Abra um **Pull Request** e aguarde a análise.

---

## 📜 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

💡 **Desenvolvido por Dias** 🚀
