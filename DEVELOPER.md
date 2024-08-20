# Developer Guide

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/installation)

### Setup

```sh
# Install dependencies
pnpm install

# Copy environment files
( cd ./apps/web; cp ./.env.local.sample ./.env.local )

# Setup Convex environment
( cd ./packages/db && pnpm dev )

# Seed the database
pnpm db:seed

# Deploy BaaS services
pnpm deploy --filter @acme/db

# Start the development server
pnpm dev --filter @acme/web
pnpm dev --filter @acme/db
# or, run all services
pnpm dev
```
