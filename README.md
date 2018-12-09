# WordPress+Nuxt.js

An experiment with the WordPress JSON API and Nuxt.js


## Requirements

- [Docker](https://store.docker.com/search?type=edition&offering=community)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org)


## Development

### Start backend

```bash
cd backend

# Start MySQL and WordPress docker containers
docker-compose up
```

### Start frontend

```bash
# Start Nuxt.js frontend
cd frontend

# npm
npm install
npm run dev

# Yarn
yarn install
yarn run dev
```
