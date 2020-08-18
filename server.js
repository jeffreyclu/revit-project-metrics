const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/app', (req, res) => {
  res.send({msg: 'Hello World!'})
});

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
})