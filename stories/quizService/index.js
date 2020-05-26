const qBank = [
  {
    question:
      "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
    answers: [
      { answer: "Richard Branson", correctAnswer: "loding" },
      { answer: "Alan Sugar", correctAnswer: "loding" },
      { answer: "Donald Trump", correctAnswer: "loding" },
    ],
    correct: "Richard Branson",
    questionId: "099099",
  },
  {
    question:
      'Where is the train station "Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch"?',
    answers: [
      { answer: "Wales", correctAnswer: "loding" },
      { answer: "Czech Republic", correctAnswer: "loding" },
      { answer: "Denmark", correctAnswer: "loding" },
    ],

    correct: "Wales",
    questionId: "183452",
  },
  {
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    answers: [
      { answer: "HTC", correctAnswer: "loding" },
      { answer: "Oculus", correctAnswer: "loding" },
      { answer: "Google", correctAnswer: "loding" },
    ],
    correct: "HTC",
    questionId: "267908",
  },
];

export default (n = 1) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
