const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

dotenv.config();

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
  SESSION_SECRET,
  FRONTEND_ORIGIN,
} = process.env;

const app = express();

app.use(
  cors({
    origin: FRONTEND_ORIGIN || 'https://your-frontend-domain.com',
    credentials: true,
  })
);

app.use(express.json());

app.use(
  cookieSession({
    name: 'session',
    keys: [SESSION_SECRET || 'dev-session-key'],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID || '',
      clientSecret: GOOGLE_CLIENT_SECRET || '',
      callbackURL: GOOGLE_CALLBACK_URL || 'https://your-backend-domain.com/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        id: profile.id,
        displayName: profile.displayName,
        email: profile.emails && profile.emails[0] ? profile.emails[0].value : null,
        photo: profile.photos && profile.photos[0] ? profile.photos[0].value : null,
      };
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/failure' }),
  (req, res) => {
    const origin = FRONTEND_ORIGIN || 'https://your-frontend-domain.com';
    res.redirect(origin + '/auth/success');
  }
);

app.get('/auth/failure', (req, res) => {
  res.status(401).send('Google authentication failed');
});

app.get('/api/me', (req, res) => {
  if (!req.user) {
    return res.status(401).json({ user: null });
  }
  res.json({ user: req.user });
});

app.post('/auth/logout', (req, res) => {
  if (typeof req.logout === 'function') {
    req.logout();
  }
  req.session = null;
  res.json({ ok: true });
});



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
