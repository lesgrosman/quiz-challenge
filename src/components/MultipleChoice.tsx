import { Question } from "@/utils/types";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { shuffleArray } from "@/lib/utils";
import { QuizStore, useQuizStore } from "@/store/useQuizStore";
import { Button } from "./ui/button";
import { useMemo, useState } from "react";

interface Props {
  question: Question;
}

const MultipleChoice: React.FC<Props> = ({ question }) => {
  const [value, setValue] = useState("");

  const nextStep = useQuizStore((s: QuizStore) => s.nextStep);
  const handleNext = () => {
    if (value) {
      nextStep(value);
    }
  };

  // correct option will be always in different place
  const shuffledOptions = useMemo(() => {
    return shuffleArray([
      ...(question.incorrect_answers ?? []),
      question.correct_answer,
    ]);
  }, [question.correct_answer, question.incorrect_answers]);

  return (
    <>
      <RadioGroup value={value} onValueChange={(value) => setValue(value)}>
        {shuffledOptions.map((option, i) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`${i}`} />
            <Label htmlFor={`${i}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
      <div className="flex justify-start">
        <Button onClick={handleNext}>Next</Button>
      </div>
    </>
  );
};

export default MultipleChoice;
