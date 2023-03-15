const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//parsing request body as JSON
app.use(bodyParser.json());

// GET API
app.get('/api/:id', (req, res) => {
  const { id } = req.params;
  const { query } = req;
  res.json({ id, query });
});

// POST API
app.post('/api/data', (req, res) => {
  const { data } = req.body;
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});