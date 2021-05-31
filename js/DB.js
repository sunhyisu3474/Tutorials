const sql = require('mssql')
const dbConfigMssql = require('./dbconfig-mssql.js');

async function connectTest(){
	try {
		let pool = await sql.connect(dbConfigMssql);
		let result1 = await pool.request().query('select 1 as number')
		console.dir(result1)
	} catch (err) {
		console.log(err);
		// ... error checks
	}
}

sql.on('error', err => {
    // ... error handler
})
