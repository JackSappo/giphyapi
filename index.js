const express = require('express');
const app = express();

app.use('/', express.static('./client'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(3000, () => {
  console.log('Server started on port 3000.')
})