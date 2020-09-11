import { configureBoltApp } from "./app";

(async () => {
  const app = configureBoltApp();
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
