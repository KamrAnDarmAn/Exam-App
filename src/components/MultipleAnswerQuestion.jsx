import { toast } from "sonner";
import { Button } from "./ui/button";
const Question = ({ multiple_answer_question, answerFn, info }) => {
  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   console.log(info);
  //   const x = 100 / (+info.numberOfMQuestion + 2 * +info.numberOfYNQuestion);

  //   const markPerMultiple = x;
  //   const markPerYesNo = 2 * x;

  //   console.log(x);

  //   // const totalMarks =
  //   //   noOfMQuestion * markPerMultiple + noOfYNQuestion * markPerYesNo;

  //   // console.log(multiple_answer_question);

  //   if (e.target[0].checked && multiple_answer_question.correct === "A") {
  //     answerFn(markPerMultiple);
  //     toast("Correct Answer!");
  //   } else if (
  //     e.target[1].checked &&
  //     multiple_answer_question.correct === "B"
  //   ) {
  //     answerFn(markPerMultiple);
  //     toast("Correct Answer!");
  //   } else if (
  //     e.target[2].checked &&
  //     multiple_answer_question.correct === "C"
  //   ) {
  //     answerFn(markPerMultiple);
  //     toast("Correct Answer!");
  //   } else if (
  //     e.target[3].checked &&
  //     multiple_answer_question.correct === "D"
  //   ) {
  //     answerFn(markPerMultiple);
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

  const submitHandler = (e) => {
    e.preventDefault();

    const { numberOfMQuestion, numberOfYNQuestion } = info;
    const x = 100 / (+numberOfMQuestion + 2 * +numberOfYNQuestion);
    const markPerMultiple = x;
    const markPerYesNo = 2 * x;

    const selectedOption = ["A", "B", "C", "D"].find(
      (_, index) => e.target[index].checked
    );

    if (selectedOption === multiple_answer_question.correct) {
      answerFn(markPerMultiple);
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

  return (
    <section>
      <h1 className="text-3xl font-semibold mb-5">
        {multiple_answer_question.question}
      </h1>
      <form onSubmit={(e) => submitHandler(e)} className="flex flex-col">
        <label id="A" className="flex gap-4 text-[1.2rem]">
          <input type="radio" name="Q" id="A" />
          A: {multiple_answer_question.A}
        </label>
        <label id="B" className="flex gap-4 text-[1.2rem]">
          <input type="radio" name="Q" id="B" />
          B: {multiple_answer_question.B}
        </label>
        <label id="C" className="flex gap-4 text-[1.2rem]">
          <input type="radio" name="Q" id="C" />
          C: {multiple_answer_question.C}
        </label>
        <label id="D" className="flex gap-4 text-[1.2rem]">
          <input type="radio" name="Q" id="D" />
          D: {multiple_answer_question.D}
        </label>
        <Button
          type="submit"
          variant="secondary"
          className="mt-4 cursor-pointer "
        >
          Sure?
        </Button>
      </form>
    </section>
  );
};

export default Question;
