export enum QuestionType {
  MULTIPLE = "multiple",
  BOOLEAN = "boolean",
  TEXT = "text",
}

export enum QuestionDifficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const apiResultsUrl = new URL("results", import.meta.env.VITE_API_URL);
