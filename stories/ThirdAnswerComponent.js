import React from "react";
import quizService from "./quizService";
import "./style.css";

export default class ThirdAnswer extends React.Component {
  state = { answerBank: [], correctAnswer: [] };
  getQuestions = () => {
    quizService().then((question) => {
      this.setState({ correctAnswer: question[0].correct });
      question.forEach(({ answers, question }) => {
        this.setState({ answerBank: answers[2] });
      });
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  correctAnswer(correct) {
    this.setState({
      answerBank:
        this.state.answerBank.answer !== correct
          ? { ...this.state.answerBank, correctAnswer: "false" }
          : this.state.answerBank.answer === correct
          ? { ...this.state.answerBank, correctAnswer: "true" }
          : this.state.answerBank,
    });
  }
  render() {
    const isCorrectAnswer = this.state.answerBank.correctAnswer;
    console.log(this.state.correctAnswer);

    return (
      <div>
        <div>
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
            {this.state.answerBank.answer}{" "}
          </button>
        </div>
      </div>
    );
  }
}
