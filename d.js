const [stepData, setStepData] = useState([
  {
    info: {
      title: "City",
      createdAt: "8/1/2025",
      numberOfQuestion: "2",
      numberOfMQuestion: "1",
      numberOfYNQuestion: "1",
    },
    questions: [
      {
        question: "What is the capital of France?",
        type: "multiple_answer_question",
        A: "Paris",
        B: "London",
        C: "Berlin",
        D: "Madrid",
        correct: "A",
      },
      {
        question: "Computer is machine",
        type: "yes_no_question",
        answer: "true",
      },
    ],
  },
  {
    info: {
      title: "CN-COMPUTER NETWORKS",
      createdAt: "8/1/2025",
      numberOfQuestion: "2",
      numberOfMQuestion: "1",
      numberOfYNQuestion: "1",
    },
    questions: [
      {
        question: "What is the main function of a router?",
        type: "multiple_answer_question",
        A: "Forward data packets",
        B: "Connect different networks",
        C: "Filter traffic",
        D: "Assign IP addresses",
        correct: "A",
      },
      {
        question: "Computer is machine",
        type: "yes_no_question",
        answer: "true",
      },
    ],
  },
]);
