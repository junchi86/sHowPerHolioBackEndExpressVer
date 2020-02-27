import express from 'express'
import routes from '../routes'
import { login, join, logOut, getLogin, getHome, getJoin } from '../controllers/globalController'

const globalRouter = express.Router()

globalRouter.get(routes.home, getHome)
globalRouter.get(routes.login, getLogin)
globalRouter.get(routes.join, getJoin)

globalRouter.post(routes.join, join)
globalRouter.post(routes.login, login)
globalRouter.post(routes.logOut, logOut)

export default globalRouter