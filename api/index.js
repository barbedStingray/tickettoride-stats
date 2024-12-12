const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

const reviewRouter = require('./routes/review.router')


// Express middleware
app.use(express.json());

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* EXPRESS Routes */
app.use('/api/review', reviewRouter)

// Serve static files
app.use(express.static(path.join(__dirname, '..', 'build')))

// Correctly handle any requests that don't match the above routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

// App Set //
const PORT = process.env.PORT || 5076

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});

// export your app for vercel
module.exports = app