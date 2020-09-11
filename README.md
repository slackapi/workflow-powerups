# workflow-powerups

A Slack App with a collection of Workflow Steps. It's written with [Bolt for JS](https://slack.dev/bolt) and is written in Typescript.

## Development

You'll need a `.env` file with some of your Slack App credentials

```.env
export SLACK_BOT_TOKEN="..."
export SLACK_SIGNING_SECRET="..."
export SLACK_VERIFICATION_TOKEN="..."
```

## Install Dependencies

```
npm install
```

## Start Typescript Compiler
You can run the Typescript compiler in watch mode.

```
npm run watch-ts
```

## Start Node server
You can start the node server in watch mode.

```
npm run watch-node
```

## Linting & Formatting

[ESLint](https://eslint.org/) is used as a linter and can be with the following command, or integrated into your IDE.
```
npm run lint
```

[Prettier](https://prettier.io/) is used as a formatted and can be run with the following command, or integrated into your IDE.
```
npm run format
```

## Deployment
The app is compiled into the `./out` directory, and the main entrypoint file lives at `./out/server.js`. It can be started with a normal `npm start`
