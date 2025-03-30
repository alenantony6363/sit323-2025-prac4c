const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
//  Root Route (GET)
app.get('/', (req, res) => {
  res.send('Welcome to the Calculator Microservice!');
});
//  Power Operation (power)
app.post('/power', (req, res) => {
  const { base, exponent } = req.body;
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    return res.status(400).json({ error: 'Both base and exponent must be numbers.' });
  }
  const result = Math.pow(base, exponent);
  res.json({ result });
});
// Square Root Operation (sqrt)
app.post('/sqrt', (req, res) => {
  const { number } = req.body;
  if (typeof number !== 'number' || number < 0) {
    return res.status(400).json({ error: 'Input must be a non-negative number.' });
  }
  const result = Math.sqrt(number);
  res.json({ result });
});
// Modulo Operation (modulo)
app.post('/modulo', (req, res) => {
  const { dividend, divisor } = req.body;
  if (typeof dividend !== 'number' || typeof divisor !== 'number') {
    return res.status(400).json({ error: 'Both dividend and divisor must be numbers.' });
  }
  if (divisor === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed.' });
  }
  const result = dividend % divisor;
  res.json({ result });
});
//  Start the Server
app.listen(port, () => {
  console.log(`Calculator microservice is running at http://localhost:${port}`);
});
