import { Crane } from "../mod.ts";

const crane = new Crane(await Deno.readTextFile("./test.yaml"));
console.log(crane.instance);