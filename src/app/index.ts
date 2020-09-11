import { App } from "@slack/bolt";

export const configureBoltApp = (): App => {
  const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
  });

  return app;
};
