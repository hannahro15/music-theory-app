import { useState } from 'react'
import './Quiz.css'
import { quizData } from './questions.js'

const ANSWER_DELAY_MS = 1000
const OPTION_LABELS = ['A', 'B', 'C', 'D']

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

function QuestionScreen({ question, selectedIndex, onSelect }) {
  const isAnswerSelected = selectedIndex !== null
  const correctIndex = question.correctAnswer

  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <div id="answerOptions">
        {question.options.map((option, index) => {
          let className = 'option-container'
          if (isAnswerSelected) {
            className += ' disabled'
            if (index === selectedIndex) {
              className += index === correctIndex ? ' correct' : ' incorrect'
            } else if (index === correctIndex) {
              className += ' correct'
            }
          }
          return (
            <div className={className} key={index}>
              <span className="option-label">{OPTION_LABELS[index]}</span>
              <button type="button" onClick={() => onSelect(index)}>{option}</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Quiz() {
  const [screen, setScreen] = useState('start')
  const [questions, setQuestions] = useState(quizData)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(null)

  function startQuiz() {
    setQuestions(shuffle(quizData))
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setSelectedIndex(null)
    setScreen('question')
  }

  function selectAnswer(index) {
    if (selectedIndex !== null) return

    setSelectedIndex(index)
    setUserAnswers(prev => {
      const next = [...prev]
      next[currentQuestionIndex] = index
      return next
    })

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(i => i + 1)
        setSelectedIndex(null)
      } else {
        setScreen('results')
      }
    }, ANSWER_DELAY_MS)
  }

  function restartQuiz() {
    setScreen('start')
  }

  const score = userAnswers.reduce(
    (total, answer, index) => total + (answer === questions[index]?.correctAnswer ? 1 : 0),
    0
  )

  return (
    <div className="quiz-page">
      <h1>Classical Music Quiz</h1>
      <div className="quiz-container">
        {screen === 'start' && (
          <div className="start-screen">
            <h2>Classical Music Quiz!</h2>
            <div className="quiz-info">
              <p>Test your knowledge of classical music with my challenging classical music quiz!</p>
              <p>Are you ready to begin?</p>
            </div>
            <button id="start-btn" onClick={startQuiz}>Start Quiz</button>
          </div>
        )}

        {screen === 'question' && (
          <QuestionScreen
            question={questions[currentQuestionIndex]}
            selectedIndex={selectedIndex}
            onSelect={selectAnswer}
          />
        )}

        {screen === 'results' && (
          <div className="results-screen">
            <h2>Quiz Complete!</h2>
            <p>Your score: {score} out of {questions.length}</p>
            <p>Percentage: {Math.round((score / questions.length) * 100)}%</p>
            <button id="restart-btn" onClick={restartQuiz}>Take Quiz Again</button>
          </div>
        )}
      </div>
    </div>
  )
}
