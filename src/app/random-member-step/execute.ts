import { WorkflowStepExecuteMiddleware } from "@slack/bolt/dist/WorkflowStep";
import { App } from "@slack/bolt";

export const ExecuteStep = (bolt: App): WorkflowStepExecuteMiddleware => {
  /* @ts-ignore */
  return async ({ context, step, complete, fail }) => {
    console.log("step execution", step);

    const channel = step?.inputs?.channel?.value ?? "";
    if (!channel) {
      return fail({ error: { message: "No channel was provided :(" } });
    }

    try {
      const result = await bolt.client.conversations.members({
        token: context.botToken,
        channel,
      });

      /* @ts-ignore */
      const members = <string[]>result.members || [];
      if (members.length === 0) {
        return fail({ error: { message: "No members found :(" } });
      }

      const randomChannelMember = members[Math.floor(Math.random() * members.length)];
      console.log("random channel member", randomChannelMember);

      complete({
        outputs: {
          randomChannelMember,
        },
      });
    } catch (e) {
      return fail({ error: { message: "Error fetching channel members" } });
    }
  };
};
