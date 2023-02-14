import express from "express";
import {getUser, getUserAll, postUser} from "./user.controller.mjs";

 export const userRouter = express.Router()

 userRouter.get('/user',getUser)
 userRouter.get('/userAll',getUserAll)
 userRouter.post('/user',postUser)

