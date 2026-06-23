# Career UI

A React frontend for a career prediction platform. Users can register, log in, enter their skills, and get job role predictions powered by a machine learning backend. Built with Vite and Tailwind CSS.

## What it does

- Register and log in with JWT-based auth
- Input your skills and get an ML-powered job role prediction
- View your prediction history
- Manage your profile (CGPA, skills, interests, projects)
- Protected routes — unauthenticated users are redirected to login

## Tech stack

- React 18
- Vite
- Tailwind CSS v4
- Axios (API calls)
- React Router DOM (routing)
- React Icons

## Project structure

```
src/
├── api/            # axios client + per-resource API functions
├── components/     # Navbar, Sidebar, PredictionCard, StatCard, ProtectedRoute
├── context/        # AuthContext (JWT + user state)
├── layouts/        # DashboardLayout
└── pages/          # Login, Register, Dashboard, Predict, History, Profile
```

## Getting started

You'll need Node.js 18+ and the backend running (see the Spring Boot repo).

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default. Make sure the Spring Boot API and the FastAPI ML service are both up before testing predictions.

## Environment

By default, Axios is configured to hit the backend at `http://localhost:80` (through Nginx if you're using Docker Compose). If you're running services individually, update the base URL in `src/api/axiosClient.js`.

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Notes

- Auth tokens are stored in memory via React context. Refreshing the page will log you out unless you implement persistent storage.
- The prediction flow calls the FastAPI service through Nginx — make sure `/predict` is correctly proxied if running without Docker Compose.
