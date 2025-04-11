const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/chat', (req, res) => {
  const { message } = req.body;
  const reply = `Hi! I'm your AI assistant.`;
  res.json({ reply });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});