const mongoose = require('mongoose');
const MongoConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE_NAME}`,
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
