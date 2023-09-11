const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/dbConfig');
const routes = require('./routes');

const app = express();

const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

dbConnect()
    .then(() => console.log('DB Connect successfully'))
    .catch(err => console.log('DB error: ', err.message));

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on ${PORT}...`));