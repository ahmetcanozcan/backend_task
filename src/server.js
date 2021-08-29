const express = require('express');
const path = require('path');
require('dotenv').config();

const route = require('./route');
const dbUtil = require('./utils/db.util');

const PORT = process.env.PORT || 3000;

const main = async () =>  {

  await dbUtil.connect();
  console.log('Connected to DB');

  const app = express();

  app.use(express.json());

  app.use(route);

  const publicPath = path.join(__dirname, '../public');
  app.use(express.static(publicPath));  

  await app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
}

main();







