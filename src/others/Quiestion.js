import React from "react";

const Question = ({ q }) => {
  const { question, answer } = q;
  return (
    <section className=" text-white hover:font-bold">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <div className="space-y-4">
          <details className="w-full border border-gray-600 rounded-lg">
            <summary className="px-4 py-6 ">
              {question}
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4">{answer}</p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Question;