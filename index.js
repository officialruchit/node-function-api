const express = require('express')
const app = express()
app.use(express.json());
require('dotenv').config();
const port=process.env.Port|| 5555

const matrixRoutes = require('./routes/matrixRoute');
const deepclone = require('./routes/deepcloneRoute');
const throttleRoute = require('./routes/throttleRoute');
const flatten = require('./routes/flattenRoute');

app.use('/',matrixRoutes)
app.use('/',deepclone)
app.use('/', throttleRoute);
app.use('/',flatten)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))