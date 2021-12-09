const express = require('express');
const bodyParser = require('body-parser');
const MongoConnection = require('./Config/MongoDb');
const cors = require('cors');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

MongoConnection();

require('./Routes/SeekerRegistration.routes')(app);
require('./Routes/EducationDetails.routes')(app);
require('./Routes/ITSkills.routes')(app);

app.get('/status', (req, res) => {
  res.status(200).send({
    message: "it's working ",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
