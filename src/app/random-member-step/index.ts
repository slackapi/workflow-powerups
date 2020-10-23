import { App, WorkflowStep } from "@slack/bolt";

export const configureRandomMemberStep = (app: App): void => {
  const step = new WorkflowStep("random_member", {
    edit: [
      async ({ ack, step, configure }) => {
        ack();

        console.log("edit step", step);

        const channelId = step?.inputs?.channelId?.value ?? undefined;

        configure({
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: "This step selects a random member of the provided channel",
              },
            },
            {
              type: "input",
              block_id: "channel_block",
              element: {
                action_id: "channel_action",
                type: "channels_select",
                initial_channel: channelId,
              },
              label: {
                type: "plain_text",
                text: "Select a channel",
              },
              hint: {
                type: "plain_text",
                text: "A random user of this channel will be selected as an output",
              },
            },
          ],
        });
      },
    ],
    save: [
      async ({ ack, step, view, update }) => {
        ack();

        console.log("save step: ", step, view.state.values);

        const channelId = view.state.values?.channel_block?.channel_action?.selected_channel ?? "";

        update({
          inputs: {
            channelId: {
              value: channelId,
            },
          },
          outputs: [
            {
              name: "random_member",
              type: "user",
              label: "Random Member",
            },
          ],
        });
      },
    ],
    execute: [
      async ({ context, step, complete, fail }) => {
        console.log("execute step: ", step);

        const channelId = step?.inputs?.channelId?.value ?? null;
        if (!channelId) {
          console.log("no channel id provided");
          fail({ error: { message: "no channel id provided" } });
          return;
        }

        const result = await app.client.conversations.members({
          token: context.botToken,
          channel: channelId,
        });

        const members: string[] = <string[]>result?.members || [];

        const randomChannelMember = members[Math.floor(Math.random() * members.length)];

        complete({
          outputs: {
            random_member: randomChannelMember,
          },
        });
      },
    ],
  });

  app.step(step);
};
