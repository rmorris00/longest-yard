const express = require('express');

const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser');

const server = express();


server.use(cors());
server.use(bodyParser.json());
server.use(routes);



server.listen(8000, (err) => {
    console.log("running server at 8000");
});