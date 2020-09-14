import { App } from "@slack/bolt";
import { configureRandomMemberStep } from "./random-member-step";

export const configureBoltApp = (): App => {
  const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
  });

  configureRandomMemberStep(app);

  return app;
};
