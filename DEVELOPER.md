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
( cd ./packages/db && pnpm db:init )

# Seed the database
pnpm db:seed

# Open the Convex dashboard
pnpm db:dashboard

# Deploy BaaS services
pnpm deploy --filter @acme/db

# Start the development server
pnpm dev --filter @acme/db
pnpm dev --filter @acme/web
# or, run all services
pnpm dev
```
