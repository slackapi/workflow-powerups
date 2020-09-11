import { KnownBlock } from "@slack/types";

export interface SelectChannelProps {
  channel: string;
}

export const SelectChannel = ({ channel }: SelectChannelProps): KnownBlock[] => {
  return [
    {
      type: "input",
      block_id: "channel_block",
      element: {
        action_id: "channel_action",
        type: "channels_select",
        initial_channel: channel,
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
  ];
};
