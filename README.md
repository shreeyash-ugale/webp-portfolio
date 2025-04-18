# Web Portfolio

A modern web portfolio application built as a monorepo with Turborepo, featuring a React frontend and Node.js backend.

## Project Structure

This project is organized as a monorepo with the following components:

- `apps/frontend`: React application built with Vite and TailwindCSS
- `apps/backend`: Express API server providing resume data
- `api/`: Serverless functions for Vercel deployment

## Setup & Development

### Prerequisites

- [Bun](https://bun.sh/) (package manager)
- Node.js 18+

### Install Dependencies

```bash
bun install
```

### Development

Run both frontend and backend in development mode:

```bash
bun run dev
```

Or run them separately:

```bash
# Frontend only
bun run dev:frontend

# Backend only
bun run dev:api
```


### Features

- React frontend with TailwindCSS styling
- API backend for serving resume data
- Monorepo management with Turborepo
- Unified Vercel deployment

## CORS Configuration

The API is configured to accept requests from:
- https://webp-portfolio-frontend.vercel.app
- http://localhost:5173 (development)
