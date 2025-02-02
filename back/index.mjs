import express from 'express'
import cors from 'cors'
import {db} from "./db.mjs";
import {userRouter} from "./user/user.router.mjs";

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())
app.use(userRouter)


db.sync().then(() => {
	app.listen(port, () => console.log('run in ' + port))
})

