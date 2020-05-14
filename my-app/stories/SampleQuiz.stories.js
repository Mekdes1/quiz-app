import React from 'react';
import SampleQuizComponent from './SampleQuizComponent';
import SampleComponent from './SampleComponent';

export default { title: 'Sample Quiz Component' };

export const QuizComponent = () => <SampleQuizComponent />;
export const testComponents = () => (
  <SampleComponent title="test component working" />
);
