const mongoose = require('mongoose');
const MongoConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://myemailer:agwate@myemailer.ewkqy.mongodb.net/test`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    mongoose.connection.readyState == 1
      ? console.log('Connected')
      : console.log('Not Connected');
  } catch (error) {}
};
module.exports = MongoConnection;
