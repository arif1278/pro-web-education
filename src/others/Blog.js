import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import Question from "../others/Quiestion";

const Blog = () => {
  const questions = useLoaderData();
  return (
    <>
      <Header />
      <div className="bg-orange-300 top-0">
        <h2 className="text-2xl font-bold my-5 sm:text-4xl text-center text-green-600 hover:text-blue-500 "><i>Blog</i></h2>
        {questions.map((q) => (
          <Question key={q.ide} q={q} />
        ))}
      </div>
    </>
  );
};

export default Blog;