const mongoose = require('mongoose');

const db = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  host: process.env.DB_HOST,
  name: process.env.DB_NAME ,
}

console.log(db);

mongoose.set('debug', true);

const connect = async () => {
  const uri = `mongodb+srv://${db.user}:${db.pass}@${db.host}/${db.name}?retryWrites=true&w=majority`
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}


module.exports = {
  connect,
}