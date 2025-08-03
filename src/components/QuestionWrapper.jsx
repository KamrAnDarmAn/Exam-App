const QuestionWrapper = ({
  children,
  questionType,
  answerFn,
  questionComponent: QuestionComponent,
  question,
  info,
}) => {
  return (
    <QuestionComponent
      {...{
        [questionType]: question,
        answerFn: answerFn,
        info,
      }}
    >
      {children}
    </QuestionComponent>
  );
};

export default QuestionWrapper;
