import BooleanChoice from "@/components/BooleanChoice";
import MultipleChoice from "@/components/MultipleChoice";
import TextChoice from "@/components/TextChoice";
import { useQuizStore, QuizStore } from "@/store/useQuizStore";
import { QuestionType } from "@/utils/constants";
import { useShallow } from "zustand/react/shallow";

const storeSelectors = (s: QuizStore) => ({
  quizQuestions: s.quizQuestions,
  currentQuestionIndex: s.currentQuestionIndex,
});

const QuizQuestion: React.FC = () => {
  const { currentQuestionIndex, quizQuestions } = useQuizStore(
    useShallow(storeSelectors)
  );

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const totalQuestions = quizQuestions.length;

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center mb-8">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </h1>

      <div className="flex flex-col gap-6 p-4 paper">
        <p className="text-xl font-semibold">{currentQuestion.question}</p>

        {currentQuestion.type === QuestionType.BOOLEAN && (
          <BooleanChoice key={currentQuestionIndex} />
        )}
        {currentQuestion.type === QuestionType.TEXT && (
          <TextChoice key={currentQuestionIndex} />
        )}
        {currentQuestion.type === QuestionType.MULTIPLE && (
          <MultipleChoice
            key={currentQuestionIndex}
            question={currentQuestion}
          />
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;
