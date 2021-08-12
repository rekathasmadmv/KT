require("dotenv");

module.exports = {
    development: {
        client: "pg",
        connection: process.env.DB_URL,
        migrations:{
            directory: '../db/database/migrations',
        },
        //seeds: {directory: './database/seeds'}
    }
}