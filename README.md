# Web Portfolio

A modern web portfolio application built as a monorepo with Turborepo, featuring a React frontend and serverless API.

## Prerequisites

- [Bun](https://bun.sh/) (preferred package manager)
- Node.js 18+
- Vercel account

## Quick Start

```bash
# Install dependencies
bun install

# Start server
bun run start
```

## Deployment

This project is optimized for Vercel deployment:

1. Install Vercel CLI: `npm i -g vercel`
2. Login to Vercel: `vercel login`
3. Deploy: `vercel`

The project uses Vercel serverless functions in the `/api` folder to serve resume data, which replaces the Express backend in production.

## Project Structure

- `apps/frontend`: React application (Vite + TailwindCSS)
- `api/`: Serverless functions for Vercel deployment
- `packages/`: Shared UI components and config
- `apps/backend`: Backend in Express
