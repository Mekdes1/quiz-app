import React from "react";
import quizService from "./quizService";
import "./style.css";

export default class AnswerButton extends React.Component {
  state = { answerBank: [], correctAnswer: [] };
  getQuestions = () => {
    quizService().then((question) => {
      this.setState({ correctAnswer: question[0].correct });
      question.forEach(({ answers, question }) => {
        this.setState({ answerBank: answers });
      });
    });
  };

  componentDidMount() {
    this.getQuestions();
  }
  correctAnswer(correct) {
    this.setState({
      answerBank: this.state.answerBank.map((answers) => {
        if (answers.answer !== correct) {
          return {
            ...answers,
            correctAnswer: "false",
          };
        } else if (answers.answer === correct) {
          return {
            ...answers,
            correctAnswer: "true",
          };
        } else {
          return answers;
        }
      }),
    });
  }

  render() {
    console.log(this.state.answerBank);
    const option = this.state.answerBank;

    return (
      <div>
        {option.map((item, index) => {
          const isCorrectAnswer = item.correctAnswer;
          return (
            <div key={index}>
              <button
                className={
                  isCorrectAnswer === "loding"
                    ? "answerBtn "
                    : isCorrectAnswer === "true"
                    ? "answerBtn correct"
                    : isCorrectAnswer === "false"
                    ? "answerBtn  wrong"
                    : "answerBtn"
                }
                onClick={() => this.correctAnswer(this.state.correctAnswer)}
              >
                {item.answer}{" "}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
