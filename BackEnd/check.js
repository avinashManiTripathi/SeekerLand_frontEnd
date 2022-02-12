const express = require('express');
const bodyParser = require('body-parser');
const MongoConnection = require('./Config/MongoDb');
const cors = require('cors');
require('dotenv').config();
var cookieParser = require('cookie-parser');
const app = express();


const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

MongoConnection();

require('./Routes/SeekerAuth.routes')(app);
require('./Routes/EducationDetails.routes')(app);
require('./Routes/ITSkills.routes')(app);
require('./Routes/Job.routes')(app);
require('./Routes/Project.routes')(app);
require('./Routes/SeekerJob.routes')(app);
require('./Routes/JobPreferences.routes')(app);
require('./Routes/PersonalDetails.routes')(app);
require('./Routes/Recruiter.routes')(app);

app.get('/status', (req, res) => {
  res.status(200).send({
    message: "it's working ",
    cookie: req.cookies,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
