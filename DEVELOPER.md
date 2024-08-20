# Developer Guide

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/installation)

### Setup

```sh
# Install dependencies
pnpm install

# Setup Convex environment
( cd ./packages/db && pnpm dev )

#
pnpm dev --filter @acme/web
```
