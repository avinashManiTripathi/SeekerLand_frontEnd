const controller = require('../controller/SeekerRegistration.controller');
const verifySignUp = require('../Middleware/verifySignUp.middleware');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post(
    '/api/v1/seeker_registration',
    [verifySignUp.checkDuplicateEmail, verifySignUp.checkDuplicateMobileNumber],
    controller.SeekerRegistration
  );
};
