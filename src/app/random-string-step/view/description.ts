import { KnownBlock } from "@slack/types";

export const Description = (): KnownBlock[] => {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text:
          "Add up to 5 values, one of which will be randomly selected when this step runs and output for use in subsequent steps.",
      },
    },
  ];
};
