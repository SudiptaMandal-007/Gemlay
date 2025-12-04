💎 Gemlay — Jewellery E-Commerce Frontend + Backend

A modern full-stack jewellery platform built with React (Vite), Tailwind, Node.js, Express, Google OAuth, and OTP Login.

This project includes:

🖥 Frontend → React (Vite) + Tailwind

🔐 Authentication → Google OAuth + OTP Login

⚙ Backend → Node.js + Express + Sessions

📦 Clean & Production-ready structure

🌐 Local development using:

Frontend → http://localhost:5173

Backend → http://localhost:4000

📁 Project Structure
Gemlay/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env                 # backend env
│
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── .env                 # frontend env (VITE_)
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       ├── auth/
│       │   └── googleClient.js
│       └── components/
│
└── README.md

🚀 Frontend Setup (Vite + React)
1️⃣ Install dependencies
cd frontend
npm install

2️⃣ Create frontend .env
VITE_BACKEND_URL=http://localhost:4000

3️⃣ Run development server
npm run dev


Frontend runs at:

➡ http://localhost:5173

🔐 Backend Setup (Node + Express)
1️⃣ Install dependencies
cd backend
npm install

2️⃣ Create backend .env
GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret
GOOGLE_CALLBACK_URL=http://localhost:4000/auth/google/callback
SESSION_SECRET=somerandomtext

3️⃣ Start backend
npm run dev


Backend runs at:

➡ http://localhost:4000

🔑 Features
✔ Google OAuth Login

Implemented using passport-google-oauth20 + cookie session.

✔ OTP Login (Mock OTP or SMS-ready)

Endpoints:

POST /auth/send-otp
POST /auth/verify-otp

✔ Fetch Current User
GET /api/me

✔ Logout
POST /auth/logout

🔗 API Endpoints Summary
Public

GET /auth/google

GET /auth/google/callback

Auth

POST /auth/send-otp

POST /auth/verify-otp

POST /auth/logout

User

GET /api/me

📦 Build for Production
cd frontend
npm run build


Output:

frontend/dist/


Deployable to:

Netlify

Vercel

GitHub Pages

Hostinger / cPanel

AWS S3 / CloudFront

Render / Railway

👨‍💻 Development Notes

Never commit .env files.

node_modules/ and dist/ must not be pushed.

Vite env variables must start with VITE_

Use credentials: "include" for cookie-based sessions.

🛠 Recommended .gitignore
node_modules/
dist/
.env
backend/.env
frontend/.env

🧑‍💻 Author

Sudipta Mandal
GitHub: https://github.com/SudiptaMandal-007

⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub — your support motivates further development!