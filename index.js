const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

function calculateSum(counter) {
  var sum = 0;
  for (var i = 0; i <= counter; i++) {
    sum = sum + i;
  }
  return sum;
}
function calculateMul(counter) {
  var mul = 0;
  for (var i = 0; i <= counter; i++) {
    mul = mul + i;
  }
  return mul;
}

function handleFirstRequest(req, res) {
  var counter = req.body.counter;

  var calculatedSum = calculateSum(counter);
  var calculatedMul = calculateMul(counter);

  var answer = {
    sum: calculatedSum,
    mul: calculatedMul,
  };
  res.send(answer);
}
function givepage(req, res) {
  res.send("hello");
}
app.get("/handleSum", handleFirstRequest);
app.get("/", givepage);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);
