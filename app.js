

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('DevOps Project Running 🚀');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});