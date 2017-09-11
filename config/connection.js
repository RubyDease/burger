// Set up database connection
var mysql = require('mysql');
var connection;

// add in the environment variable option for JAWSDB for heroku
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'iwqrvsv8e5fz4uni.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'x38ad5nwa8uc9qmv',
		password: 'vd5cnvtiqwkc3prb',
		database: 'burgers_db'
	});
};


connection.connect(function(err) {
	if (err) {
		console.error('error conencting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// export the connection back to orm
module.exports = connection;
