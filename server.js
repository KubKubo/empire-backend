require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(express.json());

app.use('/auth', require('./routes/auth'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/launch', require('./routes/launch'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Empire backend running on port ${PORT}`));
