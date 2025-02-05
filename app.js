import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const isPrime = (number) => {
  for (let i = 2; i < number; i++) if (number % i === 0) return false;
  return number > 1;
};

const isPerfect = (number) => {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) sum += i;
  }
  return sum === number;
};

const isArmstrong = (number) => {
  const digits = number.toString().split('');
  if (number < 0) {
    digits.splice(0, 1);
  }
  const digit_sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
  let sum = 0;
  const n = digits.length;
  digits.forEach((digit) => {
    sum = sum + Math.pow(parseInt(digit), n);
  });
  return { isArmstrong: sum === parseInt(number), digit_sum };
};

const isEven = (number) => number % 2 === 0;

const funFact = async (number) => {
  const response = await axios.get(`http://numbersapi.com/${number}/math`);
  return response.data;
};

app.get('/api/classify-number', async (req, res) => {
  const number = req.query.number;

  if (isNaN(number)) {
    return res.status(400).json({
      number: 'alphabet',
      error: true,
    });
  }

  let properties = [];

  const checkArmstrong = isArmstrong(number);

  if (checkArmstrong.isArmstrong) properties.push('Armstrong');

  properties.push(isEven(number) ? 'Even' : 'Odd');

  res.status(200).json({
    number: parseInt(number),
    is_prime: isPrime(number),
    is_perfect: isPerfect(number),
    properties,
    digit_sum: checkArmstrong.digit_sum,
    fun_fact: await funFact(number),
  });
});

app.listen(8000, () => console.log('App listening on port 8000'));
