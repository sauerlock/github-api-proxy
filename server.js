const express = require('express');
const axios = require('axios');
const parseLinkHeader = require('parse-link-header');
const cors = require('cors');

const app = express();
const port = 3001;
const token = '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'; // Replace with your own token

app.use(cors());
app.use(express.json());

const authHeaders = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github.v3+json',
};

app.get('/api/users', async (req, res, next) => {
  try {
    const since = req.query.since || 0;
    const url = `https://api.github.com/users${since ? `?since=${since}` : ''}`;
    const response = await axios.get(url, { headers: authHeaders });
    const linkHeaderParsed = parseLinkHeader(response.headers.link) || {};
    const nextLink = linkHeaderParsed.next ? linkHeaderParsed.next.url : null;
    res.json({ users: response.data, nextLink });
  } catch (error) {
    next(error);
  }
});

app.get('/api/users/:username/details', async (req, res, next) => {
  try {
    const username = req.params.username;
    const url = `https://api.github.com/users/${username}`;
    const response = await axios.get(url, { headers: authHeaders });
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

app.get('/api/users/:username/repos', async (req, res, next) => {
  try {
    const username = req.params.username;
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await axios.get(url, { headers: authHeaders });
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.response ? err.response.status : 500).json({
    message: err.response ? err.response.statusText : 'Internal Server Error',
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/api/users`);
});
