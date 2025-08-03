import React, { useContext, useState } from "react";
import { QuestionStepContext } from "../contexts/QuestionStep";
import { steps } from "./QuestionFlowContentAndPages";
import { useListOfPapers } from "../contexts/list-of-papers";
import { Navigate, useNavigate } from "react-router-dom";

const QuestionCreationFlow = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepsData, setStepsData] = useContext(QuestionStepContext);
  const [questions, setQuestions] = useListOfPapers();
  const navigate = useNavigate();

  const goToNext = (data, step, i, total) => {
    if (i < total) return;

    setStepsData((prev) => {
      const updatedData = { ...prev };

      if (step === steps.QUESTION_SELECTION) {
        updatedData[step] = data; // single object
      } else if (
        step === steps.MULTIPLE_ANSWER_QUESTION ||
        step === steps.YES_NO_QUESTION
      ) {
        if (!updatedData[step]) {
          updatedData[step] = [];
        }
        updatedData[step].push(data); // array of questions
      }

      return updatedData;
    });

    if (currentStep < React.Children.count(children) - 1) {
      setCurrentStep((prev) =>
        prev < React.Children.count(children) - 1 ? prev + 1 : prev
      );
    } else {
      setQuestions((prev) => [
        ...prev,
        {
          info: { ...stepsData[steps.QUESTION_SELECTION] },
          questions: [
            ...stepsData[steps.MULTIPLE_ANSWER_QUESTION],
            ...stepsData[steps.YES_NO_QUESTION],
          ],
        },
      ]);

      navigate("/papers", { replace: true });
      return;
    }
  };
  // console.log(stepsData);
  const currentChild = React.Children.toArray(children)[currentStep];

  return React.cloneElement(currentChild, {
    goToNext: goToNext,
  });
};

export default QuestionCreationFlow;
