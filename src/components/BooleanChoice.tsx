import { QuizStore, useQuizStore } from "@/store/useQuizStore";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Button } from "./ui/button";
import { useState } from "react";

const BooleanChoice: React.FC = () => {
  const [value, setValue] = useState("");

  const nextStep = useQuizStore((s: QuizStore) => s.nextStep);

  const handleNext = () => {
    if (value) {
      nextStep(value);
    }
  };

  return (
    <>
      <RadioGroup value={value} onValueChange={(value) => setValue(value)}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="True" id="true" />
          <Label htmlFor="true">True</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="False" id="false" />
          <Label htmlFor="false">False</Label>
        </div>
      </RadioGroup>
      <div className="flex justify-start">
        <Button onClick={handleNext}>Next</Button>
      </div>
    </>
  );
};

export default BooleanChoice;
