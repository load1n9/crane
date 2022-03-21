import { Instance } from "./Instance.ts";
import type { Step } from "./types.ts";
import { parse} from "https://deno.land/std@0.130.0/encoding/yaml.ts";

export class Crane {
    // deno-lint-ignore no-explicit-any
    data: { [key: string]: any };
    w: number;
    h: number;
    steps: Step[];
    constructor(file: string) {
        // deno-lint-ignore no-explicit-any
        this.data = parse(file) as { [key: string]: any };
        this.w = this.data.HEADER.DIMENSIONS.W;
        this.h = this.data.HEADER.DIMENSIONS.H;
        this.steps = this.data.STEPS;
    }
    get instance(): Instance {
        return new Instance(this.w, this.h, this.steps);
    }
}