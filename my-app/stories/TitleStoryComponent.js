import React from "react";
import "./style.css";
import quizService from "./quizService";
import "./style.css";

class Title extends React.Component {
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
        <div className="title">Quiz question</div>
        <div className="questionBox">
          <div className="question">{this.state.questionBank}</div>
        </div>
      </div>
    );
  }
}

export default Title;
