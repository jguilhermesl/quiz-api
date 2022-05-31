# API para APP Devquiz

>  O projeto consiste numa API para o app Devquiz (jogo de perguntas e respostas).


## :page_facing_up: Explicação

### Rotas

<ul>
	<li><strong>POST /questions:</strong> a rota recebe um objeto com valores question, alternatives, correctAnswer, difficulty e theme. 
	</li>
	<li><strong>GET /questions:</strong> rota que retorna todo o JSON com todos os objetos de questões.</li>
	<li><strong>PUT /questions/id:</strong> rota que permite a edição dos dados de uma questão da api.</li>
	<li><strong>DELETE /questions/id:</strong> essa rota deleta uma questão da api.</li>
</ul>

#### Exemplo

{
	"question": "Quem é o atual presidente do Brasil?",
	"alternatives": [
		{ "alternative": "A", "answer": "João Dória"},
		{ "alternative": "B", "answer": "Bolsonaro"},
		{ "alternative": "C", "answer": "Lula"},
		{ "alternative": "D", "answer": "Eduardo Campos"}
	],
	"correctAnswer": "B",
	"difficulty": "easy",
	"theme": "history"
}

## :rocket: Tecnologias ##

No projeto foram utilizadas as seguintes tecnologias:

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## :closed_book: Requisitos ##

Antes de iniciar :checkered_flag:, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/jguilhermesl/quiz-api
# Access
$ cd quiz-api
# Install dependencies
$ yarn or npm 
# Run the project
$ yarn start or npm start 
# The server will initialize in the <http://localhost:3000>
```
## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEEieIa-_h22g/profile-displayphoto-shrink_800_800/0/1651164045663?e=1658966400&v=beta&t=20osuQdvJ8V16r834e0NxcSHYMEE_1t-okD5LF-wATw" width="160px;" alt="Foto do João Guilherme Lima"/><br>
          <sub>
            <b>João Guilherme</b>
          </sub>
        </a>
      </td>
  </tr>
</table>

<a href="#top">Volte para o topo</a>


