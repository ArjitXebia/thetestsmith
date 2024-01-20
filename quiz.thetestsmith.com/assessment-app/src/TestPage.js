import React, { useState } from 'react';
import './TestPage.css'; // Make sure you have this CSS file in your project
import question4 from './Images/Hello.png'

const ConfirmationModal = ({ onSubmit, onCancel }) => (
  <div className="modal-overlay">
    <div className="modal">
      <h4>Are you sure you want to submit your answer?</h4>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  </div>
);

const TestPage = () => {
  const [questions] = useState([
    {
      id: 1,
      type: 'mcq',
      text: "F and E are midpoints of AB and AD respectively. If the side of square ABCD is 8, what is the area of triangle CEF?",
      options: [
        "8√2",
        "9√3",
        "18",
        "16√2",
        "24"
      ],
      correctAnswer: "8√2",
      difficulty: 'hard'
    },
    {
      id: 2,
      type: 'mcq',
      text: "What is the capital of France?",
      options: [
        "London",
        "Berlin",
        "Paris",
        "Rome"
      ],
      correctAnswer: "Paris",
      difficulty: 'easy'
    },
    {
      id: 3,
      type: 'subjective',
      text: "Explain the significance of the year 1789 in French history.",
      correctAnswer: "The French Revolution began in 1789.",
      difficulty: 'medium'
    },
    {
      id: 4,
      type: 'image',
      text: "What is the mathematical expression represented by the following image?",
      imageUrl: question4, // Replace with the path to your image
      options: [
        "E=mc^2",
        "a^2 + b^2 = c^2",
        "The Pythagorean theorem",
        "None of the above"
      ],
      correctAnswer: "The Pythagorean theorem",
      difficulty: 'medium'
    },
    {
      id: 5,
      type: 'mcq',
      text: "Which of the following is NOT a programming language?",
      options: [
        "Python",
        "Java",
        "HTML",
        "C++"
      ],
      correctAnswer: "HTML",
      difficulty: 'easy'
    }
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  };

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleNextClick = () => {
    if (!selectedAnswer) {
      alert('Please select an answer before proceeding.');
      return;
    }
    setShowConfirmationModal(true);
  };

  const handleModalSubmit = () => {
    // Logic for submitting the answer
    setIsAnswerSubmitted(true);
    setShowConfirmationModal(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1); // Load the next question
    setSelectedAnswer(''); // Reset the selected answer
  };

  const handleModalCancel = () => {
    setShowConfirmationModal(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Timer setup (static for the example)
  const timer = "09:28";

  return (
    <div className="test-page">
      <div className="test-header">
        <div className="question-counter">{currentQuestionIndex + 1} of {questions.length}</div>
        <div className="timer">{timer}</div>
      </div>
      {currentQuestion.type !== 'image' ? (
        <div className="question-section">
          <div className="question-text">{currentQuestion.text}</div>
          {currentQuestion.type === 'mcq' && (
            <div className="answer-options">
              {currentQuestion.options.map((option, index) => (
                <label key={index} className="answer-option">
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerSelection(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
          {currentQuestion.type === 'subjective' && (
            <textarea
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              placeholder="Your answer here"
            />
          )}
        </div>
      ) : (
        <div className="question-section">
          <img src={currentQuestion.imageUrl} alt="Question Illustration" className="question-image" />
          <div className="question-text">{currentQuestion.text}</div>
          <div className="answer-options">
            {currentQuestion.options.map((option, index) => (
              <label key={index} className="answer-option">
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelection(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      )}
      <div className="action-buttons">
        <button onClick={handleNextClick}>
          Next
        </button>
      </div>

      {showConfirmationModal && (
        <ConfirmationModal
          onSubmit={handleModalSubmit}
          onCancel={handleModalCancel}
        />
      )}
    </div>
  );
};

export default TestPage;