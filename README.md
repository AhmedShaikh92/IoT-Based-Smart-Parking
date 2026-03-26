# SmartPark — IoT Parking System Frontend

A modern React frontend for the IoT Smart Parking System.

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Edit `.env` and set your backend URL:

```
REACT_APP_API_URL=http://localhost:5000
```

### 3. Start the app

```bash
npm start
```

App runs at `http://localhost:3000`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Top navigation bar
│   ├── SlotCard.jsx      # Cinema-style parking slot card
│   ├── Spinner.jsx       # Loading spinner
│   └── Toast.jsx         # Toast notification system
├── context/
│   └── AuthContext.jsx   # Global auth state (JWT + user)
├── pages/
│   ├── LoginPage.jsx     # Login form
│   ├── SignupPage.jsx    # Signup form (user/admin roles)
│   ├── ParkingPage.jsx   # Movie seat-style slot grid
│   ├── AdminDashboard.jsx # Slot management + stats
│   └── AdminBookings.jsx  # Booking history table
├── services/
│   └── api.js            # Axios API calls (all endpoints)
├── App.jsx               # Routing + protected routes
└── index.css             # Global CSS variables & styles
```

## 🎨 Features

- **Cinema-style slot selection** — click to select, confirm to book
- **Real-time polling** — slots auto-refresh every 8 seconds
- **Role-based routing** — users → parking, admins → dashboard
- **Toast notifications** — success/error feedback
- **Admin panel** — add/update/delete slots, view all bookings
- **Dark theme** — sleek space-inspired design

## 🔌 API Endpoints Used

| Method | Endpoint | Used in |
|--------|----------|---------|
| POST | `/auth/signup` | SignupPage |
| POST | `/auth/login` | LoginPage |
| GET | `/slots` | ParkingPage, AdminDashboard |
| POST | `/slots/book` | ParkingPage |
| POST | `/admin/slot` | AdminDashboard |
| PATCH | `/admin/slot/:id` | AdminDashboard |
| DELETE | `/admin/slot/:id` | AdminDashboard |
| GET | `/admin/bookings` | AdminBookings |
| GET | `/admin/stats` | AdminDashboard |

## 🛠 Requirements

- Node.js v14+
- Backend running at `http://localhost:5000` (or set `REACT_APP_API_URL`)
