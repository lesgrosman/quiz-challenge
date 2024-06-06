import Summary from "./Summary/Summary";
import { QuizStore, useQuizStore } from "@/store/useQuizStore";
import QuizQuestion from "./QuizQuestion";
import { useShallow } from "zustand/react/shallow";
import { useEffect } from "react";
import { Question } from "@/utils/types";
import { apiResultsUrl } from "@/utils/constants";

const storeSelectors = (s: QuizStore) => ({
  isQuizFinished: s.isFinished,
  allQuestions: s.allQuestions,
  setQuestions: s.setQuestions,
});

const Quiz: React.FC = () => {
  const { allQuestions, isQuizFinished, setQuestions } = useQuizStore(
    useShallow(storeSelectors)
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiResultsUrl);
      const results = await response.json();
      setQuestions(results as Question[]);
    };
    fetchData();
  }, [setQuestions]);

  if (allQuestions?.length === 0) {
    return (
      <h1 className="text-4xl text-center font-bold">There are no questions</h1>
    );
  }

  if (isQuizFinished) {
    return <Summary />;
  }

  return <QuizQuestion />;
};

export default Quiz;
