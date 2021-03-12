import { KnownBlock } from "@slack/types";

export interface StringInputProps {
  value: string;
  label: string;
  index: number;
}

export const StringInput = ({ value = "", label, index }: StringInputProps): KnownBlock[] => {
  return [
    {
      type: "input",
      block_id: `text_${index}`,
      element: {
        action_id: `text_${index}`,
        type: "plain_text_input",
        initial_value: value,
      },
      label: {
        type: "plain_text",
        text: label,
      },
    },
  ];
};
