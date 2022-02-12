const jwt = require('jsonwebtoken');
require('dotenv').config();

verifyToken = (req, res, next) => {
  let token = req.cookies.token;

  console.log('Avinass', req.cookies);
  if (!token) {
    return res.status(403).send({ message: 'No token provided!' });
  }

  jwt.verify(token, process.env.JWT_AUTH_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' });
    }
    req.seekerId = decoded.id;
    next();
  });
};

verifyRecruiterToken = (req, res, next) => {
  let token = req.cookies.ARTOKEN;

  console.log('Recruiter', req.cookies.ARTOKEN);
  if (!token) {
    return res.status(403).send({ message: 'No token provided!' });
  }

  jwt.verify(token, process.env.JWT_AUTH_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' });
    }
    req.recruiterId = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken,
  verifyRecruiterToken,
};
module.exports = authJwt;
