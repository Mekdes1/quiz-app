import React from "react";
import "./style.css";
import quizService from "./quizService";
import "./style.css";

class Question extends React.Component {
  state = { questionBank: [] };
  componentDidMount() {
    quizService().then((question) => {
      question.forEach(({ question }) => {
        this.setState({ questionBank: question });
      });
    });
  }
  render() {
    return (
      <div>
        <div className="questionBox">
          <div className="question">{this.state.questionBank}</div>
        </div>
      </div>
    );
  }
}

export default Question;
