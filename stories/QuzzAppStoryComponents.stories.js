import React from "react";
import Title from "./Title";

import Question from "./QuestionStoryComponent";
import DisplayOptions from "./OptionButtons";

export default { title: "Quzz app story components" };

export const TitleComponent = () => <Title />;
export const QuestionComponent = () => <Question />;
export const DisplayOptionsComponent = () => <DisplayOptions />;
