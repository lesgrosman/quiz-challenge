import { QuestionDifficulty, QuestionType } from "./constants";

export type Question = {
  category: string;
  type: QuestionType;
  difficulty: QuestionDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers?: string[];
};
