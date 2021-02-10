export type Step = string;
export type Steps = Step[];
export type StepperDirection = "horizontal" | "vertical";
export type StepState = {
  description: string;
  completed: boolean;
  selected: boolean;
  highlighted: boolean;
}[];
