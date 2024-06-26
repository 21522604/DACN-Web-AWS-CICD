const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');

const sequelize = new Sequelize('clothes-web-shop', 'root', "12345678", { host: 'dbinstance.chkyog0u07rz.us-east-1.rds.amazonaws.com', dialect: 'mysql', logging: false });
//, logging: false

module.exports = {
	sequelize,
	connect: async () => {
		try {
			const connection = await mysql.createConnection({
				host: "dbinstance.chkyog0u07rz.us-east-1.rds.amazonaws.com",
				user: "root",
				password: "12345678",
			});

			await connection.query(
				'CREATE DATABASE IF NOT EXISTS `clothes-web-shop`'
			);

			await connection.end();

			await sequelize.authenticate();
			console.log('Connection has been established successfully.');
			await sequelize.sync();
		} catch (error) {
			console.error('Unable to connect to the database:', error);
		}
	}
}