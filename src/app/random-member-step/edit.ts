import { Description } from "./view/description";
import { SelectChannel } from "./view/channel-select";
import { WorkflowStepEditMiddleware } from "@slack/bolt/dist/WorkflowStep";

export const EditStep = (): WorkflowStepEditMiddleware => {
  /* @ts-ignore */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return async ({ ack, step, configure }) => {
    ack();

    console.log("edit step: ", step);
    const channel = step.inputs?.channel?.value ?? undefined;

    configure({
      blocks: [...Description(), ...SelectChannel({ channel })],
    });
  };
};
