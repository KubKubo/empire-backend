const express = require('express');
const router = express.Router();
const axios = require('axios');
const qs = require('querystring');

router.get('/login', (req, res) => {
  const redirect = `https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${process.env.DISCORD_REDIRECT_URI}&response_type=code&scope=identify`;
  res.redirect(redirect);
});

router.get('/callback', async (req, res) => {
  const code = req.query.code;
  const tokenRes = await axios.post('https://discord.com/api/oauth2/token', qs.stringify({
    client_id: process.env.DISCORD_CLIENT_ID,
    client_secret: process.env.DISCORD_CLIENT_SECRET,
    grant_type: 'authorization_code',
    code,
    redirect_uri: process.env.DISCORD_REDIRECT_URI,
    scope: 'identify'
  }), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  const userRes = await axios.get('https://discord.com/api/users/@me', {
    headers: { Authorization: `Bearer ${tokenRes.data.access_token}` }
  });

  const user = userRes.data;
  req.session.user = user;
  res.redirect(`/dashboard/${user.id}`);
});

module.exports = router;
