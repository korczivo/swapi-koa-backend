# SWAPI -> Koa + Postgres + TypeORM + Typescript

## Requirements

- Node v19.4.0 in your environment or nvm installed, 
- Docker with docker-compose.

## How to run project

### Create & Start Postgres Docker Container
In the repository root directory (where docker-compose.yaml exists), run: docker-compose up -d

This will create the database container from the official postgres Dockerhub image and configure a test database.

Once created, the environment can be controlled with docker-compose start and docker-compose stop. To entirely remove it, run docker-compose down.

### Run Web Server

If you are using NVM you can use command below

```
nvm use
```

Install dependencies
```
yarn install
```

Start project
```
yarn dev
```

Run tests
```
yarn test
```

### Manually testing using Postman

You can use postman collection from postman.json, and import that into your postman collection.

## Notes
This is just a starting point example, and is not production-ready. Because of this is just an exercise you can use envs from .env.example file. Also in the docker-compose file, there are public password, of course in real life project you musn't do this! 
