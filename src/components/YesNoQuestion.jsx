import React from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

const YesNo = ({ yes_no_question, answerFn, info }) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const { numberOfMQuestion, numberOfYNQuestion } = info;
    const x = 100 / (+numberOfMQuestion + 2 * +numberOfYNQuestion);
    const markPerMultiple = x;
    const markPerYesNo = 2 * x;

    const selectedOption = ["true", "false"].find(
      (_, index) => e.target[index].checked
    );

    if (selectedOption === yes_no_question.answer.toLowerCase()) {
      answerFn(markPerYesNo);
      toast("Correct Answer!");
    } else {
      answerFn(0);
      toast("", {
        variant: "destructive",
        title: "Uh oh! Wrong!",
      });
    }

    e.target.reset();
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (e.target[0].checked && yes_no_question.answer === "A") {
  //     answerFn(yes_no_question.mark);
  //     toast("Correct Answer!");
  //   } else if (e.target[1].checked && yes_no_question.answer === "B") {
  //     answerFn(yes_no_question.mark);
  //     toast("Correct Answer!");
  //   } else {
  //     answerFn(0);
  //     toast("", {
  //       variant: "destructive",
  //       title: "Uh oh! Wrong!",
  //     });
  //   }
  //   e.target.reset();
  // };
  return (
    <form onSubmit={submitHandler} className="flex flex-col ">
      <h1 className="text-3xl font-semibold mb-5">
        {yes_no_question?.question}
      </h1>
      <label className="flex gap-3">
        <input
          type="radio"
          name="yes-no"
          className="flex gap-4 text-[1.2rem]"
        />
        True
      </label>
      <label className="flex gap-3">
        <input
          type="radio"
          name="yes-no"
          className="flex gap-4 text-[1.2rem]"
          id="yes-no"
        />
        False
      </label>
      <Button
        type="submit"
        variant="secondary"
        className="mt-4 cursor-pointer w-full"
      >
        Sure?
      </Button>
    </form>
  );
};

export default YesNo;
