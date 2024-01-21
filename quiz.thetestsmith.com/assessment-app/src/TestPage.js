import React, { useState, useEffect } from 'react';
import './TestPage.css'; // Make sure you have this CSS file in your project
import question4 from './Images/Hello.png'

const ConfirmationModal = ({ onSubmit, onCancel}) => (
  <div className="modal-overlay">
    <div className="modal">
      <h4>Are you sure you want to submit your answer?</h4>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  </div>
);



const TestPage = ({onTestFinish}) => {
  const [questions] = useState([
    {
      id: 1,
      type: 'mcq',
      text: "What is the primary goal of manual testing?",
      options: [
        "To automate all test cases",
        "To find bugs and ensure software quality",
        "To speed up the testing process",
        "To design software applications"
      ],
      correctAnswer: "To find bugs and ensure software quality",
      difficulty: 'easy'
    },

    {
      id: 2,
      type: 'mcq',
      text: "Which of the following is NOT a type of manual testing?",
      options: [
        "Unit Testing",
        "Black Box Testing",
        "Grey Box Testing",
        "Load Testing"
      ],
      correctAnswer: "Load Testing",
      difficulty: 'medium'
    },

    {
      id: 3,
      type: 'subjective',
      text: "Explain the difference between black box testing and white box testing.",
      correctAnswer: "Black box testing assesses a software without knowing its internal structures or workings, focusing on input-output analysis. White box testing involves testing the internal structures or workings of an application.",
      difficulty: 'hard'
    },

    {
      id: 4,
      type: 'mcq',
      text: "Which of these is crucial for effective manual testing?",
      options: [
        "Strong programming skills",
        "Automated testing tools",
        "Attention to detail and analytical skills",
        "Rapid software development"
      ],
      correctAnswer: "Attention to detail and analytical skills",
      difficulty: 'medium'
    },

    {
      id: 5,
      type: 'mcq',
      text: "What does a 'Test Case' in manual testing typically include?",
      options: [
        "The software’s source code",
        "Graphs and flowcharts of the application",
        "Steps to be executed, input data, and expected results",
        "The software’s deployment strategy"
      ],
      correctAnswer: "Steps to be executed, input data, and expected results",
      difficulty: 'easy'
    },
    {
      id: 6,
      type: 'mcq',
      text: "What is the main objective of manual testing?",
      options: [
        "Designing software",
        "Finding bugs and errors",
        "Writing code",
        "Automating processes"
      ],
      correctAnswer: "Finding bugs and errors",
      difficulty: 'easy'
    },

    {
      id: 7,
      type: 'mcq',
      text: "Which of these is a common type of manual testing?",
      options: [
        "Smoke Testing",
        "Regression Testing",
        "Acceptance Testing",
        "All of the above"
      ],
      correctAnswer: "All of the above",
      difficulty: 'easy'
    },

    {
      id: 8,
      type: 'mcq',
      text: "What does GUI in GUI Testing stand for?",
      options: [
        "General User Interface",
        "Graphical User Interface",
        "Great User Interaction",
        "Generated User Interface"
      ],
      correctAnswer: "Graphical User Interface",
      difficulty: 'easy'
    },

    {
      id: 9,
      type: 'mcq',
      text: "In manual testing, what is a 'bug'?",
      options: [
        "An error in the code",
        "A type of testing tool",
        "A documentation error",
        "A user manual"
      ],
      correctAnswer: "An error in the code",
      difficulty: 'easy'
    },

    {
      id: 10,
      type: 'mcq',
      text: "What is the role of a 'Test Plan' in manual testing?",
      options: [
        "To write software code",
        "To document the testing strategy and approach",
        "To automate tests",
        "To design the software architecture"
      ],
      correctAnswer: "To document the testing strategy and approach",
      difficulty: 'easy'
    },

    {
      id: 11,
      type: 'mcq',
      text: "Which skill is important for a manual tester?",
      options: [
        "Fast typing",
        "Attention to detail",
        "Graphic design",
        "Salesmanship"
      ],
      correctAnswer: "Attention to detail",
      difficulty: 'easy'
    },

    {
      id: 12,
      type: 'mcq',
      text: "What does 'Usability Testing' assess in an application?",
      options: [
        "Code efficiency",
        "User friendliness",
        "Security features",
        "Server response time"
      ],
      correctAnswer: "User friendliness",
      difficulty: 'easy'
    },

    {
      id: 13,
      type: 'mcq',
      text: "In manual testing, what is a 'Test Case' used for?",
      options: [
        "Designing the UI",
        "Defining steps to test a specific function",
        "Writing software code",
        "Documenting software requirements"
      ],
      correctAnswer: "Defining steps to test a specific function",
      difficulty: 'easy'
    },

    {
      id: 14,
      type: 'mcq',
      text: "What is 'Exploratory Testing'?",
      options: [
        "Testing without any pre-planned scenarios",
        "Automated testing",
        "Testing based on the developer’s notes",
        "External security auditing"
      ],
      correctAnswer: "Testing without any pre-planned scenarios",
      difficulty: 'easy'
    },

    {
      id: 15,
      type: 'mcq',
      text: "What is the outcome of a 'Pass' in a test case?",
      options: [
        "The software has a bug",
        "The test was not performed",
        "The software meets the specified requirements",
        "The software is ready for release"
      ],
      correctAnswer: "The software meets the specified requirements",
      difficulty: 'easy'
    },
    {
      id: 16,
      type: 'mcq',
      text: "In manual testing, what is a 'Test Plan' primarily used for?",
      options: [
        "To document the actual results of the test cases",
        "To code automated test scripts",
        "To outline the test strategy, objectives, schedule, resources, and scope",
        "To track bugs and issues found during testing"
      ],
      correctAnswer: "To outline the test strategy, objectives, schedule, resources, and scope",
      difficulty: 'medium'
    },

    {
      id: 17,
      type: 'mcq',
      text: "Which of these is a key characteristic of a good test case?",
      options: [
        "Complex and comprehensive",
        "Reusable and adaptable",
        "Long and detailed",
        "Specific to one test environment"
      ],
      correctAnswer: "Reusable and adaptable",
      difficulty: 'medium'
    },

    {
      id: 18,
      type: 'mcq',
      text: "What does 'Regression Testing' aim to identify?",
      options: [
        "Performance issues in the application",
        "New features to be added",
        "Unintended side-effects of code changes",
        "The maximum user load the software can handle"
      ],
      correctAnswer: "Unintended side-effects of code changes",
      difficulty: 'medium'
    },

    {
      id: 19,
      type: 'mcq',
      text: "In manual testing, what is the purpose of a 'Defect Life Cycle'?",
      options: [
        "To describe the phases a software product goes through",
        "To outline the steps from finding a bug to fixing it",
        "To depict the life span of automated tests",
        "To track the changes in software development methodologies"
      ],
      correctAnswer: "To outline the steps from finding a bug to fixing it",
      difficulty: 'medium'
    },

    {
      id: 20,
      type: 'mcq',
      text: "Which of these best describes 'Boundary Value Analysis'?",
      options: [
        "Testing the middle range values of inputs",
        "Checking the application’s performance limits",
        "Testing at the upper and lower limits of input values",
        "Assessing the software's functionality in extreme conditions"
      ],
      correctAnswer: "Testing at the upper and lower limits of input values",
      difficulty: 'medium'
    },

    {
      id: 21,
      type: 'mcq',
      text: "What is 'Ad-hoc Testing' in manual testing?",
      options: [
        "A pre-planned and structured testing approach",
        "Testing conducted without formal documentation",
        "Testing based on the tester's intuition and experience",
        "A systematic approach to cover all aspects of software"
      ],
      correctAnswer: "Testing based on the tester's intuition and experience",
      difficulty: 'medium'
    },

    {
      id: 22,
      type: 'mcq',
      text: "In manual testing, what is 'Smoke Testing' primarily used for?",
      options: [
        "To check if a software version is stable enough for further testing",
        "To verify the security aspects of the application",
        "To assess the software’s performance under load",
        "To check the compatibility of the software with different platforms"
      ],
      correctAnswer: "To check if a software version is stable enough for further testing",
      difficulty: 'medium'
    },

    {
      id: 23,
      type: 'mcq',
      text: "Which of the following is an example of 'Non-functional Testing'?",
      options: [
        "Usability Testing",
        "Unit Testing",
        "Integration Testing",
        "System Testing"
      ],
      correctAnswer: "Usability Testing",
      difficulty: 'medium'
    },

    {
      id: 24,
      type: 'mcq',
      text: "What does 'Exploratory Testing' in manual testing emphasize on?",
      options: [
        "Strict adherence to pre-written test cases",
        "Simultaneous learning, test design, and test execution",
        "Testing the application only after full development",
        "Using automated tools to discover defects"
      ],
      correctAnswer: "Simultaneous learning, test design, and test execution",
      difficulty: 'medium'
    },

    {
      id: 25,
      type: 'mcq',
      text: "What is the main focus of 'Acceptance Testing'?",
      options: [
        "Finding as many defects as possible",
        "Ensuring the code is clean and well-organized",
        "Verifying the application meets business requirements",
        "Checking the compatibility with older software versions"
      ],
      correctAnswer: "Verifying the application meets business requirements",
      difficulty: 'medium'
    },
    {
      id: 26,
      type: 'mcq',
      text: "In manual testing, what does 'boundary value analysis' primarily focus on?",
      options: [
        "Testing the middle values of input ranges",
        "Testing the extreme ends of input ranges",
        "Testing with random inputs",
        "Testing user interface only"
      ],
      correctAnswer: "Testing the extreme ends of input ranges",
      difficulty: 'hard'
    },

    {
      id: 27,
      type: 'mcq',
      text: "Which principle states that exhaustive testing is impossible in manual testing?",
      options: [
        "Pesticide Paradox",
        "Defect Clustering",
        "Testing is Context Dependent",
        "Testing Shows Presence of Defects"
      ],
      correctAnswer: "Testing Shows Presence of Defects",
      difficulty: 'hard'
    },

    {
      id: 28,
      type: 'mcq',
      text: "What is 'error seeding' in the context of manual testing?",
      options: [
        "Introducing known errors to measure the rate of error detection",
        "Accidentally adding errors during test case creation",
        "Using faulty software to perform testing",
        "Identifying errors in requirement specifications"
      ],
      correctAnswer: "Introducing known errors to measure the rate of error detection",
      difficulty: 'hard'
    },

    {
      id: 29,
      type: 'mcq',
      text: "In manual testing, 'Equivalence Partitioning' is used to:",
      options: [
        "Partition the test environment into equal parts",
        "Divide input data into valid and invalid partitions for testing",
        "Ensure all code paths are executed equally",
        "Create equal-sized teams for test execution"
      ],
      correctAnswer: "Divide input data into valid and invalid partitions for testing",
      difficulty: 'hard'
    },

    {
      id: 5,
      type: 'mcq',
      text: "Which type of testing focuses on testing software with the intention of finding severe faults as early as possible?",
      options: [
        "Regression Testing",
        "Smoke Testing",
        "Sanity Testing",
        "Destructive Testing"
      ],
      correctAnswer: "Destructive Testing",
      difficulty: 'hard'
    },

    {
      id: 30,
      type: 'mcq',
      text: "In manual testing, 'Ad-hoc Testing' is:",
      options: [
        "A planned and systematic approach to testing",
        "Testing with an emphasis on automation",
        "An informal testing approach without specific test cases",
        "Testing performed by stakeholders"
      ],
      correctAnswer: "An informal testing approach without specific test cases",
      difficulty: 'hard'
    },

    {
      id: 31,
      type: 'mcq',
      text: "What is the primary objective of 'Compatibility Testing' in manual testing?",
      options: [
        "To ensure software is compatible with different hardware",
        "To check software compatibility with other software applications",
        "To verify software compatibility across different operating systems and environments",
        "To confirm software compatibility with older software versions"
      ],
      correctAnswer: "To verify software compatibility across different operating systems and environments",
      difficulty: 'hard'
    },

    {
      id: 32,
      type: 'mcq',
      text: "What does 'Heuristic Test Strategy Model' help testers to identify in manual testing?",
      options: [
        "Automated testing strategies",
        "Potential test cases based on past experiences",
        "Optimal team size for testing",
        "The best programming language for test script development"
      ],
      correctAnswer: "Potential test cases based on past experiences",
      difficulty: 'hard'
    },

    {
      id: 33,
      type: 'mcq',
      text: "In manual testing, the term 'Context-Driven Testing' emphasizes:",
      options: [
        "The importance of testing context in every project",
        "Relying solely on predefined test plans",
        "Using the same testing strategies for all projects",
        "Testing without understanding the business context"
      ],
      correctAnswer: "The importance of testing context in every project",
      difficulty: 'hard'
    },

    {
      id: 34,
      type: 'mcq',
      text: "What does 'Risk-Based Testing' strategy primarily focus on in manual testing?",
      options: [
        "Prioritizing testing of features based on the likelihood and impact of failures",
        "Testing only the high-risk aspects of a software application",
        "Eliminating all risks before software release",
        "Testing software without considering potential risks"
      ],
      correctAnswer: "Prioritizing testing of features based on the likelihood and impact of failures",
      difficulty: 'hard'
    }
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [usedQuestionIds, setUsedQuestionIds] = useState(new Set());
  const [score, setScore] = useState({ easy: 0, medium: 0, hard: 0, total: 0 });
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [questionNumber, setQuestionNumber] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(5);

  // Timer setup (static for the example)
  const timer = "09:28";

  useEffect(() => {
    resetTest();
  }, []);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('testState'));
    if (savedState) {
      setCurrentQuestionIndex(savedState.currentQuestionIndex);
      setQuestionsAsked(savedState.questionsAsked);
      setScore(savedState.score);
      // ... set other saved states
    }
  }, []);


  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setIsAnswerSubmitted(false);
    setUsedQuestionIds(new Set());
    setScore({ easy: 0, medium: 0, hard: 0, total: 0 });
    setShowConfirmationModal(false);
    setQuestionsAsked(0);
  };

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  };

  const handleModalCancel = () => {
    setShowConfirmationModal(false);
  };

  const getNextQuestion = (currentDifficulty, isCorrect) => {
    let nextDifficulty = currentDifficulty;
    if (isCorrect && currentDifficulty !== 'hard') {
      nextDifficulty = currentDifficulty === 'easy' ? 'medium' : 'hard';
    } else if (!isCorrect && currentDifficulty !== 'easy') {
      nextDifficulty = currentDifficulty === 'hard' ? 'medium' : 'easy';
    }

    // Filter questions to find those that match the next difficulty and haven't been used yet
    const availableQuestions = questions.filter(
      (q) => q.difficulty === nextDifficulty && !usedQuestionIds.has(q.id)
    );

    // Randomly select a new question from the available questions
    if (availableQuestions.length > 0) {
      const nextQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
      setUsedQuestionIds((prev) => new Set([...prev, nextQuestion.id])); // Add to used IDs
      return nextQuestion;
    }
    setQuestionsAsked((prev) => prev + 1);
    return null;
  };

  const isAnswerProvided = () => {
    if (currentQuestion.type === 'mcq') {
      return selectedAnswer !== ''; // For MCQs, check if an option is selected
    } else if (currentQuestion.type === 'subjective') {
      return selectedAnswer.trim() !== ''; // For subjective, check if input is not just empty spaces
    }
    return false;
  };


  // Add a check to render the score summary if there are no more questions
  if (questionsAsked === totalQuestions) {
    localStorage.removeItem('testState');
    return (
      <div className="score-summary">
        <h2>Test Completed</h2>
        <p>Easy Questions Correct: {score.easy}</p>
        <p>Medium Questions Correct: {score.medium}</p>
        <p>Hard Questions Correct: {score.hard}</p>
        <p>Total Score: {score.total}</p>
        <button onClick={onTestFinish}>Finish</button>
      </div>
    );
  }

  const handleNextClick = () => {
    if (!selectedAnswer && !isAnswerSubmitted) {
      alert('Please select an answer before proceeding.');
      return;
    }
    setShowConfirmationModal(true);
  };

  const handleAnswerSubmission = () => {
    const isCorrect = selectedAnswer === questions[currentQuestionIndex].correctAnswer;
  
    // Update the score based on whether the answer is correct
    if (isCorrect) {
      setScore((prevScore) => ({
        ...prevScore,
        [questions[currentQuestionIndex].difficulty]: prevScore[questions[currentQuestionIndex].difficulty] + 1,
        total: prevScore.total + 1
      }));
    }
  
    // Increment the number of questions asked
    setQuestionsAsked((prev) => prev + 1);
  
    if (questionsAsked < 9) { // Check before increment
      const nextQuestion = getNextQuestion(questions[currentQuestionIndex].difficulty, isCorrect);
      if (nextQuestion) {
        setCurrentQuestionIndex(questions.indexOf(nextQuestion));
      }
    }
  
    setSelectedAnswer('');
    const savedState = {
      currentQuestionIndex,
      questionsAsked,
      score,
      // ... other states you want to save
    };
    localStorage.setItem('testState', JSON.stringify(savedState));
  };
  
  const handleModalSubmit = () => {
    setIsAnswerSubmitted(true);
    setShowConfirmationModal(false);
    handleAnswerSubmission(); // Process the submitted answer
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <div className="test-page">
      <div className="test-header">
        <div className="question-counter">{questionNumber} of {totalQuestions}</div>
        <div><b> Difficulty Level:</b> {questions[currentQuestionIndex].difficulty.toUpperCase()}</div>
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
        <button onClick={handleNextClick} disabled={!isAnswerProvided()}>
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