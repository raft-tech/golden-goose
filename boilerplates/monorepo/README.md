# CEDAR Challenge Mockup1 - AKA COVID Helper

Frontend build status: status badge will go here

Backend build status: status badge will go here

# Problem Description

This is where we will put the overall description of the problem to be solved

# MVP

This is where we will define to goals, feature set, and success criteria for an MVP release

# User Research

This will be an overview and links to user research plan and results

# Getting Started

## Frontend

See more detailed instructions in `frontend` folder

1. In order to interface with the VA API an API key is needed. You can request one [here](https://developer.va.gov/apply).
1. Once you have an API key you'll need to add it to your local repo.
1. `cd frontend/`
1. `touch .env`
1. Add `REACT_APP_VA_API_KEY=<YOUR API KEY>` to the `.env` file<br>
  **Note:** For the name of the variable must be prefixed with REACT_APP_ in order for webpack to properly add the value in the build.

1. `yarn`
1. `yarn start`
1. Visit [http://localhost:3000/](http://localhost:3000/)

## Backend

You will need a MongoDB running locally to run the backend. [Install instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) The TL;DR version bellow:

```
# add tap to brew
brew tap mongodb/brew

# install mongodb on mac
brew install mongodb-community

# start/stop
brew services start mongodb-community
brew services stop mongodb-community

# verify mongodb running
ps aux | grep -v grep | grep mongod

# start a db
mongo
```

After MongoDB is up, start the backend:
1. `cd backend/`
1. `touch .env`
  1. Add `CONNECTION_STRING` to `.env` **(required)**: This is the connection string to a MongoDB database.
  1. Add `PORT` to `.env` *(optional)*: The port to serve the app from.
1. `yarn`
1. `yarn start:dev`

## How to test frontend/backend

Run the command `yarn test`

## Docker

The `frontend` and `backend` portions build their own docker containers. To build:

```
docker build .
```

## Docker Compose

To run both `frontend` and `backend`, run:

```
docker-compose up
```
