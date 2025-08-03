import React, { useContext, useState } from "react";
import MultipleAnswerQuestion from "./MultipleAnswerQuestion";
import YesNoQuestion from "./YesNoQuestion";
import QuestionWrapper from "./QuestionWrapper";
import { steps } from "./QuestionFlowContentAndPages";
import { useListOfPapers } from "../contexts/list-of-papers";
// import { PaperContext } from "../contexts/paper-context";
import { useParams } from "react-router-dom";

const AllQuestion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [marks, setMarks] = useState(0);
  const [questions, _] = useListOfPapers();

  const { paperTitle } = useParams();

  const currentQuestionTo = questions.filter(
    (q) => q.info.title === paperTitle
  )[0];
  const getMarksAndAdd = (mark) => {
    console.log("Current: ", currentQuestionTo.questions.length);
    setMarks(marks + mark);
    if (currentQuestionTo.questions.length === 0) {
      return <h1>No Question!</h1>;
    } else if (currentQuestionTo.questions.length >= currentQuestion) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (currentQuestionTo.questions.length <= currentQuestion) {
    // const average = marks / questions.length;
    const average = marks;
    return (
      <section className="w-full flex flex-col items-center justify-center h-full text-slate-950 dark:text-slate-50">
        <div>
          <h1
            className={`text-4xl font-bold  px-4 py-3 bg-slate-800  rounded-tl-md rounded-tr-md`}
          >
            You Got {marks.toPrecision(3)}/100
          </h1>
          {/*  progress line */}
          <div className="rounded-bl-md rounded-br-md rounded-md w-[100%] bg-slate-700">
            <div
              style={{ width: +average + "%" }}
              className={`rounded-bl-md  px-2 h-1 max-w-full ${
                average >= 50 ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {/* {average.toPrecision(3)}% */}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-5 text-slate-950 dark:text-slate-50 items-center justify-center h-full">
      {
        <QuestionWrapper
          questionType={currentQuestionTo.questions[currentQuestion].type}
          question={currentQuestionTo.questions[currentQuestion]}
          answerFn={getMarksAndAdd}
          info={currentQuestionTo.info}
          questionComponent={
            currentQuestionTo.questions[currentQuestion].type ===
            steps.MULTIPLE_ANSWER_QUESTION
              ? MultipleAnswerQuestion
              : YesNoQuestion
          }
        />
      }
    </section>
  );
};

export default AllQuestion;
