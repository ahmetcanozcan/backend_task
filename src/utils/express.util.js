const { serverError } = require("./error.util");

const sendError = (res, err) => {
  console.log(err);
  if(!('status' in err)) {
    err = serverError;
  }
  res.status(err.status).send({
    message: err.message,
  });
};

const sendJson = (res, data) => {
  res.status(200).json(data);
};


module.exports = {
  sendError,
  sendJson,
};