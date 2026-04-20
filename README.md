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