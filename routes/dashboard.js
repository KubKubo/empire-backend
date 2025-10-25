const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));
  const userData = users[userId] || { bots: [], servers: [] };
  res.json(userData);
});

module.exports = router;
