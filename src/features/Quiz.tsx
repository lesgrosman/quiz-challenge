import Summary from "./Summary/Summary";
import { QuizStore, useQuizStore } from "@/store/useQuizStore";
import QuizQuestion from "./QuizQuestion";
import { useShallow } from "zustand/react/shallow";

const storeSelectors = (s: QuizStore) => ({
  isQuizFinished: s.isFinished,
  allQuestions: s.allQuestions,
});

const Quiz: React.FC = () => {
  const { allQuestions, isQuizFinished } = useQuizStore(
    useShallow(storeSelectors)
  );

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
