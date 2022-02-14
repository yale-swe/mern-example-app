# Yale SWE MERN Example App

## Overview

The MERN stack is an extremely popular development stack, and is composed of the following components:

- MongoDB (NoSQL Database)
- Express (Backend Framework)
- React (Frontend Framework)
- Node.js (Backend Runtime)

This application is a MERN-stack application written in TypeScript. It allows you to create and delete Doggos! Run this app locally and experiment to learn the stack better. If you also want to copy this app as the base code for your project, feel free to do so!

## Running This App Locally

To run this app locally, there are some prerequisites:

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Node v16.13.2](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

Once you installed all the stuff above, follow these directions:

1. Run `yarn install-all`. This will install all of the necessary npm packages.
2. Open a terminal window and run `yarn dev:env`. This will run a MongoDB container on your local machine. Keep this terminal open.
3. Open another terminal window and run `yarn dev:server`. This will run the REST API on port `4000`.
4. Open another terminal window and run `yarn dev:client`. This wll serve the client on port `3000`.

After completing the steps above, you should be able to go to `http://localhost:3000` on your browser and see the app. Have fun making doggos!
