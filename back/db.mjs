import {Sequelize} from "sequelize";

export const db = new Sequelize('scan',
		'root', '',
		{
			host: 'localhost',
			dialect: 'mysql'
		})