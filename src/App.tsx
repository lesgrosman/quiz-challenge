import { useEffect } from "react";
import Header from "./components/Header";
import Quiz from "./features/Quiz";
import "./index.css";
import { QuizStore, useQuizStore } from "./store/useQuizStore";
import questionsData from "@/data/questions.json";
import { Question } from "./utils/types";

const App = () => {
  const setQuestions = useQuizStore((s: QuizStore) => s.setQuestions);

  useEffect(() => {
    setQuestions(questionsData.results as Question[]);
  }, [setQuestions]);

  return (
    <div>
      <Header />
      <main className="max-w-3xl mx-auto py-16 px-8">
        <Quiz />
      </main>
    </div>
  );
};

export default App;
