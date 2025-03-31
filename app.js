const express = require('express');
const app = express();
const port = 3000; 

const validateNumbers = (req, res, next) => {
  const num1 = parseFloat(req.query.num1); 
  const num2 = parseFloat(req.query.num2); 

  if (isNaN(num1) || isNaN(num2)) { 
    return res.status(400).json({
      error: "not number"
    });
  }

  req.nums = { num1, num2 };
  next();
};

app.get('/add', validateNumbers, (req, res) => {
  const { num1, num2 } = req.nums;
  res.json({ result: num1 + num2 });
});
app.get('/subtract', validateNumbers, (req, res) => {
  const { num1, num2 } = req.nums;
  res.json({ result: num1 - num2 });
});

app.get('/multiply', validateNumbers, (req, res) => {
  const { num1, num2 } = req.nums;
  res.json({ result: num1 * num2 });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});