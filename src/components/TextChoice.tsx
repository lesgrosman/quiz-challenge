import { QuizStore, useQuizStore } from "@/store/useQuizStore";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const TextChoice: React.FC = () => {
  const [value, setValue] = useState("");

  const nextStep = useQuizStore((s: QuizStore) => s.nextStep);

  const handleNext = () => nextStep(value);

  return (
    <>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Your answer"
        className="max-w-xl"
      />
      <div className="flex justify-start">
        <Button onClick={handleNext}>Next</Button>
      </div>
    </>
  );
};

export default TextChoice;
