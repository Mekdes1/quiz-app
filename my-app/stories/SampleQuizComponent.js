import React from "react";
import PropTypes from "prop-types";
import "./style.css";

import "./style.css";
import quizService from "./quizService";
const root = document.getElementById("root");

const Title = ({ question }) => {
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
    </div>
  );
};

const OptionsButton = (props) => {
  return (
    <div>
      {props.options.map((item, index) => {
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
              onClick={props.correctAnswer}
            >
              {item.answer}{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default class SampleQuizComponent extends React.Component {
  state = { questionBank: [], answerBank: [] };

  correctAnswer = this.correctAnswer.bind(this);
  getQuestions = () => {
    quizService().then((question) => {
      console.log(question);
      question.forEach(({ answers, question }) => {
        console.log(answers, question);
        answers.forEach((answer) => {
          console.log(answer);

          this.state.answerBank.push(answer);
        });
      });

      this.setState({
        questionBank: question,
      });
    });
  };

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

  componentDidMount() {
    this.getQuestions();
  }
  render() {
    return (
      <div className="container">
        <div className="title">Quiz question</div>
        {this.state.questionBank.map(({ question, correct, questionId }) => {
          return (
            <div key={questionId}>
              <Title question={question} />
              <OptionsButton
                correctAnswer={() => this.correctAnswer(correct)}
                options={this.state.answerBank}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
