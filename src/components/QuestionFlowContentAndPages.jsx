import { Input } from "@/components/ui/input.tsx";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import QuestionCreationFlow from "./QuestionCreationFlow";
import { useContext, useEffect, useState } from "react";
import { QuestionStepContext } from "../contexts/QuestionStep";
import { Link } from "react-router-dom";

const ChooseQuestionType = ({ goToNext }) => {
  const HandlerFn = (e) => {
    // console.log(e);
  };
  return (
    <section className="flex flex-col gap-3 w-[50%]">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Question Types</SelectLabel>
            <SelectItem value="multiple_answer">Multiple Answer</SelectItem>
            <SelectItem value="yes-no">Yes - No</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button variant="secondary" onClick={goToNext}>
        Next
      </Button>
    </section>
  );
};

export const steps = {
  QUESTION_SELECTION: "question_selection",
  MULTIPLE_ANSWER_QUESTION: "multiple_answer_question",
  YES_NO_QUESTION: "yes_no_question",
};

const NumberOfQuestion = ({ goToNext }) => {
  const [_, setStepsData] = useContext(QuestionStepContext);

  useEffect(() => {
    setStepsData([]);
  }, []);

  const [noOfQuestion, setNoOfQuestion] = useState();
  const [noOfMQuestion, setNoOfMQuestion] = useState();
  const [noOfYNQuestion, setNoOfYNQuestion] = useState();
  const [title, setTitle] = useState("");
  return (
    <section className="flex flex-col min-w-[400px] gap-4 text-slate-950 dark:text-slate-50">
      <h1 className="font-semibold">How Many Question Would You Like?</h1>
      <Input
        placeholder="Title"
        className=""
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <Input
        placeholder="Enter No. of Question"
        className=""
        onChange={(e) => setNoOfQuestion(e.target.value)}
        value={noOfQuestion}
      />
      <Input
        placeholder="Enter No. of Multiple Answer"
        className=""
        onChange={(e) => setNoOfMQuestion(e.target.value)}
        value={noOfMQuestion}
      />
      <Input
        className=""
        placeholder="Enter No. of Yes No"
        onChange={(e) => setNoOfYNQuestion(e.target.value)}
        value={noOfYNQuestion}
      />
      {+noOfMQuestion + +noOfYNQuestion > +noOfQuestion ? (
        <p className="font-semibold text-red-500 text-sm">
          Total questions exceed allowed limit <b>{noOfQuestion}</b>
        </p>
      ) : null}

      {/* TODO handle if no of question is lesser then total */}
      {/* {+noOfMQuestion + +noOfYNQuestion < +noOfQuestion ? (
        <p className="font-semibold text-red-500 text-sm">
          You Need To Add{" "}
          {+noOfMQuestion > +noOfYNQuestion
            ? +noOfMQuestion - +noOfYNQuestion
            : +noOfYNQuestion - +noOfMQuestion}{" "}
          More
        </p>
      ) : null} */}
      <Button
        onClick={() =>
          goToNext(
            {
              numberOfQuestion: noOfQuestion,
              numberOfYNQuestion: noOfYNQuestion,
              numberOfMQuestion: noOfMQuestion,
              title: title,
              createdAt: new Date().toLocaleDateString(),
            },
            steps.QUESTION_SELECTION
          )
        }
        disabled={
          +noOfMQuestion + +noOfYNQuestion > +noOfQuestion
            ? true
            : +noOfMQuestion + +noOfYNQuestion < +noOfQuestion
            ? true
            : false
        }
        type="submit"
        variant="secondary"
        className="mt-4 cursor-pointer "
      >
        Next
      </Button>
    </section>
  );
};

const MultipleAnswerQuestionComponent = ({ goToNext, index, total }) => {
  const [question, setQuestion] = useState("");
  const [answerA, setAnswerA] = useState("");
  const [answerB, setAnswerB] = useState("");
  const [answerC, setAnswerC] = useState("");
  const [answerD, setAnswerD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  return (
    <section className="flex flex-col min-w-[400px] gap-4">
      <h1 className="text-3xl font-semibold text-slate-950 dark:text-slate-50">
        {" "}
        Question ({index + 1}/{total})
      </h1>
      <Input
        className="text-slate-950 dark:text-slate-50"
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
      />
      <Input
        className="text-slate-950 dark:text-slate-50"
        onChange={(e) => setAnswerA(e.target.value)}
        placeholder="Answer A"
      />
      <Input
        className="text-slate-950 dark:text-slate-50"
        onChange={(e) => setAnswerB(e.target.value)}
        placeholder="Answer B"
      />
      <Input
        className="text-slate-950 dark:text-slate-50"
        onChange={(e) => setAnswerC(e.target.value)}
        placeholder="Answer C"
      />
      <Input
        className="text-slate-950 dark:text-slate-50"
        onChange={(e) => setAnswerD(e.target.value)}
        placeholder="Answer D"
      />
      <Input
        className="text-slate-950 dark:text-slate-50"
        onChange={(e) => setCorrectAnswer(e.target.value)}
        placeholder="Correct Answer"
      />
      <Button
        type="submit"
        variant="secondary"
        className="mt-4 cursor-pointer "
        onClick={() =>
          goToNext(
            {
              type: steps.MULTIPLE_ANSWER_QUESTION,
              question: question,
              A: answerA,
              B: answerB,
              C: answerC,
              D: answerD,
              correct: correctAnswer,
            },
            steps.MULTIPLE_ANSWER_QUESTION
          )
        }
      >
        Next
      </Button>
    </section>
  );
};
const YesNoQuestionComponent = ({ goToNext, index, total }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  return (
    <section className="flex flex-col min-w-[400px] gap-4">
      <h1 className="text-3xl font-semibold text-slate-950 dark:text-slate-50">
        {" "}
        Question ({index}/{total})
      </h1>
      <Input
        value={question}
        className="text-slate-950 dark:text-slate-50"
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
      />
      <Input
        className="text-slate-950 dark:text-slate-50"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Correct Answer True/False "
      />

      <Button
        type="submit"
        variant="secondary"
        className="mt-4 cursor-pointer "
        onClick={() =>
          goToNext(
            {
              type: steps.YES_NO_QUESTION,
              question: question,
              answer: answer,
            },
            steps.YES_NO_QUESTION
          )
        }
      >
        Next
      </Button>
    </section>
  );
};

const DoneQuestionCreation = ({ goToNext }) => {
  const [prevStepData, _] = useContext(QuestionStepContext);

  return (
    <section className="flex flex-col gap-3 ">
      <h1 className="text-4xl font-semibold text-slate-950 dark:text-slate-50">
        Done -{" "}
      </h1>
      <p className="font-semibold text-slate-950 dark:text-slate-50">
        Number of Questions:{" "}
        {prevStepData[steps.QUESTION_SELECTION]?.numberOfQuestion}
      </p>
      <p className="font-semibold text-slate-950 dark:text-slate-50">
        Number of Multiple Answer Questions:{" "}
        {prevStepData[steps.QUESTION_SELECTION]?.numberOfMQuestion}
      </p>
      <p className="font-semibold text-slate-950 dark:text-slate-50">
        Number of Yes/No Questions:{" "}
        {prevStepData[steps.QUESTION_SELECTION]?.numberOfYNQuestion}
      </p>

      {/* <Link variants="link" to="/papers" className="cursor-pointer mt-3">
        <Button className="w-full">Go All Papers</Button>
      </Link> */}
      <Button onClick={() => goToNext()}>Next</Button>
    </section>
  );
};

const QuestionFlowContentAndPages = () => {
  const [prevStepData, _] = useContext(QuestionStepContext);

  let mul = [];
  for (
    let i = 0;
    i < +prevStepData[steps.QUESTION_SELECTION]?.numberOfMQuestion;
    i++
  ) {
    mul.push(0);
  }

  let yes_no = [];
  for (
    let i = 0;
    i < +prevStepData[steps.QUESTION_SELECTION]?.numberOfYNQuestion;
    i++
  ) {
    yes_no.push(0);
  }

  return (
    <div className="flex items-center justify-center h-full">
      <QuestionCreationFlow>
        <NumberOfQuestion />
        {mul.map((_, i) => (
          <MultipleAnswerQuestionComponent
            key={i}
            index={i}
            total={mul.length}
          />
        ))}
        {yes_no.map((_, i) => (
          <YesNoQuestionComponent key={i} index={i} total={yes_no.length} />
        ))}
        <DoneQuestionCreation />
      </QuestionCreationFlow>
    </div>
  );
};

export default QuestionFlowContentAndPages;
