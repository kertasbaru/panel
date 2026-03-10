const { error } = require('../utils/response');

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return error(res, 'Unauthorized', 401);
    }

    if (!roles.includes(req.user.role)) {
      return error(res, 'Anda tidak memiliki akses ke resource ini', 403);
    }

    next();
  };
};

module.exports = { authorize };
