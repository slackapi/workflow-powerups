import { Description } from "./view/description";
import { WorkflowStepEditMiddleware } from "@slack/bolt/dist/WorkflowStep";
import { StringInput } from "./view/string-input";

export const EditStep = (): WorkflowStepEditMiddleware => {
  /* @ts-ignore */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return async ({ ack, step, configure }) => {
    ack();

    console.log("edit step: ", step);
    const strings = step.inputs?.strings?.value ?? [];

    configure({
      blocks: [
        ...Description(),
        ...StringInput({ value: strings[0], label: "One", index: 1 }),
        ...StringInput({ value: strings[1], label: "Two", index: 2 }),
        ...StringInput({ value: strings[2], label: "Three", index: 3 }),
        ...StringInput({ value: strings[3], label: "Four", index: 4 }),
        ...StringInput({ value: strings[4], label: "Five", index: 5 }),
      ],
    });
  };
};
