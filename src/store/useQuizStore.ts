import { getRandomQuestions } from "@/lib/utils";
import { Question } from "@/utils/types";
import { create } from "zustand";

export type QuizStore = {
  allQuestions: Question[];
  quizQuestions: Question[];
  answers: Record<number, string>;
  currentQuestionIndex: number;
  isFinished: boolean;
  setQuestions: (questions: Question[]) => void;
  nextStep: (answer: string) => void;
  restartQuiz: () => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  allQuestions: [],
  quizQuestions: [],
  answers: {},
  currentQuestionIndex: 0,
  isFinished: false,
  setQuestions: (questions: Question[]) =>
    set(() => ({
      allQuestions: questions,
      quizQuestions: getRandomQuestions(questions, 10),
    })),
  nextStep: (answer: string) =>
    set((state) => {
      const newAnswers = {
        ...state.answers,
        [state.currentQuestionIndex]: answer,
      };
      if (state.quizQuestions.length === state.currentQuestionIndex + 1) {
        return {
          answers: newAnswers,
          isFinished: true,
        };
      } else {
        return {
          answers: newAnswers,
          currentQuestionIndex: state.currentQuestionIndex + 1,
        };
      }
    }),
  restartQuiz: () =>
    set((state) => ({
      isFinished: false,
      currentQuestionIndex: 0,
      quizQuestions: getRandomQuestions(state.allQuestions, 10),
      answers: {},
    })),
}));
