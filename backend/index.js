import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/chat', (req, res) => {
  const message = req.body.message;
  const reply = `I'm your AI assistant!`;
  res.json({ reply });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Backend running at http://0.0.0.0:${port}`);
});



