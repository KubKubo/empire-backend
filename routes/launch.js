const express = require('express');
const router = express.Router();

router.post('/bot/:name', (req, res) => {
  const botName = req.params.name;
  res.send(`Launching bot: ${botName}`);
});

router.post('/fivem/start', (req, res) => {
  res.send('Starting EmpireLA RP Server...');
});

module.exports = router;
