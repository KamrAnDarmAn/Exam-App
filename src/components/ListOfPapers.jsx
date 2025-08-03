import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { QuestionStepContext } from "../contexts/QuestionStep";
import { useListOfPapers } from "../contexts/list-of-papers";

const invoices = [
  {
    invoice: "INV001",
    title: "10th class",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    title: "14th class",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    title: "CS",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    title: "NETWORK",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    title: "DBA",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    title: "ENGLISH",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    title: "MATH",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const ListOfPapers = () => {
  const [stepsData, _] = useContext(QuestionStepContext);
  const [questions, setQuestions] = useListOfPapers();

  return (
    <section className="flex flex-col w-full items-end justify-center gap-3 text-slate-950 dark:text-slate-50">
      <Link to="/create-paper">
        <Button className="">Create</Button>
      </Link>
      <Table>
        <TableCaption>A list of your recent Papers.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {questions &&
            questions.length > 0 &&
            questions.map((question) => (
              <TableRow key={question.info.title}>
                <TableCell className="font-medium">
                  {question.info.title}
                </TableCell>
                <TableCell>Active</TableCell>
                <TableCell>{question.info.createdAt}</TableCell>
                <TableCell className="text-right">
                  <Button className="mx-2" variant="destructive" size="sm">
                    Delete
                  </Button>
                  <Link to={`/papers/${question.info.title}`}>
                    <Button size={"sm"}>Take</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{invoices.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </section>
  );
};

export default ListOfPapers;
