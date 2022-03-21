type StepType = "FOLD" | "UNFOLD";

export type Step = {
  [key in StepType]: {
    FROM?: {
      x: number;
      y: number;
    };
    TO?: {
      x: number;
      y: number;
    };
  };
};
