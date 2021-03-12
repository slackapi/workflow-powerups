import { App, WorkflowStep } from "@slack/bolt";
import { EditStep } from "./edit";
import { SaveStep } from "./save";
import { ExecuteStep } from "./execute";

export const configureRandomStringStep = (bolt: App): void => {
  const step = new WorkflowStep("random_string", {
    edit: [EditStep()],
    save: [SaveStep()],
    execute: [ExecuteStep()],
  });

  bolt.step(step);
};
