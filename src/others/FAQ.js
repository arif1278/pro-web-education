import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import Question from "../others/Quiestion";

const FAQ = () => {
  const questions = useLoaderData();
  return (
    <>
      <Header />
      <div className="bg-orange-300 top-0">
        <h2 className="text-2xl font-semibold my-5 sm:text-4xl text-center">FAQ</h2>
        {questions.map((q) => (
          <Question key={q.ide} q={q} />
        ))}
      </div>
    </>
  );
};

export default FAQ;