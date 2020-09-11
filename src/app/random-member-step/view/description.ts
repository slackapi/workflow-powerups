import { KnownBlock } from "@slack/types";

export const Description = (): KnownBlock[] => {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "This step selects a random member of the provided channel",
      },
    },
  ];
};
