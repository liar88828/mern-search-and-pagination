import {db} from "../db.mjs";
import {DataTypes} from "sequelize";

export const User = db.define('user', {
			name: DataTypes.STRING,
	qrValue:DataTypes.STRING,
			alamat: DataTypes.STRING,
			nohp: DataTypes.STRING,
		}, {freezeTableName: true}
)