const { Pool } = require("pg");

const credentials = new Pool({
user: "postgres",
password: "mcampbel2",
host: "localhost",
port: 5432,
database: "LongestYardDB",
ssl: false
});

module.exports = credentials;