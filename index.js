const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

mongoose
  .connect('CONNECTION STRING')
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));

app.listen(3000, () => console.log('App is listening on port 3000'));

app.use(express.json());

app.use('/student', studentRoutes);
