import React from "react";
import quizService from "./quizService";
import "./style.css";

function OptionButtons(props) {
  const optionButtonDisplay = props.answerBank ? props.answerBank : [];
  const isCorrectAnswer = optionButtonDisplay.correctAnswer;
  return (
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
        onClick={props.correctAnswer}
      >
        {optionButtonDisplay.answer}{" "}
      </button>
    </div>
  );
}

export default class DisplayOptions extends React.Component {
  state = { answerBank: [], correctAnswer: [], answersare: [] };
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
    return (
      <OptionButtons
        answerBank={this.state.answerBank[0]}
        correctAnswer={() => {
          this.correctAnswer(this.state.correctAnswer);
        }}
      />
    );
  }
}
