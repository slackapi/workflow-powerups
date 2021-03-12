import { WorkflowStepExecuteMiddleware } from "@slack/bolt/dist/WorkflowStep";

export const ExecuteStep = (): WorkflowStepExecuteMiddleware => {
  /* @ts-ignore */
  return async ({ step, complete, fail }) => {
    console.log("step execution", step);

    const strings: string[] = step?.inputs?.strings?.value ?? [];

    if ((strings || []).length === 0) {
      return fail({ error: { message: "No strings were provided" } });
    }

    const randomString = strings[Math.floor(Math.random() * strings.length)];

    await complete({
      outputs: {
        randomString,
      },
    });
  };
};
