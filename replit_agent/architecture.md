# Architecture Overview

## Overview

This repository contains a full-stack web application built with TypeScript, comprising a React frontend and an Express backend with PostgreSQL database integration. The application is a personal portfolio website for Mayilanandhan D, featuring various sections including Home, About, Skills, Projects, Resume, and Contact.

## System Architecture

The application follows a modern client-server architecture with a clear separation between frontend and backend:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  React Client   │◄────►  Express Server │◄────►   PostgreSQL    │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Directory Structure

```
├── client/               # Frontend React application
│   ├── index.html        # HTML entry point
│   └── src/              # React source code
│       ├── components/   # Reusable React components
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utility functions and constants
│       ├── pages/        # Page components
│       └── providers/    # Context providers
├── server/               # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data storage abstraction
│   └── vite.ts           # Vite server setup for development
└── shared/               # Code shared between client and server
    └── schema.ts         # Database schema definitions
```

## Key Components

### Frontend Architecture

The frontend is built with React and follows a component-based architecture. Key technologies include:

1. **Vite**: Used as the build tool and development server for fast development cycles.
2. **React**: Component library for building the user interface.
3. **Tailwind CSS**: Utility-first CSS framework for styling.
4. **Shadcn UI**: Component library built on top of Radix UI, providing accessible and customizable UI components.
5. **React Query**: Data-fetching and state management library.
6. **Framer Motion**: Animation library for creating smooth UI animations.

The frontend is organized into:

- **Components**: Reusable UI elements including both custom components and Shadcn UI components.
- **Pages**: Main sections of the portfolio (Home, About, Skills, Projects, Resume, Contact).
- **Hooks**: Custom React hooks for form handling, toast notifications, and checking mobile devices.
- **Providers**: Context providers for theme management.

### Backend Architecture

The backend is built with Express.js and TypeScript, following a simple and modular architecture:

1. **Express**: Web framework for handling HTTP requests.
2. **Drizzle ORM**: Type-safe ORM for database interactions.
3. **Zod**: Schema validation library for request validation.

The server is organized into:

- **Routes**: API endpoint definitions.
- **Storage**: Data access layer abstracting database operations.
- **Middleware**: Request processing and error handling.

### Database Schema

The application uses a PostgreSQL database with two main tables:

1. **Users**:
   - `id`: Serial primary key
   - `username`: Unique username
   - `password`: Password (should be hashed in production)

2. **Contact Messages**:
   - `id`: Serial primary key
   - `name`: Sender's name
   - `email`: Sender's email
   - `subject`: Message subject
   - `message`: Message content
   - `createdAt`: Timestamp of message creation

The schema is defined using Drizzle ORM with Zod integration for type validation.

## Data Flow

### Contact Form Submission

```
┌─────────────┐     ┌─────────────────┐     ┌────────────────┐     ┌─────────────┐
│ React Form  │────►│ Form Validation │────►│ API Request    │────►│ Server API  │
└─────────────┘     └─────────────────┘     └────────────────┘     └──────┬──────┘
                                                                          │
┌─────────────┐     ┌─────────────────┐     ┌────────────────┐     ┌──────▼──────┐
│ Toast       │◄────│ Response        │◄────│ API Response   │◄────│ Database    │
└─────────────┘     └─────────────────┘     └────────────────┘     └─────────────┘
```

1. User fills out the contact form on the frontend.
2. Form data is validated using client-side validation with Zod.
3. Data is sent to the server via an API request.
4. Server validates the incoming data with Zod.
5. Validated data is stored in the database using Drizzle ORM.
6. Server sends a success/error response back to the client.
7. Client displays a toast notification to confirm submission.

## External Dependencies

### Frontend Dependencies

- **UI Components**: Radix UI primitives (via Shadcn UI)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Data Fetching**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod

### Backend Dependencies

- **Server**: Express.js
- **Database ORM**: Drizzle
- **Database Connection**: @neondatabase/serverless (for PostgreSQL)
- **Validation**: Zod
- **Session Management**: connect-pg-simple

## Deployment Strategy

The application is configured for deployment on the Replit platform:

1. **Build Process**:
   - Frontend: Built with Vite (`npm run build`)
   - Backend: Built with esbuild

2. **Runtime Configuration**:
   - Development: Using `tsx` to run TypeScript files directly
   - Production: Running the compiled JavaScript in `dist/`

3. **Environment Variables**:
   - `DATABASE_URL`: PostgreSQL connection string
   - `NODE_ENV`: Runtime environment (development/production)

4. **Replit Specific Configuration**:
   - Deployment target: Autoscale
   - Port mapping: 5000 -> 80
   - Module dependencies: Node.js 20, Web, PostgreSQL 16

The deployment workflow is defined in the `.replit` file, which specifies build commands, run commands, and port configurations specific to the Replit platform.