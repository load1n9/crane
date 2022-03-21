import { Step } from "./types.ts";

export class Instance {
  constructor(
      public w: number, 
      public h: number,
      public steps: Step[],
    ) {}
}
