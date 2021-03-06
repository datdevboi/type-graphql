import { plainToClass } from "class-transformer";

import { Cook } from "./cook.type";

export const sampleCooks = [
  createCook({
    name: "Gordon Ramsay",
    yearsOfExperience: 21,
  }),
  createCook({
    name: "Kim Kardashian",
    yearsOfExperience: 1,
  }),
];

function createCook(cookData: Partial<Cook>): Cook {
  return plainToClass(Cook, cookData);
}
