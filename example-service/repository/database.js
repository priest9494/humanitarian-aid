const options = process.env.NODE_ENV === 'production' ? {
	client: 'pg',
	connection: process.env.DATABASE_URL, searchPath: ['public']
} : {
	client: "pg",
	connection: {
		host: "127.0.0.1",
		user: "postgres",
		password: "12345",
		database: "postgres"
	}
};
const knex = require('knex')(options);

module.exports = knex;

/*
CREATE TABLE hello (id INT, message VARCHAR(255));
INSERT INTO hello (id, message) VALUES (1, 'Hello'), (2, 'Hi');
*/