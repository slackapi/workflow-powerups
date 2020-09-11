import { App, WorkflowStep } from "@slack/bolt";
import { EditStep } from "./edit";
import { SaveStep } from "./save";
import { ExecuteStep } from "./execute";

export const configureRandomMemberStep = (bolt: App): void => {
  const step = new WorkflowStep("random_member", {
    edit: [EditStep()],
    save: [SaveStep()],
    execute: [ExecuteStep(bolt)],
  });

  bolt.step(step);
};
