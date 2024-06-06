import { cn, shuffleArray } from "@/lib/utils";
import { QuestionType } from "@/utils/constants";
import { Question } from "@/utils/types";

interface Props {
  questions: Question[];
  answers: Record<number, string>;
}

const SummaryDetails: React.FC<Props> = ({ questions, answers }) => {
  return (
    <div className="paper">
      <h2 className="text-4xl font-bold mb-6">Correct Answers</h2>

      <ol>
        {questions.map((question, i) => {
          const shuffledOptions = shuffleArray([
            ...(question.incorrect_answers ?? []),
            question.correct_answer,
          ]);

          return (
            <li key={question.question} className="mb-2">
              <p>
                {i + 1}. {question.question}
              </p>
              {question.type === QuestionType.TEXT ? (
                <div className="ml-6 flex gap-2">
                  <span className="text-green-600">
                    {question.correct_answer}
                  </span>
                  <span>Your answer:</span>
                  <span
                    className={
                      question.correct_answer === answers[i]
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {answers[i]}
                  </span>
                </div>
              ) : (
                <ul className="ml-6">
                  {shuffledOptions.map((option) => {
                    const isCorrectAnswer = option === question.correct_answer;
                    const selectedAnswer = option === answers[i];
                    const isChosenWrongAnswer =
                      selectedAnswer && !isCorrectAnswer;

                    return (
                      <li
                        key={option}
                        className={cn({
                          "text-green-600": isCorrectAnswer,
                          "font-bold": selectedAnswer,
                          "text-red-600": isChosenWrongAnswer,
                        })}
                      >
                        {option}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default SummaryDetails;
