# 💎 Gemlay — Jewellery E-Commerce Frontend + Backend  
A modern full-stack jewellery platform built with **React (Vite)**, **Tailwind**, **Node.js**, **Express**, **Google OAuth**, and **OTP Login**.

This project includes:

- 🖥 Frontend → React (Vite) + Tailwind  
- 🔐 Login → Google OAuth + OTP Login  
- ⚙ Backend → Node.js + Express + Sessions  
- 📦 Production-ready folder structure  
- 🌐 Local development using:  
  - Frontend → `http://localhost:5173`  
  - Backend → `http://localhost:4000`  

---

## 📁 Project Structure

```
Gemlay/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env        # backend env
│
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── .env        # frontend env (VITE_)
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       ├── auth/
│       │   └── googleClient.js
│       └── components/
│           └── LoginPopup.jsx
│
└── README.md
```


yaml
Copy code

---

# 🚀 Frontend Setup (Vite + React)

### 1️⃣ Install dependencies

cd frontend
npm install

shell
Copy code

### 2️⃣ Create frontend `.env`

VITE_BACKEND_URL=http://localhost:4000

shell
Copy code

### 3️⃣ Run development server

npm run dev

yaml
Copy code

Frontend will run at:

➡ `http://localhost:5173`

---

# 🔐 Backend Setup (Node + Express)

### 1️⃣ Install dependencies

cd backend
npm install

shell
Copy code

### 2️⃣ Create backend `.env`

GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret
GOOGLE_CALLBACK_URL=http://localhost:4000/auth/google/callback
SESSION_SECRET=somerandomtext

shell
Copy code

### 3️⃣ Start backend

npm run dev

yaml
Copy code

Backend will run at:

➡ `http://localhost:4000`

---

# 🔑 Features

### ✔ Google OAuth Login  
Uses `passport-google-oauth20` + cookie session.

### ✔ OTP Login (Mock OTP or SMS provider ready)  
Routes included:

POST /auth/send-otp
POST /auth/verify-otp

sql
Copy code

### ✔ Fetch Current User

GET /api/me

shell
Copy code

### ✔ Logout

POST /auth/logout

yaml
Copy code

---

# 🔗 API Endpoints

### Public:
- `GET /auth/google` → Redirects to Google OAuth
- `GET /auth/google/callback`

### Auth:
- `POST /auth/send-otp`
- `POST /auth/verify-otp`
- `POST /auth/logout`

### User:
- `GET /api/me`

---

# 📦 Build for production

cd frontend
npm run build

css
Copy code

Output goes to:

frontend/dist/

yaml
Copy code

Deployable to:
- Netlify
- Vercel
- GitHub Pages
- cPanel
- AWS S3 / CloudFront
- etc.

---

# 👨‍💻 Development Notes

- Do **NOT** commit `.env` files (contains secrets).
- `node_modules` and `dist` must be ignored.
- Vite requires env variables to start with `VITE_`

---

# 🛠 `.gitignore` Example

node_modules/
dist/
.env
backend/.env
frontend/.env

yaml
Copy code

---

# 🧑‍💻 Author

**Sudipta Mandal**  
GitHub: https://github.com/SudiptaMandal-007

---

# ⭐ If you like this project  
Give the repo a ⭐ on GitHub — it helps a lot!

---
