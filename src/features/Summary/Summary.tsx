import { Button } from "@/components/ui/button";
import { QuizStore, useQuizStore } from "@/store/useQuizStore";
import { useShallow } from "zustand/react/shallow";
import SummaryDetails from "./SummaryDetails";

const storeSelectors = (s: QuizStore) => ({
  answers: s.answers,
  questions: s.quizQuestions,
  restartQuiz: s.restartQuiz,
});

const Summary: React.FC = () => {
  const { answers, questions, restartQuiz } = useQuizStore(
    useShallow(storeSelectors)
  );

  const correctAnswers = questions.filter(
    (question, i) => question.correct_answer === answers[i]
  ).length;

  const wrongAnswers = questions.length - correctAnswers;

  const score = ((correctAnswers / questions.length) * 100).toFixed(1);

  return (
    <div>
      <div className="mb-8 paper">
        <h2 className="text-4xl font-bold mb-6">Summary</h2>
        <p>Correct: {correctAnswers}</p>
        <p>Wrong: {wrongAnswers}</p>

        <p>Questions answered: {questions.length}</p>
        <p>Final score: {score}%</p>

        <div className="flex justify-end mt-4">
          <Button onClick={restartQuiz}>Restart quiz</Button>
        </div>
      </div>

      <SummaryDetails questions={questions} answers={answers} />
    </div>
  );
};

export default Summary;
