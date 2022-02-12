//create token and saving in c
exports.sendSeekerToken = (user, statuscode, res) => {
  const token = user.getJWTToken();
  const options = {
    httpOnly: true,
    expires: new Date(Date.now() * '5d' * 24 * 60 * 60 * 1000),
  };
  res.status(statuscode).cookie('token', token, options).json({
    success: true,
    user,
    token,
  });
};


exports.sendRecruiterToken = (user, statuscode, res) => {
  const token = user.getJWTToken();
  const options = {
    httpOnly: true,
    expires: new Date(Date.now() * '5d' * 24 * 60 * 60 * 1000),
  };
  res.status(statuscode).cookie('ARTOKEN', token, options).json({
    success: true,
    user,
    token,
  });
};




