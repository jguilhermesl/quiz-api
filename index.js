const express = require("express");
const uuid = require("uuid");
const port = 3004 || process.env.PORT;
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const questions = [];

const checkQuestionId = (req, res, next) => {
    const { id } = req.params

    const index = questions.findIndex( question => question.id === id)

    if (index < 0) {
        return res.status(404).json({ message: "Question not found"})
    }

    req.questionIndex = index 

    next()
}

app.get('/', (req, res) => {
	return res.json({ message: "Olá, Acesse a rota /questions."})
})

app.get('/questions', (req, res) => {
    return res.json(questions)
})

app.post('/questions', (req, res) => {
    const { question , alternatives, correctAnswer, difficulty, theme } = req.body

    const questionObject =  {
        question,
        alternatives,
        correctAnswer,
        difficulty,
        theme,
        id: uuid.v4() 
    }

    questions.push(questionObject)

    return res.status(201).json(questionObject)
})

app.put('/questions/:id', checkQuestionId, (req,res) => {
	const { id } = req.params
	const { question, alternatives, correctAnswer, difficulty, theme } = req.body
	const index = req.questionIndex

	const updatedQuestion = {  question, alternatives, correctAnswer, difficulty, theme, id }

	questions[index] = updatedQuestion

	return res.status(204).json(questions)
})

app.delete('/questions/:id', checkQuestionId, (req, res) => {
	const { id } = req.params
	const index = req.questionIndex

	const questionsFiltered =  questions.filter( question => question.id !== id)

	questions.splice(index,1)

	return res.status(204).json(questionsFiltered)
})

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})