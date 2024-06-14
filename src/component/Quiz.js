import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Quiz() {
  const questions = [
    {
      question: 'Who is the Prime Minister of India?',
      options: ['Rahul Gandhi', 'Nitin Gadkari', 'Narendra Modi', 'Sharad Pawar'],
      answer: 'Narendra Modi',
    },
    {
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'What is the tallest mountain in the world?',
      options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
      answer: 'Mount Everest',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0); // Track score

  const handleSubmit = (event) => {
    const checked = event.target.checked;
    setSelectedAnswer(checked ? event.target.value : '');

    // Check answer and update score
    if (checked && event.target.value === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false); // Reset answer visibility for next question
      setSelectedAnswer(''); // Reset selected answer for next question
    }
  };

  const showAnswerContent = () => {
    return (
      <div>
        <p>You selected: {selectedAnswer}</p>
        <p>Correct Answer: {questions[currentQuestion].answer}</p>
      </div>
    );
  };

  return (
    <div className="quiz-container"> {/* Add a class for styling */}
      <h1>Quiz App</h1>

      {currentQuestion < questions.length && ( // Only render questions if not exceeding limit
        <>
          <h3>Question {currentQuestion + 1}</h3>
          <h4>{questions[currentQuestion].question}</h4>

          <FormGroup>
            {questions[currentQuestion].options.map((option, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox checked={selectedAnswer === option} value={option} onChange={handleSubmit} />}
                label={option}
              />
            ))}
          </FormGroup>

          <button onClick={() => setShowAnswer(true)}>Show Answer</button>
          {showAnswer && showAnswerContent()} {/* Conditionally render answer content */}
        </>
      )}

      {currentQuestion === questions.length && ( // Display score after completing all questions
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your score: {score} out of {questions.length}</p>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
