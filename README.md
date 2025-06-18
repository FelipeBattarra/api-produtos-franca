# API de Produtos - Desafio Técnico

Este projeto consiste numa API RESTful para gestão de produtos, desenvolvida como parte de um desafio técnico para a disciplina de Front-End Web. A API permite realizar operações CRUD (Criar, Ler, Atualizar, Eliminar) completas sobre uma coleção de produtos.

## 🚀 Funcionalidades

A API implementa as seguintes funcionalidades, conforme solicitado no desafio:

-  **Listar todos os produtos:** Retorna uma lista com todos os produtos registados na base de dados.
-  **Listar um produto específico:** Permite a busca de um produto único através do seu `ID` ou `Nome`.
-  **Registar um novo produto:** Adiciona um novo produto à base de dados.
-  **Atualizar um produto existente:** Modifica as informações de um produto já registado, utilizando o seu `ID`.
-  **Eliminar um produto:** Remove um produto da base de dados, utilizando o seu `ID`.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias no back-end:

- **Node.js:** Ambiente de execução para JavaScript no servidor.
- **Express.js:** Framework para a construção de APIs e aplicações web.
- **MongoDB Atlas:** Serviço de base de dados não relacional na nuvem.
- **Mongoose:** Biblioteca de modelagem de dados (ODM) para o MongoDB.
- **Dotenv:** Para gestão de variáveis de ambiente.

---

## Endpoints da API

Aqui estão os endpoints disponíveis na API:

| Método   | Endpoint                      | Descrição                                         |
| :------- | :---------------------------- | :------------------------------------------------ |
| `GET`    | `/api/produtos`                 | Retorna a lista de todos os produtos.               |
| `GET`    | `/api/produtos/:identificador`  | Retorna um produto específico pelo `ID` ou `Nome`. |
| `POST`   | `/api/produtos`                 | Regista um novo produto.                            |
| `PUT`    | `/api/produtos/:id`             | Atualiza um produto existente pelo `ID`.            |
| `DELETE` | `/api/produtos/:id`             | Elimina um produto existente pelo `ID`.             |

### Exemplo de corpo para `POST` e `PUT`:

```json
{
  "nome": "O seu produto",
  "descricao": "Uma descrição detalhada do seu produto.",
  "cor": "Preto",
  "peso": 250,
  "tipo": "Eletrónico",
  "preco": 499.99
}
```

---

## 📋 Como Executar Localmente

Para executar este projeto no seu ambiente local, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
   ```

2. **Navegue para a pasta do projeto:**
   ```bash
   cd nome-do-repositorio
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Configure as variáveis de ambiente:**
   - Crie um ficheiro chamado `.env` na raiz do projeto.
   - Adicione a sua string de conexão do MongoDB Atlas a este ficheiro:
     ```
     MONGO_URI=mongodb+srv://seu_usuario:sua_senha@seu_cluster...
     ```

5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O servidor estará a correr em `http://localhost:3000`.

---

## 📖 Documentação

A documentação completa da API, com exemplos de requisições e respostas, está disponível publicamente através do Postman.

- [**Documentação da API**](https://documenter.getpostman.com/view/46004434/2sB2x9jWG7)

---

## 👨‍💻 Autor

Este projeto foi desenvolvido por:

**FelipeBattarra**

- [GitHub](https://github.com/FelipeBattarra)
- [LinkedIn](https://linkedin.com/in/FelipeJorgeBattarra)
