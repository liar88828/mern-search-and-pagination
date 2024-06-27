import { User } from './user.model.mjs'
import { Op } from 'sequelize'
import { response } from 'express'

export const getUser = async (req, res) => {
	const page = parseInt(req.query.page) || 0
	const limit = parseInt(req.query.limit) || 10
	const search = req.query.search || ''
	const offset = limit * page

	const totalRows = await User.count({
		where: {
			[Op.or]: [
				{ name: { [Op.like]: '%' + search + '%' } },
				{ email: { [Op.like]: '%' + search + '%' } },
			],
		},
	})

	const totalPage = Math.ceil(totalRows / limit)
	const result = await User.findAll({
		where: {
			[Op.or]: [
				{ name: { [Op.like]: '%' + search + '%' } },
				{ email: { [Op.like]: '%' + search + '%' } },
			],
		},
		offset,
		limit,
		order: [['id', 'DESC']],
	})

	res.json({ result: result, page, limit, totalRows, totalPage })
}

export const postUser = async (req, res) => {
	const user = await User.create(req.body)
}
export const getUserAll = async (req, res) => {
	const result = await User.findAll()
	res.json(result)
}
