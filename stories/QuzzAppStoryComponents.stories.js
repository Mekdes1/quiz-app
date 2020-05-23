import React from "react";
import Title from "./Title";

import Question from "./QuestionStoryComponent";
import FirstAnswer from "./FirstAnswerComponent";
import SecondAnswer from "./SecondAnswerComponent";
import ThirdAnswer from "./ThirdAnswerComponent";

export default { title: "Quzz app story components" };

export const QuestionComponent = () => <Question />;
export const TitleComponent = () => <Title />;
export const FirstAnswerComponent = () => <FirstAnswer />;
export const SecondAnswerComponent = () => <SecondAnswer />;
export const ThirdComponent = () => <ThirdAnswer />;
