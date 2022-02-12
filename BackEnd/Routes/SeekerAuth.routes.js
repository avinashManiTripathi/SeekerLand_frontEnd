const controller = require('../controller/SeekerAuth.controller');
const verifySignUp = require('../Middleware/verifySignUp.middleware');
const authJwt = require('../Middleware/verifyToken');

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
  app.post('/api/v1/seeker_login', controller.SeekerLogin);
  app.get(
    '/api/v1/seeker_details',
    [authJwt.verifyToken],
    controller.loadSeekerDetails
  );
  app.get('/api/v1/logout', controller.logOut);
};
