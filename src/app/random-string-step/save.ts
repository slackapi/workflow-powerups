import { WorkflowStepSaveMiddleware } from "@slack/bolt/dist/WorkflowStep";

export const SaveStep = (): WorkflowStepSaveMiddleware => {
  /* @ts-ignore */
  return async ({ ack, step, view, update }) => {
    console.log("save step: ", step);

    const text1 = view.state.values?.text_1?.text_1.value ?? "";
    const text2 = view.state.values?.text_2?.text_2.value ?? "";
    const text3 = view.state.values?.text_3?.text_3.value ?? "";
    const text4 = view.state.values?.text_4?.text_4.value ?? "";
    const text5 = view.state.values?.text_5?.text_5.value ?? "";

    const strings: string[] = [
      (text1 || "").trim(),
      (text2 || "").trim(),
      (text3 || "").trim(),
      (text4 || "").trim(),
      (text5 || "").trim(),
    ].filter(Boolean);

    let errors: null | { text_1: string } = null;

    // Ensure we have at least 1 value, if not, attach an error to the first input block
    if (strings.length === 0) {
      errors = { text_1: "Please provide at least one string" };
    }

    if (errors) {
      return ack({
        response_action: "errors",
        errors,
      });
    }

    // ack the view submission, we're all good there
    ack();

    update({
      inputs: {
        strings: {
          value: strings,
        },
      },
      outputs: [
        {
          name: "randomString",
          type: "text",
          label: "Random String",
        },
      ],
      // Set a custom name for the step
      step_name: `Pick 1 of ${strings.length} strings`,
    });
  };
};
