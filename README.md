# 🏀 NBA Playoff Insights Dashboard

A Full-stack web application that tracks NBA Playoff games, player performance, and generates real-time statistical insights.

Built with React, Node.js, and JWT authentication.

---

## Core Features

### 🏀 NBA Data Tracking
- View live playoff games
- Browse teams and players stats
- Track performance trends over time

### 📊 Insight Engine
- Identifies player performance trends
- Compares recent performance vs season average
- Highlights "hot," "cold" and "neutral" streaks
- Example:
    > “Scoring up 18% over last 5 games”

### ⚡ Clean Data Layer
- Backend normalizes raw NBA API data
- Consistent structure across players, teams, and games
- Prepares data for frontend visualization

---

## 🧱 Tech Stack

### Frontend
#### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

##### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

##### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
- React (Vite)
- Component-based UI
- Data Visualization (charts optional)

### Backend
- Node.js
- Express.js REST API
- Custom data transformation layer

### Data Source
- NBA Statistic API (external)

---

## 📁 Project Structure
```
/server
→ Express API
→ Data processing + insights engine
/client
→ React frontend
→ Dashboard UI
```

---

## ⚙️ How to Run Locally

### 1. Clone Repo
```
git clone <repo-url>
cd project-folder
```

### 2. Backend Setup
```
cd server
npm install
npm run dev
```

### 3. Frontend Setup
```
cd client
npm install
npm run dev
```