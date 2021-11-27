const express = require('express');
const bodyParser = require('body-parser');
const MongoConnection = require('./Config/MongoDb');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.get('/api/seeker', (req, res) => {});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

MongoConnection();

require('./Routes/SeekerRegistration.routes')(app);

app.get("/status",(req,res)=>{
   res.status(200).send({
     message:"it's working ",
   })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
