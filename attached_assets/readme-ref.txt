# SPC Website

Official website for the Solarpunk Corps (SPC).

## 🚀 About

This project is a full-stack web application designed to showcase the projects, team, and mission of the Solarpunk Corps. It features a modern, responsive design with dynamic themes and interactive elements.

## ✨ Features

- **Interactive Projects Hub**: Dedicated pages for key initiatives like the Rover, Magazine, and Survey projects.
- **Organization Info**: Detailed sections for About Us, Our Team, and Organization Structure.
- **Engagement**: Membership and Contact forms for community involvement.
- **Partner & Alumni Networks**: Showcasing our sponsors, partners, and previous members.
- **Dynamic Theming**: Built-in support for Light and Dark modes.
- **Hidden Easter Egg**: Hunt for the hidden surprise within the site!

## 🛠 Tech Stack

### Frontend
- **Framework**: React with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Shadcn/UI (Radix Primitives)
- **Animations**: Framer Motion
- **Routing**: wouter
- **State Management**: TanStack Query (React Query)

### Backend
- **Runtime**: Node.js
- **Server**: Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js

## 📂 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Application routes/pages
│   │   ├── lib/          # Utilities and helpers
│   │   ├── hooks/        # Custom React hooks
│   │   └── App.tsx       # Main application component
├── server/
│   ├── index.ts          # Backend entry point
│   ├── routes.ts         # API routes definition
│   └── storage.ts        # Database storage interface
├── shared/
│   └── schema.ts         # Shared TypeScript types & Drizzle schema
└── attached_assets/      # Static assets and reference files
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v20 or higher recommended)
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd spc-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Ensure you have your environment variables set up, particularly `DATABASE_URL` for the database connection.

### Running the App

To start the development server (runs both client and server concurrently):

```bash
npm run dev
```

The application will typically be available at `http://localhost:5000`.

### Database Management

To push schema changes to the database:

```bash
npm run db:push
```

## 📜 Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.
- `npm run check`: Run TypeScript type checking.
- `npm run db:push`: Push Drizzle schema changes to the database.

---
*Built for the Solarpunk Corps*
