require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Root route for Railway landing
app.get('/', (req, res) => {
  res.send('EmpireLA backend is running 🚀');
});

app.use('/auth', require('./routes/auth'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/launch', require('./routes/launch'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Empire backend running on port ${PORT}`));
