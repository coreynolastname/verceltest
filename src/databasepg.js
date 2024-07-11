const { Client } = require('pg')

const client = new Client ({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "root",
    database: "test"
})

client.connect();

client.query(`select * from users`, (res, err)=> {
    if(!err) {
        console.log(res.rows)
    } else {
        console.log(err.message)
    }
    client.end;
})