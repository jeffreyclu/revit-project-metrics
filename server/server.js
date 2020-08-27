const express = require('express');

require('dotenv').config();

const app = express();
app.set('port', (process.env.PORT || 3001));
app.use(express.json());

const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

app.get('/', (req, res) => {
  res.send({msg: 'Welcome to the Revit Project Metrics API!'})
});

// global error handler
app.use((err, req, res, next) => {
  const { msg, status } = err;
  console.log(msg);
  return res.status(status).json(msg);
});

module.exports = app.listen(app.get('port'), () => {
  console.log(`Server running at port ${app.get('port')}`);
});
