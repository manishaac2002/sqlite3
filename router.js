import  express  from "express";
import controller from "./controller.js"
const dbRouter = express.Router()


dbRouter.get('/test',controller.test)

export default dbRouter