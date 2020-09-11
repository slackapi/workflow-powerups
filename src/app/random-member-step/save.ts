import { WorkflowStepSaveMiddleware } from "@slack/bolt/dist/WorkflowStep";

export const SaveStep = (): WorkflowStepSaveMiddleware => {
  /* @ts-ignore */
  return async ({ ack, step, view, update }) => {
    ack();

    console.log("save step: ", step);

    const channel = view.state.values?.channel_block?.channel_action?.selected_channel ?? "";

    update({
      inputs: {
        channel: {
          value: channel,
        },
      },
      outputs: [
        {
          name: "randomChannelMember",
          type: "user",
          label: "Random Channel Member",
        },
      ],
    });
  };
};
