const express = require('express');
const bodyParser = require('body-parser');
const MongoConnection = require('./Config/MongoDb');
require('dotenv').config();
const app = express();

app.get('/api/seeker', (req, res) => {
  res.send('Hello world');
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

MongoConnection();
console.log('27017', MongoConnection());

require('./Routes/SeekerRegistration.routes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
