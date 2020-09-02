const express = require('express');
const path = require('path');

require('dotenv').config();

const app = express();
app.set('port', (process.env.PORT || 3001));
app.use(express.json());

const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
  console.log('in production')
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// global error handler
app.use((err, req, res, next) => {
  const { msg, status } = err;
  if (process.env.NODE_ENV !== 'production') {
    console.log(err);
    console.log('Error:', msg);
  }
  return res.status(status).json(msg);
});

module.exports = app.listen(app.get('port'), () => {
  console.log(`Server running at port ${app.get('port')}`);
});
